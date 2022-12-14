import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Gallery/Gallery";
import Card from "./Components/Card/Card";
import Fourbutton from "./Components/Fourbuttons/Fourbutton";
import Review from "./Components/Review";
import Policy from "./Components/Policy/Policy";
import Destination from "./Components/Destinations/Destination";
import Footer from "./Components/Footer/Footer";
import Magicslider from "./Main/Magicslider";
import Hero from "./Main/Hero";
import Travel from "./Main/Travel";
import Package from "./Components/Trek/Package";

const Home = () => {
    return (
      <div>
           {/* <Navbar/> */}
           <Gallery/>
           <Card/>
           <Fourbutton/>
            
           <Policy/>
        
{/*       
           <Magicslider/>
           <Travel/> */}

      
     </div>
    )
}
export default Home