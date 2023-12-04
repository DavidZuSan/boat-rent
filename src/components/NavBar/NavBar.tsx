import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import "./NavBar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface NavBarProps {
  onSearch: (searchTerm: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="search-container ms-auto">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            autoFocus
          />
          <Link className="navbar-brand text-white" to="/">
            <i className="bi bi-person-circle"></i>
          </Link>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-white"
              id="offcanvasNavbarLabel"
            >
              BoatRent <b>SaltSea</b>
            </h5>
            <button
              type="button"
              className="btn-close-custom"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="bi bi-x-square-fill"></i>
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <DropdownItem
                title="Boats"
                items={[
                  { name: "Classic", path: "/boats/type/classic" },
                  { name: "Modern", path: "/boats/type/modern" },
                  { name: "Sailboats", path: "/boats/type/sailboats" },
                ]}
              />
              <DropdownItem
                title="Seaports"
                items={[
                  { name: "Málaga", path: "/boats/type/malaga" },
                  { name: "Benalmádane", path: "/boats/type/benalmadena" },
                  { name: "Marbella", path: "/boats/type/marbella" },
                  { name: "Puerto Banús", path: "/boats/type/puertobanus" },
                ]}
              />
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
