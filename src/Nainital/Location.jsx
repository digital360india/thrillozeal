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
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';

function Location() {

  var { location } = useParams();
  const history = useHistory();

  const [{ All_Treks }, dispatch] = useStateValue();

  const [data, setData] = useState(null);
  const [dataTrek, setDataTrek] = useState(null);
  const [data_Filtered, setData_Filtered] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchByName, setSearchByName] = useState('');
  const str = location.charAt(0).toUpperCase() + location.slice(1);

  useEffect(() => {
    if (str)
      db.collection('Cities').doc('JvH2wjbXOWgoOA17X4GW' + str)
        .onSnapshot((snapshot) => {
          setData(snapshot.data())
        })
  }, [str]);

  useEffect(() => {
    if (dataTrek?.length > 0 && searchByName?.length > 0) {
      setData_Filtered(dataTrek?.filter((trek) => {
        return trek?.trek_data?.name ? trek?.trek_data?.name?.toLowerCase().includes(searchByName.toLowerCase()) : true;
      }))
    } else {
      setData_Filtered(dataTrek);
    }
  }, [searchByName]);

  const increaseIndex = () => {
    if (currentIndex + 8 < data_Filtered.length) {
      setCurrentIndex(currentIndex + 8);
      window.scrollTo(0, 450.5);
    }
  }

  const goToPage = (loc) => {
    history.push(`/${loc}`);
  }

  const decreaseIndex = () => {
    if (currentIndex - 8 >= 0) {
      setCurrentIndex(currentIndex - 8);
      window.scrollTo(0, 450.5);
    }
  }


  useEffect(() => {
    if (location != 'All_Location') {
      const temp = All_Treks.filter((trek) => {
        return trek?.trek_data?.city ? trek?.trek_data?.city.toLowerCase() === location.toLowerCase() : false;
      });
      setDataTrek([...temp])
      setData_Filtered([...temp]);
    } else {
      setDataTrek([...All_Treks])
      setData_Filtered([...All_Treks]);
    }

  }, [location, All_Treks]);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    }
  }

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
            <div onClick={() => goToPage('')} className="header_name">
              Home
              {" >"}
            </div>
            <div onClick={() => goToPage('cities')} className="header_name">
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
            <ReadMore>{data?.About}</ReadMore>
          </div>
          <div className="nainitalBody__input">
            <img src={search} alt="" />
            <input onChange={(e) => { setSearchByName(e.target.value)}} placeholder='Search by Trek name ...' />
            <div onClick={() => { }} >
              {data_Filtered?.length} Packages Found
            </div>
          </div>
        </div>
        <div className="nainital__body_second">
          <div className="nainital__body_secondIn">
            <div className="nainital__filter">
              <Filter data_Filtered={data_Filtered} setData_Filtered={setData_Filtered} data={dataTrek} />
              {/* <button onClick={trendingPackage}>trendingPackage</button> */}
            </div>
            <div className="nainital__card_out">
              {/* {console.log("dataCard", dataCard)} */}
              {data_Filtered.length > 0 && data_Filtered?.slice(currentIndex, currentIndex + 8)?.map((data) => (
                <Card data={data} />
              ))}
              <div className="ListingNumber">
                <div className="BackArrowofList">
                  <ArrowLeftRoundedIcon fontSize="medium" onClick={decreaseIndex} />
                </div>
                <div className="BackArrowofList">
                  <ArrowRightRoundedIcon fontSize="medium" onClick={increaseIndex} />
                </div>
                <div className="numberInList">
                  {currentIndex}-{currentIndex + 8 > data_Filtered?.length ? data_Filtered?.length : currentIndex + 8} of {data_Filtered?.length}
                </div>
              </div>
              <hr style={{ margin: '10px 0 32px 0' }} />
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