import React from "react";
import "./styles/Explore.css";

const Explore = () => {
  // eslint-disable-next-line no-unused-vars
  const showMap = (mapName) => {
    document.getElementById("mapDisplay").src = mapName;
  };

  return (
    <section className="explore">
      <h2>Explore Maps</h2>
      {/* <div className="buttons">
        <button onClick={() => showMap("assam.jpg")}>Assam</button>
        <button onClick={() => showMap("guwahati-city-map.jpg")}>Kamrup Metro</button>
        <button onClick={() => showMap("Jorhat.10.gif")}>Jorhat</button>
      </div> */}
    </section>
  );
};

export default Explore;