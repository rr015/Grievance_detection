import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { ref, onValue } from "firebase/database";
import "./styles/AIAnalysis.css";

const AIAnalysis = () => {
  const [grievanceStack, setGrievanceStack] = useState([]);
  const [tweetStack, setTweetStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Track the last fetched grievance ID
  const [lastGrievanceId, setLastGrievanceId] = useState(null);

  // Track the last fetched tweet ID
  const [lastTweetId, setLastTweetId] = useState(null);

  console.log(lastGrievanceId, lastTweetId);
  console.log(setLastGrievanceId, setLastTweetId);



  // ✅ Fetch Grievance Data (Avoid Duplicates)
  useEffect(() => {
    const grievanceRef = ref(database, "grievance_report/grievances");

    const unsubscribeGrievance = onValue(grievanceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({
          id: key, // Use Firebase key as unique ID
          created_at: value.created_at || "Unknown Date",
          text: value.text || "No Text Available",
          sentiment: value.sentiment || "N/A",
          sentiment_score: value.sentiment_score ?? "N/A",
        }));

        // Filter out entries that are already in the state
        const newGrievances = dataArray.filter(
          (grievance) => !grievanceStack.some((g) => g.id === grievance.id)
        );

        // Append new entries to the top
        if (newGrievances.length > 0) {
          setGrievanceStack((prev) => [...newGrievances, ...prev]);
        }
      } else {
        setGrievanceStack([]);
      }
      setLoading(false);
    });

    return () => unsubscribeGrievance();
  }, [grievanceStack]); // Add grievanceStack as a dependency

  // ✅ Fetch Tweet Data (Avoid Duplicates)
  useEffect(() => {
    const tweetRef = ref(database, "tweets/data");

    const unsubscribeTweet = onValue(tweetRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({
          id: key, // Use Firebase key as unique ID
          created_at: value.created_at || "Unknown Date",
          text: value.text || "No Text Available",
          retweets: value.public_metrics?.retweet_count || 0,
        }));

        // Filter out entries that are already in the state
        const newTweets = dataArray.filter(
          (tweet) => !tweetStack.some((t) => t.id === tweet.id)
        );

        // Append new entries to the top
        if (newTweets.length > 0) {
          setTweetStack((prev) => [...newTweets, ...prev]);
        }
      } else {
        setTweetStack([]);
      }
      setLoading(false);
    });

    return () => unsubscribeTweet();
  }, [tweetStack]); // Add tweetStack as a dependency

  if (loading) return <div>Loading...</div>;

  return (
    <div className="ai-analysis">
      <h1>AI Analysis</h1>

      {/* Grievance Container */}
      <div className="grievance-container">
        <h2>Grievance Reports</h2>
        <ul>
          {grievanceStack.length > 0 ? (
            grievanceStack.map((grievance) => (
              <li key={grievance.id}>
                <strong>{grievance.created_at}</strong>: {grievance.text}
                <br />
                <small>
                Sentiment: {grievance.sentiment} (Score:{" "}
                  {grievance.sentiment_score !== "N/A"
                    ? grievance.sentiment_score
                    : "N/A"}
                  )
                </small>
              </li>
            ))
          ) : (
            <p>No grievances available.</p>
          )}
        </ul>
      </div>

      {/* Tweet Container */}
      <div className="tweet-container">
        <h2>Recent Tweets</h2>
        <ul>
          {tweetStack.length > 0 ? (
            tweetStack.map((tweet) => (
              <li key={tweet.id}>
                <strong>{tweet.created_at}</strong>: {tweet.text}
                <br />
                <small>Retweets: {tweet.retweets}</small>
              </li>
            ))
          ) : (
            <p>No tweets available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AIAnalysis;