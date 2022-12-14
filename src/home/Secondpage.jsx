import React from 'react';
import './Secondpage.css';
import progress from './img/progess.png'

function Secondpage() {
  return (
    <div className="secondPage">
        <div className="second_header">
            <img src={progress} alt="" />
        Top Trending Destinations
        </div>
    </div>
  )
}

export default Secondpage;