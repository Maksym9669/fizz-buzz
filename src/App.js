import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      currentValue: 0
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.onIterate = this.onIterate.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }
  getData(data) {
    const { score, id } = data;
    this.setState({ username: id, currentValue: score });
  }
  onIterate() {
    const { username } = this.state;
    this.setState({ currentValue: this.state.currentValue + 1 });
    axios({
      method: "post",
      url: `http://131.247.210.6:8000/${username}`,
      data: { id: this.state.username, score: this.state.currentValue },
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(res => console.log(res));
  }

  onSubmit(event) {
    const { username } = this.state;

    //Make a get request and (post request if needed).
    // axios
    //   .get(`http://131.247.210.6:8000/${username}`)
    //   .then(res => {
    //     let response = res.data;

    //     console.log(response.score);
    //     this.setState({ username: response.id, currentValue: response.score });
    //   })
    //   .catch(error => {
    // axios({
    //   method: "post",
    //   url: `http://131.247.210.6:8000/${username}`,
    //   data: { score: this.state.currentValue },
    //   config: { headers: { "Content-Type": "multipart/form-data" } }
    // })
    //       .then(() => {
    //         axios
    //           .get(`http://131.247.210.6:8000/${username}`)
    //           .then(res => {
    //             let response = res.data;
    //             console.log(response.score);
    //             this.setState({
    //               username: response.id,
    //               currentValue: response.score
    //             });
    //           })
    //           .catch(err => console.log(err));
    //       })
    //       .catch(error => console.log(error));
    //   });

    axios(`http://131.247.210.6:8000/${username}`)
      .then(result => this.getData(result.data))
      .catch(error => console.log(error));
    // axios({
    //   method: "post",
    //   url: `http://131.247.210.6:8000/${username}`,
    //   data: { id: this.state.username, score: this.state.currentValue },
    //   config: { headers: { "Content-Type": "multipart/form-data" } }
    // }).then(res => console.log(res));
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {this.state.username}
        {"  "}
        {this.state.currentValue}
        <Header />
        <div class="container">
          <Login
            onChange={this.handleChange}
            username={this.state.username}
            onSubmit={this.onSubmit}
          />
          <Game onIterate={this.onIterate} />
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
    return <button onClick={this.props.onIterate}>Increment</button>;
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
          <Button onIterate={this.props.onIterate} />
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
          <form onSubmit={this.props.onSubmit}>
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
                  <input type="text" onChange={this.props.onChange} />
                </div>
                <div class="col-6 text-center" />
              </div>
              <button type="submit">Register</button>
            </div>
          </form>
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
