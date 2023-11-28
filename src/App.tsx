import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BoatList from "./components/BoatList";
import BoatDetails from "./components/BoatDetails";
import NavBar from "./components/NavBar/NavBar";

import "./styles/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  // Estado para manejar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Función para actualizar el término de búsqueda
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boats" element={<BoatList searchTerm={searchTerm} />} />
        <Route path="/boat/:id" element={<BoatDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
