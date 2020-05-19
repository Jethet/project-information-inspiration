import React from "react";
import Search from "./Search"

function Header() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <Search />
      </nav>
    </div>
  );
}

export default Header;
