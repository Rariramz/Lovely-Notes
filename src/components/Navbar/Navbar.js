import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaFeatherAlt, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        VITA
        <FaFeatherAlt />
      </Link>
      <div className="navbar-search">
        <input
          className="navbar-search-input"
          name="search"
          type="text"
          placeholder="Search..."
        />
        <button className="navbar-search-input" type="submit">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
