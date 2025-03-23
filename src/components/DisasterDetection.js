import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./styles/DisasterDetection.css";

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Default center of the map (Assam, India)
const defaultCenter = {
  lat: 26.2006,
  lng: 92.9376,
};

// ✅ Corrected Google AQI Heatmap Tile URL (without direct fetch)
const GOOGLE_AQI_TILE_URL = `https://airquality.googleapis.com/v1/map/heatmapTiles?key=AIzaSyD2v8sLj-T1LjH50qwCATDoHMsk2YlCrH8&languageCode=en&regionCode=IN&type=AQI_EPA`;

const DisasterDetection = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD2v8sLj-T1LjH50qwCATDoHMsk2YlCrH8",
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className="disaster-detection">
      <h2>Real-time Air Quality Heatmap</h2>
      <p>
        Google AQI Heatmap for Northeast India.
        <br />
        <small>Updates dynamically</small>
      </p>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={defaultCenter}
        onLoad={(map) => {
          const airQualityLayer = new window.google.maps.ImageMapType({
            getTileUrl: (coord, zoom) =>
              `${GOOGLE_AQI_TILE_URL}&zoom=${zoom}&x=${coord.x}&y=${coord.y}`,
            tileSize: new window.google.maps.Size(256, 256),
            name: "Air Quality Heatmap",
            maxZoom: 15,
            minZoom: 3,
            opacity: 0.7,
          });

          // ✅ Corrected: Insert tile overlay directly into Google Maps
          map.overlayMapTypes.insertAt(0, airQualityLayer);
        }}
      />
    </section>
  );
};

export default DisasterDetection;
