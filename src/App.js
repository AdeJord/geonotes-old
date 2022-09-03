import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './shared/components/Header'

import Home from "./user/pages/Home";
import LogIn from "./user/pages/LogIn";


const App = () => {
  
  return (
    <React.Fragment>
    <Header />
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
    </Router>
    <div id="map"></div>
    </React.Fragment>
    
    
  );
};

export default App;
