import React, { Component } from "react";
import "./Card.css";
const Card = ({ name, email, id }) => {
  return (
    <div className="Card">
      <img src={`https://robohash.org/${id}`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
