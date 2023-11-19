import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";

import "./NavBar.scss";

const NavBar: React.FC = () => {
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand text-white" to="/">
          <img src="/images/logo.webp" alt="Logo" width="40" height="34" />
        </Link>
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
              Menu
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
