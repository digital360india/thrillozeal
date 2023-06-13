import React,{useState} from "react";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuForMobile from "./MenuForMobile";

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const history = useHistory();

  const goToPage = (location) => {
    history.push(`/${location}`)
  }


  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    {
      mobileOpen && 
      <MenuForMobile setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
    }
      <div className="Navbar_Container">
        <div className="First">
          <a href="/">
            <img className="logo_thrillo" src="Images/logo.png"></img>
          </a>
        </div>
        <div className="Third">
          <ul className="Nav_items">
            <li onClick={() => goToPage("")}>Home</li>
            <li onClick={() => goToPage("about")}>About Us</li>
            <li onClick={() => goToPage("All_Location/All_Activities/All_Categories")}>Cities</li>
            <li>
              <a href="tel:83030 22306">
                <img className="show" src="/Images/phone-call.png">
                </img>
              </a>
            </li>
          </ul>
        </div>
        <div className="Menu_forMobile" onClick={() => setMobileOpen(!mobileOpen)}>
          <MenuRoundedIcon style={{ color: 'white',fontSize:'30px',marginTop:"-3px" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
