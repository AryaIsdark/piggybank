import React from "react";
import "./style.css";
import { Button } from "antd";

const PiggyBankScreen = () => {
  return (
    <>
      <div className={"piggy-container"}>
        <div className={"piggy"}></div>
        <Button className={"piggy-pay"}>PAY</Button>
      </div>
    </>
  );
};

export default PiggyBankScreen;
