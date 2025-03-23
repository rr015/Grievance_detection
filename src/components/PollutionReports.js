import React, { useEffect, useState } from "react";
import { database3 } from "../firebase/firebase3"; // Import from firebase3.js
import { ref, onValue } from "firebase/database";
// import "./styles/PollutionReports.css"; // Optional: Add CSS for styling

const PollutionReports = () => {
  const [pollutionReports, setPollutionReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Pollution Reports Data
  useEffect(() => {
    const pollutionReportsRef = ref(database3, "pollution_reports");

    const unsubscribe = onValue(pollutionReportsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of pollution reports into an array
        const reportsArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          file_name: value.file_name || "No File Name",
          last_modified: value.last_modified || "Unknown Date",
          s3_url: value.s3_url || "No URL Available",
          size: value.size || "N/A",
        }));

        // Update the state with the new reports
        setPollutionReports(reportsArray.reverse()); // Latest first
      } else {
        setPollutionReports([]); // No data available
      }
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the database listener
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading pollution reports...</div>;

  return (
    <div className="pollution-reports-container">
      <h2>Recent Pollution Reports</h2>
      <div className="reports-list">
        {pollutionReports.length > 0 ? (
          <ul>
            {pollutionReports.map((report) => (
              <li key={report.id}>
                <strong>File Name:</strong> {report.file_name}
                <br />
                <strong>Last Modified:</strong> {report.last_modified}
                <br />
                <strong>S3 URL:</strong>{" "}
                <a href={report.s3_url} target="_blank" rel="noopener noreferrer">
                  View File
                </a>
                <br />
                <strong>Size:</strong> {report.size} bytes
              </li>
            ))}
          </ul>
        ) : (
          <p>No pollution reports available.</p>
        )}
      </div>
    </div>
  );
};

export default PollutionReports;
