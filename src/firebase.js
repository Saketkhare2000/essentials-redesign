// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
