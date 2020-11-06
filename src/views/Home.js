import React, { Component } from "react";
import fire, { db } from "../firebase/firebaseConfig";
import firebase from 'firebase';

// function AddUsers(compagny, userUid,userEmail) {
//   db.ref("compagny/" + userUid).set({
//       compagny,
//       userUid,
//       userEmail
//   });
// }

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // compagny: "",
      userUid: this.props.user.uid,
      
      userEmail: "",
    };
    
  }
  logout = () => {
    fire.auth().signOut();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e,userUid, userEmail ) => {
    e.preventDefault();
    db.ref("compagny/" + this.state.userUid).set({userEmail,userUid});
  };

  render() {
    const userUid = this.props.user.uid;
    const userEmail = this.props.user.email;

    return (
      <div>
        <h1>Utilisateur</h1>
        <text>user id : {userUid}</text>
        <br />
        <text>user email : {userEmail}</text>
        <br />
        <form>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={this.handleChange}
            value={userEmail}
          />
          <input
            name="userUid"
            type="text"
            id="userUid"
            placeholder="enter userUid"
            onChange={this.handleChange}
            value={userUid}
          />
          <button onClick={this.addUser}>add</button>
        </form>
        <button onClick={this.logout}>loggout</button>
      </div>
    );
  }
}
