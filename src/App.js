import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="container">
          <Login />
          <Game />
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        Fizz Buzz Challenge
        <a style={{}} href="https://github.com/Maksym9669">
          {" "}
          <i class="fab fa-github" />
        </a>
      </header>
    );
  }
}

class Button extends Component {
  render() {
    return <button>Increment</button>;
  }
}

class Game extends Component {
  render() {
    return (
      <div class="row" style={{ backgroundColor: "rgb(220,220,220)" }}>
        <div class="col-8">
          <Results />
        </div>
        <div class="col-4">
          <Button />
        </div>
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div class="row">
        <div class="offset-2 col-8 offset-2">
          <div
            style={{
              minHeight: "200px",
              backgroundColor: "rgb(230, 230, 230)"
            }}
          >
            <p>Login</p>
            <div class="row">
              <div class="col-6">
                <p>Enter your username: </p>
              </div>
              <div class="col-6">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Results extends Component {
  render() {
    return (
      <div>
        <p>Current score: 10</p>
        <p>Current value: Buzz</p>
      </div>
    );
  }
}

export default App;
