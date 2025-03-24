// firebase3.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig3 = {
    apiKey: ,
    authDomain: ,
    databaseURL:,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId:,
    measurementId:
  }

// Initialize Firebase
const app3 = initializeApp(firebaseConfig3, "firebase3");
const database3 = getDatabase(app3);

export { database3 };
