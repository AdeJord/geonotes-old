import React, { useState } from "react";


import "../../user/pages/home.css";
import "./location.css";

const Location = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);


  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    setLat(latitude);
    setLng(longitude);

  });


  return (
      <div className="location-main">
        <div className="lat-lng">
          Lat ={lat} : Lng ={lng}
        </div>
      </div>
  );
};

export default Location;
