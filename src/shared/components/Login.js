import React from "react";
import Button from "./Button";

import "./main-nav.css";
import "./add-note.css";

const LogIn = () => {


  return (
    <div className="main">
      <Button 
      title = 'Log In' 
      alerttext="This will open modal to log you in, and show as log out when your'e logged in"
      color='lightgreen' />
    </div>
  );
};

export default LogIn;
