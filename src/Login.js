import React, { Component } from "react";
import fire from "./firebase/firebaseConfig";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };
  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button onClick={this.login}>Login </button>
          <button onClick={this.signup}>Sign Up </button>
        </form>
      </div>
    );
  }
}

export default Login;
