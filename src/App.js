import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Game from "./components/Game";
class App extends Component {
  constructor(props) {
    super(props);
    //Create a local state for the parent object, so that its children can manipulate its state via class methods that will be passed as props
    this.state = {
      username: "",
      currentValue: 0,
      welcome: false,
      authorized: false
    };
    //Bind class methods to an instance (this), so we have access to "this" inside class methods
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
  //For each iteration make a post request to the server
  onIterate() {
    const { username } = this.state;
    this.setState({ currentValue: this.state.currentValue + 1 });
    axios({
      method: "post",
      url: `http://131.247.210.6:8000/${username}`,
      data: { id: this.state.username, score: this.state.currentValue + 1 },
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(res => console.log(res));
  }
  //Make a get request when the user clicks a button for registration
  onSubmit(event) {
    const { username } = this.state;
    if (username === "") {
      this.setState({ welcome: true, authorized: false });
    } else {
      this.setState({ welcome: true, authorized: true });
    }
    // this.setState({ welcome: true, authorized: true });
    axios(`http://131.247.210.6:8000/${username}`)
      .then(result => this.getData(result.data))
      .catch(error => console.log(error));
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header
          username={this.state.username}
          authorized={this.state.authorized}
        />
        <div class="container">
          {this.state.authorized ? (
            <Game
              onIterate={this.onIterate}
              currentValue={this.state.currentValue}
            />
          ) : (
            <Login
              onChange={this.handleChange}
              username={this.state.username}
              onSubmit={this.onSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
