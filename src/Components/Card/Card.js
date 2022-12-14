import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="Card-Container">
        <div className="first-flex">
          <div class="chopta-tungnath-chandrashilla-trek">
            Chopta- Tungnath- Chandrashilla Trek
          </div>
          <div className="row-2">
            <div className="inner">
              <img src="./Images/clock.png"></img>
              <div className="clock-text">5D/6N</div>
            </div>
            <div className="inner">
              <img src="./Images/map-pin.png"></img>
              <div className="chamoli-uk">Chamoli,UK</div>
            </div>
            <div className="group">
              <div className="stars">
                <img src="./Images/Group 4.png"></img>
              </div>
              <div className="rating">
                <p>4.5</p>
              </div>
              <div className="based">
                <p>based on 78 reviews</p>
              </div>
            </div>
          </div>
          <div className="icons-row">
            <div className="target-wrap">
              <img src="./Images/Fast Food.png"></img>
            </div>
            <div className="target-wrap">
              <img src="./Images/London Cab.png"></img>
            </div>
            <div className="target-wrap">
              <img src="./Images/Hotel Door.png"></img>
            </div>
            <div className="target-wrap">
              <img src="./Images/3D Glasses.png"></img>
            </div>
            <div className="target-wrap">
              <img src="./Images/Fire.png"></img>
            </div>
            <div className="target-wrap">
              <img src="./Images/Kayaking.png"></img>
            </div>
          </div>
        </div>

        <div className="second-flex">
          <div className="second-flex-box">
            <p>starting from</p>
            <p className="strike">INR 6799/-</p>
            <p>INR 3799/-</p>
            <div className="discount">
              <p>Flat 40% off!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
