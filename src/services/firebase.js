// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlTI1BIQhFFJiysnZQ2Z8CfmrmbcBDfJw",
  authDomain: "ecommerce99-d3a32.firebaseapp.com",
  projectId: "ecommerce99-d3a32",
  storageBucket: "ecommerce99-d3a32.appspot.com",
  messagingSenderId: "606845544387",
  appId: "1:606845544387:web:xxxxxxxxxxxxxx", // optional but ideal
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
