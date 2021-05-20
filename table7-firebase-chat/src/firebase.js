import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDTWn7XleQMqF0hK4tEKPNZnLjOcTFkS1s",
  authDomain: "react-chat-app-dd091.firebaseapp.com",
  projectId: "react-chat-app-dd091",
  storageBucket: "react-chat-app-dd091.appspot.com",
  messagingSenderId: "1027379611092",
  appId: "1:1027379611092:web:c4dd780404fbb0d07d8241",
  measurementId: "G-QG1FFTQD71",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
