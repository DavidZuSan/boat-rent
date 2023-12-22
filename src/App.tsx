import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";

import "./styles/global.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home searchTerm={searchTerm} onSearchTermChange={handleSearch} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
