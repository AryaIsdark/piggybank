import React from "react";
import "./style.css";
import { useParams, Link } from "react-router-dom";

const getMessage = (type: string) => {
  switch (type) {
    case "smokes":
      return "Smoking kills...🚭";
    case "candy":
      return "Too much candy makes you fat... 🐨";
    case "alcohol":
      return "Cheeeeeers M8... 🍻";
  }
};

const PiggyRecieptScreen = () => {
  const { type } = useParams();
  console.log(type);

  return (
    <>
      <div className={"piggy-reciept-container"}>
        Your payment is registered
        <blockquote>{getMessage(type || "")}</blockquote>
        <Link to="/">O' Right</Link>
      </div>
    </>
  );
};

export default PiggyRecieptScreen;
