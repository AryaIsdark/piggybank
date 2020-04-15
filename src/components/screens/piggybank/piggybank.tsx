import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getAllPayments } from "api/apiFunctions";
import CountUp from "react-countup";
import { Spin } from "antd";

const PiggyBankScreen = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(0);

  const getBalance = (payments: any) => {
    let balance = 0;
    payments.forEach((element: any) => {
      balance += element.price;
      setBalance(balance);
    });
  };

  const loadData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await getAllPayments();
      setData(response.data.data);
      getBalance(response.data.data);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={"piggy-container"}>
        <div className={"piggy"}>
          <div className={"piggy-balance"}>
            <Spin size={"large"} spinning={isLoading}>
              <CountUp end={balance} />
              .Kr
            </Spin>
          </div>
        </div>
        <Link to={"/pay"} hidden={isLoading} className={"piggy-pay"}>
          PAY
        </Link>
      </div>
    </>
  );
};

export default PiggyBankScreen;
