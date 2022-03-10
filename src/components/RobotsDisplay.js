import React, { Component } from "react";
import Card from "./Card";
import "./RobotsDisplay.css";

const RobotsDisplay = ({ robotsList }) => {
  if (true) {
    throw new Error("oupsy");
  }
  return (
    <div className="RobotsDisplay">
      {robotsList.map((robot) => {
        return <Card name={robot.name} id={robot.id} email={robot.email} />;
      })}
    </div>
  );
};

export default RobotsDisplay;
