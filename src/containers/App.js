import React, { Component } from "react";
import RobotsDisplay from "../components/RobotsDisplay";
import Scroll from "../components/Scroll";
import SearchField from "../components/SearchField";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robotsList: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) =>
      result
        .json()
        .then((fetchedList) => this.setState({ robotsList: fetchedList }))
    );
  }
  inputGotChanged = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robotsList, searchField } = this.state;
    console.log(robotsList);
    console.log(searchField);
    const filteredList = robotsList.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <SearchField inputGotChanged={this.inputGotChanged} />
        <Scroll>
          {" "}
          <ErrorBoundary>
            <RobotsDisplay robotsList={filteredList} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default App;
