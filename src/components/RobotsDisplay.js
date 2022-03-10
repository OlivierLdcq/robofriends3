import React, { Component } from "react";
import Card from "./Card";
import "./RobotsDisplay.css";

const RobotsDisplay = ({ robotsList }) => {
  return (
    <div className="RobotsDisplay">
      {robotsList.map((robot) => {
        return <Card name={robot.name} id={robot.id} email={robot.email} />;
      })}
    </div>
  );
};

export default RobotsDisplay;
