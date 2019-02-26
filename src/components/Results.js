import React, { Component } from "react";
import "../styles/Results.css";

class Results extends Component {
  render() {
    return (
      <div>
        <p>Score: {this.props.currentValue}</p>
        <p>
          FizzBuzz value:{" "}
          {this.props.currentValue % 15 === 0
            ? "FizzBuzz"
            : this.props.currentValue % 3 === 0
            ? "Fizz"
            : this.props.currentValue % 5 === 0
            ? "Buzz"
            : this.props.currentValue}
        </p>
      </div>
    );
  }
}
export default Results;
