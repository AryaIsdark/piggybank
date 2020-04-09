import React, { useState } from "react";
import { Button } from "antd";
import "./style.css";

const tickets = [
  { id: "1", type: "candy", price: 15 },
  { id: "2", type: "alcohol", price: 20 },
  { id: "3", type: "smokes", price: 20 },
  { id: "4", type: "bad habbits", price: 1 },
];

const PiggyPayScreen = () => {
  const [selectedTicket, setSelectedTicket] = useState({ id: "0", price: 0 });
  const handleOnTicketSelect = (element: any) => {
    console.log(element);
    setSelectedTicket(element);
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
            <hr></hr>
            <Button
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
