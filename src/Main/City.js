import React from "react";
import './City.css'
const City = () => {
  return (
    <div className="city-container">
      <div className="flex-destination">
        <span className="ek"></span>
        <span className="do"></span>
        <span className="teen"></span>
        <h1 style={{ textAlign: "center" }} className="destination-heading">
          Top Trending Destinations
        </h1>
      </div>

      <div>
        <img src="./Images/cities.png"></img>
      </div>

      <div className="btn-loadmore">
          <a>Load More</a>
      </div>
    </div>
  );
};

export default City;
