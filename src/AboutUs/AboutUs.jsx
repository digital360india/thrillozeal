import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Header from '../Nainital/Header';
import Footer from '../Components/Footer/Footer';
import Destination from '../Components/Destinations/Destination';
import { useStateValue } from '../StateProvider';
function AboutUs() {
  const [{All_Treks }, dispatch] = useStateValue();
  return (
    <div className='aboutUs'>
      <Header />
      <div className="aboutUs__body">
        <img className='aboutUs__body_img' src="/Images/aboutus-bg.png" alt="" />
        <div className='Name_on_img'>ABOUT US</div>
        <div className="aboutUs__body_first">
          <div className="smallHeader">
            <div className="header_name">
              Home
              {" >"}
            </div>
            <div className="header_name active">
              AboutUs
            </div>
          </div>
        </div>

        <div className='aboutUs__body_second'>
          <div className='aboutUs__body_secondIn'>
            <div className='aboutUs__div_left'></div>
            <div className='aboutUs__div_right'>
              <div className='aboutUs__header'>
                <p className='aboutUs__header_1'>We Aim To</p>
                <p className='aboutUs__header_2'>Revolutionise Travelling</p>
              </div>
              <div className='aboutUs__body_container'>
                <p>Welcome to Thrillozeal, your gateway to adventure in the magnificent wilderness of Uttarakhand! We are not your average tour and trek company; we are a team of passionate explorers, adventure enthusiasts, and nature lovers who thrive on adrenaline-pumping experiences and the joy of discovering the hidden gems of Uttarakhand.
                  <br/><br/><br/>
At Thrillozeal, we believe that life is meant to be lived to the fullest, and what better way to do that than by embarking on thrilling treks, conquering challenging peaks, and immersing yourself in the breathtaking beauty of Uttarakhand? Our mission is to provide you with unforgettable memories and experiences that will leave you craving for more.
<br/><br/><br/>
With our wide range of packages, we have something for everyone. Whether you're a seasoned trekker looking for an exhilarating high-altitude expedition or a nature enthusiast seeking a serene escape amidst lush valleys, we have the perfect adventure waiting for you. Our meticulously crafted itineraries encompass treks, adventure sports, tours, camping, and much more, ensuring that you have a holistic and immersive experience of Uttarakhand.
<br/><br/><br/>
What sets us apart is not just our diverse range of offerings but also the top-notch services and guidance we provide. Our experienced and knowledgeable guides are well-versed in the intricacies of the region, taking you off the beaten path to explore the most remote and awe-inspiring locations Uttarakhand has to offer. We prioritize safety without compromising on the thrill, ensuring that you can push your limits and embrace the adventure with the peace of mind.
<br/><br/><br/>
So, whether you're seeking the adrenaline rush of scaling mighty peaks, the tranquillity of camping under a star-studded sky, or the joy of exploring the cultural heritage of Uttarakhand, Thrillozeal is here to make your dreams come true. Join us on this exhilarating journey and let us ignite your passion for adventure in the heart of the Himalayas.
<br/><br/><br/>
Thrillozeal - Where every step leads to a new thrill, and every experience becomes an unforgettable memory. Dare to dream, dare to explore, and let your zeal for adventure soar to new heights with us!
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>
      <Destination trendingTreks={All_Treks.filter((trek) => {
                return trek.trek_data.packagetype === "Trending";
            })}/>
      <Footer />
    </div>

  )
}

export default AboutUs
