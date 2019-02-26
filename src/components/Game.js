import React, { Component } from "react";
import "../styles/Game.css";
import Results from "./Results";
import Button from "./Button";
class Game extends Component {
  render() {
    return (
      <div class="row" style={{ backgroundColor: "rgb(220,220,220)" }}>
        <div class="col-8">
          <Results currentValue={this.props.currentValue} />
        </div>
        <div class="col-4">
          <Button onIterate={this.props.onIterate} />
        </div>
      </div>
    );
  }
}

export default Game;
