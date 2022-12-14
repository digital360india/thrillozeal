import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>

        <div className="Navbar-Container">

            <div className="First">
                <img className="logo-thrillo" src="./Images/Logo-white.png"></img>
            </div>
            <div className="Second">

            </div>
            <div className="Third">
                <ul className="Nav-items">

                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cities</li>
                    <li>Contact</li>
                    <li><img className="show" src="./Images/phone-call.png"></img></li>

                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar