import React, { Component } from "react";
import "../styles/Header.css";
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        Fizz Buzz Challenge
        <a style={{}} href="https://github.com/Maksym9669">
          {" "}
          <i class="fab fa-github" />
        </a>
        <span style={{ marginLeft: "15px" }}>
          {this.props.authorized ? "Welcome, " + this.props.username : null}
        </span>
      </header>
    );
  }
}
export default Header;
