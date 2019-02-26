import React, { Component } from "react";
import "../styles/Login.css";
class Login extends Component {
  render() {
    return (
      <div class="row">
        <div class="offset-md-2 col-sm-12 col-md-8 offset-md-2 ">
          <div class="login">
            <form onSubmit={this.props.onSubmit}>
              <div class="row row-content">
                <div class="col-sm-12 col-md-6 ">
                  <p>Enter your username: </p>
                </div>
                <div class="col-sm-12 col-md-6 ">
                  <input type="text" onChange={this.props.onChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-danger btn-button">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
