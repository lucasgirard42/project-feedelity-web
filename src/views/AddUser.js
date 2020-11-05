// import React, { Component } from "react";
// import fire from "../firebase/firebaseConfig";
// import firebase from "firebase";

// const db = fire.database();

// function AddUsers(compagny, userEmail, userUid, displayName){
//     db.ref("compagny/" + userUid).set({
//         compagny,
//         userEmail,
//         userUid,
//         displayName,
//     });
// }

// export default class AddUser extends Component {
//  state = {
//       compagny: "",
//       userUid: "",
//       userEmail: "",
//       displayName:""
//     };
    
  

//   componentDidMount() {
//     let self = this;
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         var userUid = user.uid;
//         var userEmail = user.email;
//         self.setState({
//           userUid,
//           userEmail,
//         });
//       }
     
//     });
//   }

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   render() {
//     return (
//       <div className="addUser">
//         <div>
//           <text>
//             email : {this.state.userEmail}, id : {this.state.userUid},
//           </text>
//           <form>
//               <input
//                 name="displayName"
//                 type="textaera"
//                 id="displayName"
//                 placeholder="compagnie"
//                 onChange={this.handleChange}
//                 value={this.state.displayName}
//                 />
//               <button onClick={() => AddUsers(this.state.displayName)}>add</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
