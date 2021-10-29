import firebase from "firebase/app";
import "firebase/firestore";
import dotenv from "dotenv";
import "firebase/auth";
dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyA5ipINM0emSlP8_FcUkLd6RZxadY7QqEI",
  authDomain: "essential-software.firebaseapp.com",
  projectId: "essential-software",
  storageBucket: "essential-software.appspot.com",
  messagingSenderId: "994596264854",
  appId: "1:994596264854:web:9fadcc92582212f6949bb7",
  measurementId: "G-N0SR2M06PH",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth();
export default app;
