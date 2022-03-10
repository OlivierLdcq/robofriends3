import React, { Component } from "react";
import "./SearchField.css";

const SearchField = ({ inputGotChanged }) => {
  return (
    <div>
      {" "}
      <h1>RoboFriends App !</h1>
      <input className="input" type="search" onChange={inputGotChanged} />
    </div>
  );
};
export default SearchField;
