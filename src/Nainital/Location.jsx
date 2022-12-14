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
  const history=useHistory()
  const [{ locations, activities, useFilter_act, filter_Data, useFilter_price, useFilter_style }, dispatch] = useStateValue();
  // const [city,setCity]=useState(location);

  const [data, setData] = useState(null);
  const [data_Filtered, setData_Filtered] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  const [dataCard1, setDataCard1] = useState([]);
  const [dataCard2, setDataCard2] = useState([]);
  const [dataCard3, setDataCard3] = useState([]);
  const [dataCard4, setDataCard4] = useState([]);

  const str = location.charAt(0).toUpperCase() + location.slice(1);

  useEffect(() => {
    if (str)
      db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str)
        .onSnapshot((snapshot) => {
          setData(snapshot.data())
        })
  }, [str]);

  // geting all the data from the db for card start
  useEffect(() => {
    if (str)
      //  from the 0-5k
      db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str).collection(str + '_0-5K').onSnapshot((snapshot) => {
        // const na=
        setDataCard1(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      }
      )
    //  from the 5-10k
    db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str).collection(str + '_5-10K').onSnapshot((snapshot) => {
      setDataCard2(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    }
    )
    //  from the 10-15k
    db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str).collection(str + '_10-15K').onSnapshot((snapshot) => {
      setDataCard3(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    }
    )
    //  from the 15k-20k
    db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str).collection(str + '_15-20K').onSnapshot((snapshot) => {
      setDataCard4(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    }
    )
  }, [str]);


  useEffect(() => {
    // if (dataCard1.length > 0 && dataCard2.length > 0 && dataCard3.length > 0 && dataCard4.length > 0) {
    setDataCard([...dataCard1, ...dataCard2, ...dataCard3, ...dataCard4])
    // }
  }, [dataCard4, dataCard3, dataCard2, dataCard1])

  // useState

  // useEffect(() => {
    // dispatch({
    //   type: actionTypes.SET_USE_ALL_DATA,
    //   All_Data: dataCard,
    // });
  //   dispatch({
  //     type: actionTypes.SET_USE_FILTER_DATA,
  //     filter_Data: dataCard,
  //   });
  // }, [dataCard])

  // filter by price range
  const filterbyrange=()=>{
    if(useFilter_price==="All price range"){
      dispatch({
        type: actionTypes.SET_USE_FILTER_DATA,
        filter_Data: dataCard,
      });
    }else if(useFilter_price==="0-5K"){
      dispatch({
        type: actionTypes.SET_USE_FILTER_DATA,
        filter_Data: dataCard1,
      });
    }else if(useFilter_price==="5K-10K"){
      dispatch({
        type: actionTypes.SET_USE_FILTER_DATA,
        filter_Data: dataCard2,
      });
    }else if(useFilter_price==="10K-15K"){
      dispatch({
        type: actionTypes.SET_USE_FILTER_DATA,
        filter_Data: dataCard3,
      });
    }else if(useFilter_price==="15K-20K"){
      dispatch({
        type: actionTypes.SET_USE_FILTER_DATA,
        filter_Data: dataCard4,
      });
    }
  }
  useEffect(()=>{
    if(useFilter_price==="All price range")
    dispatch({
      type: actionTypes.SET_USE_FILTER_DATA,
      filter_Data: dataCard,
    });
  },[dataCard])

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
      setData_Filtered(filter_Data.filter((n) => n?.data?.Act_Var.toLowerCase().includes(str.toLowerCase())))
    } else {
      setData_Filtered(filter_Data)
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
      console.log("setData_Filtered", Stystr, filter_Data.filter((n) => n?.data?.Tra_Var.toLowerCase().includes(Stystr.toLowerCase())))
      setData_Filtered(filter_Data.filter((n) => n?.data?.Tra_Var.toLowerCase().includes(Stystr.toLowerCase())))
    } else {
      setData_Filtered(filter_Data)
    }
  }
  // filterbyActivities();
  useEffect(() => {
    setData_Filtered(filter_Data);
  }, [filter_Data])
  return (
    <div className='nainital'>
      <Header />
      {/* <PaginatedItems itemsPerPage={4} /> */}
      <div className="nainital__body">
        <img src={data?.City_Image} alt="" />
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
              <Filter />
            </div>
            <div className="nainital__card_out">
              {console.log("dataCard", dataCard)}
              {data_Filtered.map((data) => (
                <Card data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Destination />
      <Footer />
    </div>
  )
}

export default Location