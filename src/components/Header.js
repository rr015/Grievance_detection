import React from "react";
import "./styles/Header.css";
import logo from "../assets/Final logo .png"; // Adjust the path to your logo

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="LiFE Logo" />
        <span className="brand-name">
          Pollution Control Board <strong>Assam</strong>
        </span>
      </div>
      <nav>
        <ul>
          <li><a href="/ai-analysis">AI Analysis</a></li>
          <li className="dropdown">
          <button onClick={() => console.log("Clicked!")}>Dashboard</button>

            <ul className="dropdown-menu">
              <li><a href="/pollution-control-index">Pollution Control Index</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Forums ▾</a>
            <ul className="dropdown-menu">
              <li><a href="/discussion">Discussion</a></li>
              <li><a href="#" className="alert">Top trending articles</a></li>
              <li><a href="/about-us">About us</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <img src={require("../assets/profile.png")} alt="User Profile" />
      </div>
    </header>
  );
};

export default Header;