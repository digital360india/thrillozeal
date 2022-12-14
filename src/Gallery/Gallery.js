import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
      <div className="Gallery-Container">

        <div className="one-one">
          <img src="./Images/Rectangle 56.png"></img>
          <img src="./Images/Rectangle 56_mobile.png"></img>
        </div>
        <div className="two-two">
          <img src="./Images/Rectangle 57.png"></img>
          <img src="./Images/Rectangle 57_mobile.png"></img>
        </div>
        <div className="three-three">
          <img src="./Images/Rectangle 58.png"></img>
          <img src="./Images/Rectangle 58_mobile.png"></img>
        </div>
        <div className="four-four">

          <img src="./Images/Rectangle 59.png"></img>
          <div className="gallery-open"><p>Gallery</p></div>
        </div>
      </div>

      <div className="below-text">
        <div class="home montserrat-semi-bold-black-14px">Home &gt;</div>
        <div class="cities-1 montserrat-semi-bold-black-14px">Cities &gt;</div>
        <div class="chamoli montserrat-semi-bold-black-14px">Chamoli &gt;</div>
        <div class="chopta">Chopta</div>
      </div>

    </div>
  )
}

export default Gallery