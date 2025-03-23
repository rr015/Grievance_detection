import React from "react";
import "./styles/SocialMediaTrends.css";

const SocialMediaTrends = () => {
  return (
    <div>
      <div className="header">
        Messages from <span>social media</span> and other Messaging apps
      </div>
      <div className="container">
        <div className="platforms">Twitter | Facebook | Instagram</div>
        <div className="trending-section">
          <div className="trend-box">
            <h3>Top <span>Trending</span> from Twitter</h3>
            <div className="image-placeholder"></div>
          </div>
          <div className="trend-box">
            <h3>Top <span>Trending</span> from Facebook</h3>
            <div className="image-placeholder"></div>
          </div>
          <div className="trend-box">
            <h3>Top <span>Trending</span> from Instagram</h3>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTrends;