import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing real-time disaster detection and pollution control solutions for Assam.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ai-analysis">AI Analysis</a></li>
            <li><a href="/pollution-control-index">Pollution Control Index</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@pollutioncontrolassam.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Pollution Control Board Assam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;