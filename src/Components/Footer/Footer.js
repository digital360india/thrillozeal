import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer-boundary">
      <div className="footer-container">
        <div className="Thrillo-div">
          <h1>THRILLOZEAL</h1>
          <p>
            Starting our journey in 2020, we aim to revolutionize the touring
            industry and create the best experience for all travel enthusiasts.
            For the individuals who cannot travel, we also offer a Virtual
            360-degree tour to help our users get the real feel of any place
            without being there.
          </p>
        </div>
      
      <div className="combo__link_contact">
      <div className="Links-div">
          <h1>USEFUL LINKS</h1>
          <ul>
            <li>Home</li>
            <li>Trending </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Resgister Guide</li>
          </ul>
        </div>
        <div className="Contact-div">
          <h1>CONTACT US</h1>
          <span>
            <img></img>
            <p>+91 83030 22306</p>
          </span>
          <span>
            <img></img>
            <p >B 36, Nehru Colony, Dehrdun
              Uttarakhand, India 248001</p>
          </span>
          <span>
            <img></img>
            <p>info@thrillozeal.com</p>
          </span>
        </div>
      </div>
        <div className="Legal">
          <h1>LEGAL</h1>
          <ul>
            <li>Privacy Policies</li>
            <li>Terms &amp; Conditions</li>
            <li>Terms &amp; Conditions For Guide Registeration</li>
            <li>Data Deletion Policy</li>
          </ul>
        </div>
        <div className="Newsletter">
          <h1>NEWSLETTER</h1>
          <ul>
            <li className="newsletter_li">Sign up for our mailing
              list</li>
            <li className="newsletter_li">We respect your
              privacy</li>
            <form className="footer-form">
              <input type="text" placeholder="you@awesome.com"></input>
              <button type="submit">Submit</button>
            </form>
          </ul>
        </div>
      </div>
      <div className="socials">
        <img src="./Images/Facebook.png"></img>
        <img src="./Images/Instagram.png"></img>
        <img src="./Images/Twitter Circled.png"></img>
        <img src="./Images/LinkedIn.png"></img>
      </div>
    </div>
  );
};
export default Footer;
