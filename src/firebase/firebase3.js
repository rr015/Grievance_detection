// firebase3.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig3 = {
    apiKey: "AIzaSyBDIDtWrh2nHy1TOMGsRJ1oBH_X7i3GIes",
    authDomain: "public-grievance-23cd1.firebaseapp.com",
    databaseURL: "https://public-grievance-23cd1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "public-grievance-23cd1",
    storageBucket: "public-grievance-23cd1.firebasestorage.app",
    messagingSenderId: "27855560990",
    appId: "1:27855560990:web:93d2f8261d851055af690f",
    measurementId: "G-SHPXW9CRKQ"
  }

// Initialize Firebase
const app3 = initializeApp(firebaseConfig3, "firebase3");
const database3 = getDatabase(app3);

export { database3 };