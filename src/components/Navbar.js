import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <nav className="navbar">
        <div id="nav-buttons">
            <Link to="/">
              <div id="home-icon">
                <img src="/images/homelink-white.png" width="25" height="25" alt="Home" />
              </div>
            </Link>

          <button className="btn link-button" type="submit">
            <Link to="/search">Search</Link>
          </button>

          <button className="btn link-button">
            <Link to="/create">New Card</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
