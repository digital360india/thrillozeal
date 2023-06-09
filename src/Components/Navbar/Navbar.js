import React from "react";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';

const Navbar = () => {

  const history = useHistory();

  const goToPage = (location) => {
    history.push(`/${location}`)
  }
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
          <li onClick={() => goToPage("")}>Home</li>
          <li onClick={() => goToPage("about")}>About Us</li>
          <li onClick={() => goToPage("cities")}>Cities</li>
          {/* <li onClick={() => goToPage("contact")}> Contact</li> */}
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
