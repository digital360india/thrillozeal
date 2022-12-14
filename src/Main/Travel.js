import React from 'react'
import './Travel.css'

const Travel = () => {
  return (
    <div className="Travel-Container">
          <div className="flex-destination">
          <div className="second_header">
                <img src='/Images/progess.png' alt="" />
                Travel Style
            </div>
      </div>

      <div className="travel-img-container">
          <div className="column">
          <img  src="./Images/couples.png"></img>
          <p>Couples</p>
          </div>
          <div className="column">
          <img src="./Images/friends.png"></img>
          <p>Friends</p>
          </div>
          <div className="column">
          <img src="./Images/family.png"></img>
          <p>Family</p>
          </div>
          <div className="column">
          <img src="./Images/solo.png"></img>
          <p>Solo</p>
          </div>
          <div className="column">
          <img src="./Images/coorporate.png"></img>
          <p>Corporate</p>
          </div>
          <div className="column">
          <img src="./Images/school.png"></img>
          <p>School Trips</p>
          </div>
         
            <div className="column">
            <img src="./Images/work.png"></img>
            <p>Workation</p>
            </div>
            <div className="column">

          <img src="./Images/bike.png"></img>
          <p>Bike Trips</p>
            </div>
      </div>
    </div>
  )
}

export default Travel