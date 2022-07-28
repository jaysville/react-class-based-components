import { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(err) {
    this.setState({ hasError: err.message });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.hasError}</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
