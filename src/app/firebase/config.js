// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSVk8-vQxn_LOT6P2wwoYpR_E6C3Dkzuc",
  authDomain: "login-app-3a129.firebaseapp.com",
  projectId: "login-app-3a129",
  storageBucket: "login-app-3a129.appspot.com",
  messagingSenderId: "943628700681",
  appId: "1:943628700681:web:3e20866a520812fc9e3cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);