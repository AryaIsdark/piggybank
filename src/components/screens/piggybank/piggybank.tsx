import React from "react";
import "./style.css";
import { Button } from "antd";

const PiggyBankScreen = () => {
  return (
    <>
      <div className={"piggy-container"}>
        <div className={"piggy"}>
          <div className={"piggy-balance"}>250 DKK</div>
        </div>
        <Button className={"piggy-pay"}>PAY</Button>
      </div>
    </>
  );
};

export default PiggyBankScreen;
