import React, { Component } from "react";
import fire from "../firebase/firebaseConfig";


// function Addusers(compagny,userUid,userEmail) {
//   fire.database.ref('compagny/' + userUid).set({
//     compagny,
//     userUid,
//     userEmail,
//   }),
// };


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compagny:'',
      userUid:'',
      userEmail:'',
    };
    
  }
  logout = () => {
    fire.auth().signOut();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 

  render() {
    const userUid = this.props.user.uid;
    const userEmail = this.props.user.email;
    return (
      <div>
        <h1>You are logged in !</h1>
        <text>user id : {userUid}</text>
        <br />
        <text>user email : {userEmail}</text>
        <br />
        <button onClick={this.logout}>loggout</button>
      </div>
    );
  }
}
