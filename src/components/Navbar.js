import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div id="home-icon">
          <Link to="/">
            <img src="/images/homelink-white.png" width="25" height="25" alt="Home" />
          </Link>
        </div>

        <div className="row">
          <button className="nav-buttons">
            <Link to="/create" className="nav-link">Create infocard</Link>
          </button>
          <button className="nav-buttons">
            <Link to="/search" className="nav-link">Search infocard</Link>
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
