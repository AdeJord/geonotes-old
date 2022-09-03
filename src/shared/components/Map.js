import React from "react";

import "./map.css";
import "../../App.css";

import { MapContainer, TileLayer, useMap } from "react-leaflet";


const Map = () => {

  return (
    <div className="map-container">
      <div className="map-main">
        <MapContainer
          style={{
            width: "100wh",
            height: "60vh",
          }}
          center={[52.5888581, -2.0527027]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
