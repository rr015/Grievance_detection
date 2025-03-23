import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { database2 } from "../firebase/firebase2";  // ✅ Import second Firebase instance
import { ref, onValue } from "firebase/database";
import "../components/styles/FloatingGraph.css";


const FloatingSensorGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sensorRef = ref(database2, "sensor");

    onValue(sensorRef, (snapshot) => {
      const sensorData = snapshot.val();
      if (sensorData) {
        setData((prevData) => [
          ...prevData.slice(-20), // Keep only the last 20 readings
          {
            time: new Date().toLocaleTimeString(),
            gas: sensorData.gas,
            humidity: sensorData.humidity,
            temperature: sensorData.temperature,
          },
        ]);
      }
    });
  }, []);

  return (
    <div className="floating-graph">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="gas" stroke="red" strokeWidth={2} />
          <Line type="monotone" dataKey="humidity" stroke="blue" strokeWidth={2} />
          <Line type="monotone" dataKey="temperature" stroke="green" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FloatingSensorGraph;
