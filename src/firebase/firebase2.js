import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration for second instance
const firebaseConfig2 = {
  databaseURL: ,
};

// Initialize the second Firebase app
const app2 = initializeApp(firebaseConfig2, "firebase2"); // Use a unique name for the second app
const database2 = getDatabase(app2);

export { database2 };
