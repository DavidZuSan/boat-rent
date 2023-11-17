import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BoatList from "./components/BoatList";
import BoatDetails from "./components/BoatDetails";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" element={<BoatList />} />
        <Route path="/boat/:id" element={<BoatDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
