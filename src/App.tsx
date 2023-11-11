import React from "react";
import { BrowserRouter as Router, Switch, Router } from "react-router-dom";
import Home from "./components/Home";
import BoatList from "./components/BoatList";
import BoadtDetails from "./components/BoatDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Router path="/" exact component={Home} />
        <Router path="/boats" component={BoatList} />
        <Router path="/boat/:id" component={BoatDetails} />
      </Switch>
    </Router>
  );
}

export default App;
