// import { latLng } from "leaflet";
import React from "react";

import Location from "../../shared/components/Location";
import Map from "../../shared/components/Map";
import AddNote from "../../shared/components/AddNote";


import "./home.css";

const Home = () => {

  
  return (
      <div>
        <div className="home-header">
          <p>Your current location is </p>
        </div>
        <Location />
        <AddNote />
        <Map />
      </div>
  );
};

export default Home;
