import React, { useEffect, useState } from "react";
import './Footer.css';
import {PhoneInTalkOutlined as PhoneInTalkOutlinedIcon, LocationOnOutlined as LocationOnOutlinedIcon, EmailOutlined as EmailOutlinedIcon} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import db from '../../firebase';
import firebase from "firebase";
const Footer = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [messageToggle, setMessageToggle] = useState(false);
  const goToPage = (location,pos=0) => {
    history.push({pathname:`/${location}`,state:{page_loc:pos}})
  }

  const addEmailToList = (e) =>{
    e.preventDefault();
    db.collection('Newsletter').doc(email).set({
      userEmail: email,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  document.getElementById('email_id').value = "";
  setEmail("");
  setMessageToggle(true);
  setInterval(()=>{setMessageToggle(false)}, 3000)
  }

  return (
    <div className="footer_boundary">
      <div className="footer_container">
        <div className="Thrillo_div">
          <h1>THRILLOZEAL</h1>
          <img src="/Images/thrillozeal_logo_mobile.png"/>
          <p>
            Starting our journey in 2020, we aim to revolutionize the touring
            industry and create the best experience for all travel enthusiasts.
            For the individuals who cannot travel, we also offer a Virtual
            360-degree tour to help our users get the real feel of any place
            without being there.
          </p>
        </div>
      
      <div className="combo__link_contact">
      <div className="Links_div">
          <h1>LINKS</h1>
          <ul>
            <li onClick={() => goToPage("",0)}>Home</li>
            <li onClick={ () => document.getElementById('destination').scrollIntoView({ behavior: "smooth"})} >Trending </li>
            <li onClick={() => goToPage("about",0)}>About Us</li>
          </ul>
        </div>
        <div className="Contact_div">
          <h1>CONTACT US</h1>
          <span className="contact_span">
            <PhoneInTalkOutlinedIcon/>
            <p>+91 83030 22306</p>
          </span>
          <span className="contact_span">
            <LocationOnOutlinedIcon/>
            <p >B 36, Nehru Colony, Dehrdun
              Uttarakhand, India 248001</p>
          </span>
          <span className="contact_span">
            <EmailOutlinedIcon/>
            <p>info@thrillozeal.com</p>
          </span>
        </div>
      </div>
        <div className="Legal">
          <h1>LEGAL</h1>
          <ul>
            <li onClick={() => goToPage("privacy_policy",800)}>Confirmation Policy</li>
            <li onClick={() => goToPage("privacy_policy",970)}>Payments Policy</li>
            <li onClick={() => goToPage("privacy_policy",1100)}>Cancellation and Refund Policy</li>
            <li onClick={() => goToPage("privacy_policy",1400)}>Privacy Policies</li>
          </ul>
        </div>
        <div className="Newsletter">
          <h1>NEWSLETTER</h1>
          <ul>
            <li className="newsletter_li">Sign up for our mailing
              list</li>
            <li className="newsletter_li">We respect your
              privacy</li>
            <form className="footer_form">
              <input id="email_id" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="you@awesome.com"></input>
              {messageToggle && <span className="thankyou__span">Thank you for subscribing to Thrillozeal Newsletter!</span>}
              {/* <span className="thankyou__span">Thank you for subscribing to Thrillozeal Newsletter!</span> */}
              <button className="submit-btn" type="submit" onClick={addEmailToList}>SUBMIT</button>
            </form>
          </ul>
        </div>
      </div>
      <div className="socials">
        <img onClick={() => window.open("https://www.facebook.com/thrillozealofficial/")} src="/Images/Facebook.png"></img>
        <img onClick={() => window.open("https://www.instagram.com/thrillozeal/")} src="/Images/Instagram.png"></img>
        <img onClick={() => goToPage("",0)} src="/Images/Twitter Circled.png"></img>
        <img onClick={() => goToPage("",0)} src="/Images/LinkedIn.png"></img>
      </div>
      <div className='socials'>
          copyright@thrillozeal.com
      </div>
    </div>
  );
};
export default Footer;
