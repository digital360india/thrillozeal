import React, { useEffect, useState } from 'react';
import './Trek.css';
import db from '../../firebase';
import { useParams } from 'react-router-dom';
import {LocationOnOutlined as LocationOnOutlinedIcon,
  Height as HeightIcon,
  SportsScore as SportsScoreIcon,
  EditCalendarRounded as EditCalendarRoundedIcon,
  SignalCellular3BarOutlined as SignalCellular3BarOutlinedIcon,
  SocialDistance as SocialDistanceIcon,
  Map as MapIcon,
  Payments as PaymentsIcon,
  Stars as StarsIcon,
  DeviceThermostat as DeviceThermostatIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

export const Trek = (props) => {
  var { trek_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    
    db.collection("Cities")
      .doc(props.location_id)
      .collection("All_Trek")
      .doc(trek_id)
      .collection('Highlights')
      .doc('Highlights')
      .onSnapshot((snapshot) => (
        setData(snapshot.data())
      ))
    }, [props.location_id,trek_id])
  return (
    <div className="Trek">
      <h1 className="box-heading">Trek Highlights</h1>
      <div className="trek_highlights">
        <HeightIcon />
          <div>
            <span>Elevation -</span> {data?.eli}
            </div>
      </div>
      <div className='trek_highlights'>
      <LocationOnOutlinedIcon/>
        <div>
        <span>District - </span> {data?.dis}
        </div>
      </div>
      <div className='trek_highlights'>
      <SportsScoreIcon/>
        <div>
        <span>Starting point - </span> {data?.sp}
        </div>
      </div>
      <div className='trek_highlights'>
      <EditCalendarRoundedIcon/>
        <div>
        <span>No. of days - </span> {data?.days}
        </div>
        </div>
      <div className='trek_highlights'>
        <SignalCellular3BarOutlinedIcon/>
        <div>
        <span>Difficulty level - </span> {data?.dl}
        </div>
      </div>
      <div className='trek_highlights'>
        <MapIcon/>
        <div>
        <span>Total trekking distance - </span> {data?.distance}
        </div>
      </div>
      {/* <div className='trek_highlights'>
        <img src="/Images/Map Pinpoint.png"></img>
        <div>
        <span> Total travelling distance - </span>235 km (one way)
        </div>
      </div> */}
      <div className='trek_highlights'>
        <PaymentsIcon/>
        <div>{
        <span>Average cost - </span>} {data?.cost}
        </div>
      </div>
      <div className='trek_highlights'>
        <StarsIcon/>
        <div>
        <span>Best time to visit - </span> {data?.time_to_visit}
        </div>
      </div>
      <div className='trek_highlights'>
        <DeviceThermostatIcon/>
        <div>
        <span>Climate - </span> {data?.climate}
        </div>
      </div>
      <div className='trek_highlights'>
        <LocationOnIcon/>
        <div>
        <span>Geolocation - </span> {data?.geolocation}
        </div>
        </div>
    </div>
  )
}
