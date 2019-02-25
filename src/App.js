import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
    return (
      <div>
        <p>Something</p>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div>
        <p>Something</p>
      </div>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <div>
        <p>Something</p>
      </div>
    );
  }
}

class Results extends Component {
  render() {
    return (
      <div>
        <p>Something</p>
      </div>
    );
  }
}

export default App;
