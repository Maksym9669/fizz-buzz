import React, { Component } from "react";
import "../styles/Button.css";
class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-danger btn-button"
        onClick={this.props.onIterate}
      >
        Increment
      </button>
    );
  }
}
export default Button;
