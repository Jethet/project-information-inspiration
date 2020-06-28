import React from "react";
import { Link } from "react-router-dom";


function Footer() {

  const myStyle = {
    color: "rgb(65, 62, 62)",
}
  return (
    <div className="footer">
      <footer><Link to="/credits" style={myStyle}>Credits for pictures and fonts used</Link> - built by HH@2020</footer>
    </div>
  );
}

export default Footer;
