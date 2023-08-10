import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Competitions from "./components/Competitions";
import BidTeams from "./components/BidTeams";

function App() {
  return (
    <div className="App">
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Routes>
        {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
        <Route path="/home" component={Home} />

        {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
        <Route path="/about" component={About} />

        {/* This route is for copmetitions component
          with exact path "/competitions", in 
          component props we passes the imported component*/}
        <Route path="/competitions" component={Competitions} />

        {/* This route is for bidteams component
          with exact path "/bidteams", in 
          component props we passes the imported component*/}
        <Route path="/bid-teams" component={BidTeams} />
      </Routes>
    </div>
  );
}

export default App;
