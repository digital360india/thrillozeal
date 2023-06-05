import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="First">
        <a href="/">
          <img className="logo-thrillo" src="Images/Logo-white.png"></img>
        </a>
      </div>
      <div className="Second"></div>
      <div className="Third">
        <ul className="Nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Cities</li>
          <li> Contact</li>
          <li>
            <a href="tel:83030 22306">
              <img className="show" src="/Images/phone-call.png">
              </img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
