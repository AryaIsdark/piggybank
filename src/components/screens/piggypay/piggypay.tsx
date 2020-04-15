import React, { useState } from "react";
import { Button } from "antd";
import "./style.css";
import { postPay } from "api/apiFunctions";
import { useHistory } from "react-router-dom";

const tickets = [
  { id: "1", type: "candy", price: 15 },
  { id: "2", type: "alcohol", price: 20 },
  { id: "3", type: "smokes", price: 20 },
  { id: "4", type: "bad habits", price: 1 },
];

const PiggyPayScreen = () => {
  const history = useHistory();
  const [selectedTicket, setSelectedTicket] = useState({
    id: "0",
    type: "",
    price: 0,
  });
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnTicketSelect = (element: any) => {
    setSelectedTicket(element);
  };

  const handleOnPayClick = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      await postPay({
        type: selectedTicket.type,
        price: selectedTicket.price,
      });
      history.replace("/reciept/" + selectedTicket.type);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
      setHasError(true);
    }
  };

  return (
    <div className={"piggy-pay-container"}>
      <div className={"tickets"}>
        {tickets.map((element) => (
          <div
            key={element.id}
            className={`ticket-item ${element.id === selectedTicket.id &&
              "selected"}`}
            onClick={() => handleOnTicketSelect(element)}
          >
            {element.type}
          </div>
        ))}
      </div>
      <div className={"piggy-pay-price"}>
        {selectedTicket.price > 0 && (
          <>
            {selectedTicket.price} .Kr
            <Button
              loading={isLoading}
              onClick={handleOnPayClick}
              type={"primary"}
              size={"large"}
              shape={"circle"}
              icon={"check"}
            ></Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PiggyPayScreen;
