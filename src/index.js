import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root for the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);