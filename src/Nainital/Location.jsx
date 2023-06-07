import React, { useState, useEffect } from 'react';
import './Location.css';
import Header from './Header';
import NainitalImage from './img/nainitalimg.jpg';
import search from '../home/img/search.png';
import Card from './Card/Card';
import Filter from './Filter/Filter';
import Footer from '../Components/Footer/Footer';
import Destination from '../Components/Destinations/Destination';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import PaginatedItems from './PaginatedItems';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';
// import { filterbyActivities } from './FilterFunction';

function Location() {

  var { location } = useParams();
  const history = useHistory();

  const [{ globalVariable, All_Treks, useFilter_act, filter_Data, useFilter_price, useFilter_style }, dispatch] = useStateValue();

  const [data, setData] = useState(null);
  const [data_Filtered, setData_Filtered] = useState([]);
  const [dataCard, setDataCard] = useState([]);

  // const str = location.charAt(0).toUpperCase() + location.slice(1);

  useEffect(() => {
    const temp = All_Treks.filter((trek) => {
      return trek?.trek_data?.city ? trek?.trek_data?.city.toLowerCase() === location.toLowerCase() : false;
    });
    setData([...temp])
    setData_Filtered([...temp]);

  }, [location, All_Treks])


  // filter by price range
  // const filterbyrange=()=>{
  //   if(useFilter_price==="All price range"){
  //     dispatch({
  //       type: actionTypes.SET_USE_FILTER_DATA,
  //       filter_Data: dataCard,
  //     });
  //   }else if(useFilter_price==="0-5K"){
  //     dispatch({
  //       type: actionTypes.SET_USE_FILTER_DATA,
  //       filter_Data: dataCard1,
  //     });
  //   }else if(useFilter_price==="5K-10K"){
  //     dispatch({
  //       type: actionTypes.SET_USE_FILTER_DATA,
  //       filter_Data: dataCard2,
  //     });
  //   }else if(useFilter_price==="10K-15K"){
  //     dispatch({
  //       type: actionTypes.SET_USE_FILTER_DATA,
  //       filter_Data: dataCard3,
  //     });
  //   }else if(useFilter_price==="15K-20K"){
  //     dispatch({
  //       type: actionTypes.SET_USE_FILTER_DATA,
  //       filter_Data: dataCard4,
  //     });
  //   }
  // }


  // filterbyActivities 
  const filterbyActivities = () => {
    var actvar = '';
    var str = '';
    // useFilter_act
    if (useFilter_act.length > 0) {
      for (var i = 0; i < useFilter_act.length; i++) {
        if (useFilter_act[i] === "Trekking") {
          actvar = 'a';
        } else if (useFilter_act[i] === "Rafting") {
          actvar = 'b';
        } else if (useFilter_act[i] === "Camping") {
          actvar = 'c';
        } else if (useFilter_act[i] === "Expeditions") {
          actvar = 'd';
        } else if (useFilter_act[i] === "Tours") {
          actvar = 'e';
        } else if (useFilter_act[i] === "Explore") {
          actvar = 'f';
        } else if (useFilter_act[i] === "Water Sports") {
          actvar = 'g';
        } else if (useFilter_act[i] === "Adventure Sports") {
          actvar = 'h'
        } else if (useFilter_act[i] === "Picnics") {
          actvar = 'i'
        } else if (useFilter_act[i] === "Day-outs") {
          actvar = 'j';
        } else if (useFilter_act[i] === "Skiing") {
          actvar = 'k';
        }
        str += actvar;
      }
      console.log("setData_Filtered", str, filter_Data.filter((n) => n?.data?.Act_Var.toLowerCase().includes(str.toLowerCase())))
      // setData_Filtered(filter_Data.filter((n) => n?.data?.Act_Var.toLowerCase().includes(str.toLowerCase())))
    } else {
      // setData_Filtered(filter_Data)
    }
  }

  // for style filter 
  const filterbyStyles = () => {
    var styvar = '';
    var Stystr = '';
    // useFilter_style
    if (useFilter_style?.length > 0) {

      for (var i = 0; i < useFilter_style.length; i++) {

        if (useFilter_style[i] === "Couples") {
          styvar = 'a';
        } else if (useFilter_style[i] === "Friends") {
          styvar = 'b';
        } else if (useFilter_style[i] === "Family") {
          styvar = 'c';
        } else if (useFilter_style[i] === "Corporate") {
          styvar = 'd';
        } else if (useFilter_style[i] === "School Trips") {
          styvar = 'e';
        } else if (useFilter_style[i] === "Workation") {
          styvar = 'f';
        } else if (useFilter_style[i] === "Solo") {
          styvar = 'g';
        } else if (useFilter_style[i] === "Adventure Sports") {
          styvar = 'h'
        } else if (useFilter_style[i] === "Bike Trips") {
          styvar = 'i'
        }

        Stystr += styvar;
      }
      // console.log("setData_Filtered", Stystr, filter_Data.filter((n) => n?.data?.Tra_Var.toLowerCase().includes(Stystr.toLowerCase())))
      setData_Filtered(filter_Data.filter((n) => n?.data?.Tra_Var.toLowerCase().includes(Stystr.toLowerCase())))
    } else {
      // setData_Filtered(filter_Data)
    }
  }
// console.log(globalVariable?.Act)
// console.log(Object.values(globalVariable?.Act))

  return (
    <div className='nainital'>
      <Header />
      <div className="nainital__body">
        <img className='nainital__body_img' src={data?.img} alt="" />
        <div className='Name_on_img'>{data?.Name}</div>
        <div className='offer_on_img2'>Get Flat 25% off</div>
        <div>
          <h2>
            {
              // globalVariable?.Act
            }
          </h2>
        </div>
        <div className="nainital__body_first">
          <div className="smallHeader">
            <div className="header_name">
              Home
              {" >"}
            </div>
            <div className="header_name">
              Cities
              {" > "}
            </div>
            <div className="header_name active">
              {data?.Name}
            </div>
          </div>
          <div className="smallContent">
            <div className="smallContent__head">
              ABOUT {data?.Name}
            </div>
            <div className="smallContent__body">
              {data?.About}
            </div>
          </div>
          <div className="Read__More">
            Read  More
          </div>
          <div className="nainitalBody__input">
            <img src={search} alt="" />
            <input type="" placeholder='Search...' />
            <div onClick={filterbyStyles} >
              49 Packages Found
            </div>
          </div>
        </div>
        <div className="nainital__body_second">
          <div className="nainital__body_secondIn">
            <div className="nainital__filter">
              <Filter setData_Filtered={setData_Filtered} data={data} />
              {/* <button onClick={trendingPackage}>trendingPackage</button> */}
            </div>
            <div className="nainital__card_out">
              {/* {console.log("dataCard", dataCard)} */}
              {data_Filtered?.map((data) => (
                <Card data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Destination trendingTreks={All_Treks.filter((trek) => {
        return trek.trek_data.packagetype === "Trending";
      })} />
      <Footer />
    </div>
  )
}

export default Location