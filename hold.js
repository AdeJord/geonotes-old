import React from "react";

import Location from "../../shared/components/Location";
import Location1 from "../../shared/components/Location1";

import "./home.css";

// in here I want Title and Main nav in the Header,
// the current location with current co-ords supplied by leaflet or google?
// a link to make a note and upload Image
// and a map that show all current notes, as pins or notes??
// main nav will only be home/login for now. KISS




//sort this shit out!

const Home = (props) => {


const lat = props.lat;
const lng = props.lng;

//DESCTRUCTURE HERE!

  

    // console.log(coords)

  


  return (
    <div>
      <div className="home-header">
        <p>Your current location</p>
      </div>
      <div className='home-main'>
        <div className="lat-lng">
        <p>Latitude {lat}</p>
        <p style={{paddingLeft: "70px"}}>Longitude {lng}</p>
        <Location />
        <Location1 />
        </div>
      </div>
    </div>
  );
}