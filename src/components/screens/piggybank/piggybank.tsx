import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PiggyBankScreen = () => {
  return (
    <>
      <div className={"piggy-container"}>
        <div className={"piggy"}>
          <div className={"piggy-balance"}>250 .Kr</div>
        </div>
        <Link to={"/pay"} className={"piggy-pay"}>
          PAY
        </Link>
      </div>
    </>
  );
};

export default PiggyBankScreen;
