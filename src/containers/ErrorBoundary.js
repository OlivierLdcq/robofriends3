import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { ErrorBoundary: false };
  }
  componentDidCatch(error, info) {
    this.setState({ ErrorBoundary: true });
  }

  render() {
    if (this.state.ErrorBoundary) {
      return <h1>Oooooops something went wrong</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
