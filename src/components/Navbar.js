import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import CreateCard from "./CreateCard";

function Navbar() {
  return (
    <div id="navbar">
      <nav className="navbar">
        <a className="navbar-brand">Navbar</a>
        <button className="link-button">
          <Link to="/search">Search Results</Link>
        </button>

        <button className="link-button">
          <Link to="/create">Create a Card</Link>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
