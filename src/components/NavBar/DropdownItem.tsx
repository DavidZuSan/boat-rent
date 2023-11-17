import React from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
  title: string;
  items: { name: string; path: string }[];
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, items }) => (
  <li className="nav-item dropdown">
    <button
      className="nav-link dropdown-toggle"
      id={`${title.toLowerCase()}Dropdown`}
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {title}
    </button>
    <ul
      className="dropdown-menu"
      aria-labelledby={`${title.toLowerCase()}Dropdown`}
    >
      {items.map((item) => (
        <li key={item.name}>
          <Link className="dropdown-item" to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

export default DropdownItem;
