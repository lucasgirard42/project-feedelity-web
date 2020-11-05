import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDdu_TMVzvjY09yI0krxIrZRz_w8SQ8Y10",
    authDomain: "feedelity-a7884.firebaseapp.com",
    databaseURL: "https://feedelity-a7884.firebaseio.com/",
    projectId: "feedelity-a7884",
    storageBucket: "feedelity-a7884.appspot.com",
    messagingSenderId: "350765539295",
    measurementId: "G-06Y93JPGKG",
    appId: "1:350765539295:web:1ca6b185d8a56b4536ee6a",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
