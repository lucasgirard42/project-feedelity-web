import React, { Component } from "react";
import fire from "./firebase/firebaseConfig";
import Login from "./views/Login";
import Home from "./views/Home";

export default  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div className="App">{this.state.user ? <Home user={this.state.user} /> : <Login />}</div>;
  }
}


