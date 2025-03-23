import React from "react";
import "./styles/PollutionControlIndex.css";
import SensorData from "./SensorData"; // Import sensor component
import PollutionReports from "./PollutionReports"; // ✅ Import the new component
import logo from "../assets/Final logo .png"; // Adjust the path to your logo

const PollutionControlIndex = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="LiFE Logo" />
        </div>
        <div>Pollution Control Index</div>
        <div className="profile"></div>
      </div>
      <div className="container">
        <div className="box large-box">
          <div className="image-placeholder">Air Quality Index</div>
        </div>
        {/* <div className="box large-box">
          <div className="image-placeholder">Current Weather</div>
        </div> */}
        <div className="box large-box">
          <div className="image-placeholder">
            <h2>Live Sensor Data</h2>
            <SensorData /> {/* Display live sensor values */}
          </div>
        </div>
        <div className="box large-box">
          <div className="pollution-reports-box">
            <PollutionReports /> {/* ✅ New pollution reports box */}
          </div>
        </div>
        {/* <div className="box small-box">
          <div className="image-placeholder">Visibility</div>
        </div>
        <div className="box large-box">
          <div className="image-placeholder">Weather Forecast Map</div>
        </div> */}
      </div>
    </div>
  );
};

export default PollutionControlIndex;