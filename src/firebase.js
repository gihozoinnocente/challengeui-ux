// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeXPFEr0ogfUkbKXGDH3nVye4JTRJdo1o",
  authDomain: "flex-auth-5bb5c.firebaseapp.com",
  projectId: "flex-auth-5bb5c",
  storageBucket: "flex-auth-5bb5c.appspot.com",
  messagingSenderId: "603258608081",
  appId: "1:603258608081:web:ef483c0abf610a0b3ea8f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
