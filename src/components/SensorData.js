import React, { useEffect, useState } from "react";
import { database2 } from "../firebase/firebase2";
import { ref, onValue } from "firebase/database";

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    gas: 0,
    humidity: 0,
    temperature: 0,
  });

  useEffect(() => {
    const sensorRef = ref(database2, "sensor"); // Reference to the 'sensor' node

    // Listen for real-time updates
    onValue(sensorRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensorData(data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Sensor Data</h1>
      <p>Gas: {sensorData.gas}</p>
      <p>Humidity: {sensorData.humidity}</p>
      <p>Temperature: {sensorData.temperature}</p>
    </div>
  );
};

export default SensorData;