import React, { useEffect, useState } from 'react';
import './Trek.css';
import db from '../../firebase';
import { useParams } from 'react-router-dom';

export const Trek = () => {
  var { location_id, trek_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    db.collection("Cities")
      .doc(location_id)
      .collection("All_Trek")
      .doc(trek_id)
      .collection('Hightlights')
      .doc('Hightlights')
      .onSnapshot((snapshot) => (
        setData(snapshot.data())
      ))
    }, [trek_id])
    // console.log(data)
  return (
    <div className="Trek">
      <h1 className="box-heading">Trek Highlights</h1>
      <div className="trek_highlights">
        <img src="/Images/Resize Vertical.png"></img>
          <div>
            <span>Elevation -</span> {data?.eli}
            </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Location.png"></img>
        <div>
        <span>District -</span>{data?.dis}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Finish Flag.png"></img>
        <div>
        <span>Starting point -</span> {data?.sp}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Sign Up in Calendar.png"></img>
        <div>
        <span>No. of days - </span>{data?.days}
        </div>
        </div>
      <div className='trek_highlights'>
        <img src="/Images/Signal.png"></img>
        <div>
        <span>Difficulty level -</span> {data?.dl}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Distance.png"></img>
        <div>
        <span>Total trekking distance - </span>{data?.distance}
        </div>
      </div>
      {/* <div className='trek_highlights'>
        <img src="/Images/Map Pinpoint.png"></img>
        <div>
        <span> Total travelling distance - </span>235 km (one way)
        </div>
      </div> */}
      <div className='trek_highlights'>
        <img src="/Images/Expensive.png"></img>
        <div>{
        <span>Average cost - </span>}INR {data?.cost}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Love Time.png"></img>
        <div>
        <span>Best time to visit - </span>{data?.time_to_visit}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Hygrometer.png"></img>
        <div>
        <span>Climate -</span>{data?.climate}
        </div>
      </div>
      <div className='trek_highlights'>
        <img src="/Images/Location (1).png"></img>
        <div>
        <span>Geolocation - </span>{data?.geolocation}
        </div>
        </div>
    </div>
  )
}
