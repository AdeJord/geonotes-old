import React from "react";

import MainNav from "./Login";

import "./header.css";
import "./main-nav.css";

const Header = () => {
  return (
    <div>
      <div className="header-main">
        <div className="header-title">GeoNotes</div>
        <div className="main">
          <MainNav />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
