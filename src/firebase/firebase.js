// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC_5gTibwSs34m-AXyriISqgTpePUBhB3k",
  authDomain: "pollution-management.firebaseapp.com",
  databaseURL: "https://pollution-management-default-rtdb.firebaseio.com",
  projectId: "pollution-management",
  storageBucket: "pollution-management.firebasestorage.app",
  messagingSenderId: "316043379968",
  appId: "1:316043379968:web:39d1330ed73d20e9ca9fe5",
  measurementId: "G-H0DT3CY5H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };