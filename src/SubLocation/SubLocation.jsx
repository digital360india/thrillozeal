import React, { useEffect, useState } from 'react';
import './SubLocation.css';
import Gallery from '../Gallery/Gallery';
import Header from '../Nainital/Header';
import rec1 from './img/Rectangle 56.png';
import rec2 from './img/Rectangle 57.png';
import rec3 from './img/Rectangle 58.png';
import rec4 from './img/Rectangle 59.png';
import fastfood from './img/Fast Food.png';
import London from './img/London Cab.png';
import Hotel from './img/Hotel Door.png';
import threeD from './img/3D Glasses.png';
import fire from './img/Fire.png';
import king from './img/Kayaking.png';
import Form from './Form';
import { Trek } from '../Components/Trek/Trek';
import Itinerary from '../Components/Trek/Itinerary';
import Review from '../Components/Review';
import FAQ from '../Components/FAQs/FAQ';
import Package from '../Components/Trek/Package';
import Footer from '../Components/Footer/Footer';
import Policy from '../Components/Policy/Policy';
import Destination from '../Components/Destinations/Destination';
import { useNavigate, useParams } from 'react-router-dom';
import db from '../firebase';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SubLocationImages from '../Components/Destinations/SubLocationsImages';
import { useStateValue } from '../StateProvider';
import Stars from '../Components/Stars/Stars';
import { useLocation } from 'react-router-dom';
import {
    AccessTimeRounded as AccessTimeRoundedIcon,
    LocationOnOutlined as LocationOnOutlinedIcon,
} from '@mui/icons-material';

function SubLocation() {

    const param = useParams();
    const location = useLocation();
    const history = useNavigate();
    const [loading, setLoading] = useState(false);

    var { trek_id } = useParams();
    const [{ All_Treks }, dispatch] = useStateValue();
    const [active, setActive] = useState("first");
    const [data, setData] = useState(null);
    // const database = db.collection("Cities")
    //     .doc("JvH2wjbXOWgoOA17X4GW"+location_id)
    //     .collection("All_Trek")
    //     .doc(trek_id);

    const goToPage = (loc) => {
        history(`/${loc}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state && location.state.page_loc) {
            window.scrollTo({
                top: location.state.page_loc,
                behavior: 'smooth',
            });
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location])

    useEffect(() => {
        setData(All_Treks.filter((data) => {
            return data?.trek_id == trek_id;
        })[0])
    }, [All_Treks])
console.log("SUBLOC ",data?.trek_data)

    return (
        <div className='SubLocation'>
            <Header setLoading={setLoading} />
            <div className="subLocation">

                <SubLocationImages data={data?.trek_data} />

                <div className="smallHeader">
                    <div onClick={() => goToPage('')} className="header_name">
                        Home
                        {" >"}
                    </div>
                    <div onClick={() => goToPage('All_Location/All_Activities/All_Styles')} className="header_name">
                        Cities
                        {" > "}
                    </div>
                    {/* <div className="header_name">
                        Nainital
                        {" > "}
                    </div> */}
                    <div className="header_name active">
                        {data?.trek_data?.location}
                    </div>
                </div>
                <div className="sublocation_firstDiv">
                    <div className="card__c2">
                        <div className="card__c2_head">
                            {data?.trek_data?.name}
                        </div>
                        <div className="card__c2_body">
                            <div className="card__c2_innner">
                                <AccessTimeRoundedIcon sx={{ color: "#57BEBE" }} />
                                <div className="c2__text">{data?.trek_data?.day}D/{data?.trek_data?.night}N</div>
                            </div>
                            <div className="card__c2_innner">
                                <LocationOnOutlinedIcon sx={{ color: "#57BEBE" }} />
                                <div className="c2__text">{data?.trek_data?.location}</div>
                            </div>
                            <br />
                            <div className="card__c2_innner card__c2_innner2">
                                <div className="naini__stars">
                                    <Stars review={data?.trek_data?.review} />
                                    <p>based on {data?.trek_data?.reviewNo} reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="naini__icons_collection naini__iconsBlock">
                            <div className="three_icon_coll">
                                <div className="naini__icons">
                                    <img src={fastfood} alt='' />
                                    <p>Meals</p>
                                </div>
                                <div className="naini__icons">
                                    <img src={London} alt='' />
                                    <p>Transportation</p>
                                </div>
                                <div className="naini__icons">
                                    <img src={Hotel} alt='' />
                                    <p>Hotel</p>
                                </div>
                            </div>
                            <div className="three_icon_coll">
                                <div className="naini__icons">
                                    <img src={threeD} alt='' />
                                    <p>Sight- seeing</p>
                                </div>
                                <div className="naini__icons">
                                    <img src={fire} alt='' />
                                    <p>bonfire</p>
                                </div>
                                <div className="naini__icons">
                                    <img src={king} alt='' />
                                    <p>More</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="subLocation_price">
                        <div className="subLocation_price_box">
                            <div className="strike"><p>starting from</p> INR {data?.trek_data?.pricecross}/-</div>
                            <div className='subLocation_price_price'>INR {data?.trek_data?.price}/-</div>
                            <div className="discount">
                                <p>Flat {parseInt((data?.trek_data?.pricecross - data?.trek_data?.price) * 100 / data?.trek_data?.pricecross)}% off!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sublocation_SecondDiv">
                    <div className="sublocation_SecondDiv_first">
                        <div className="sublocation_button">
                            <a className={`${active == "first" && 'activeBtn'} sublocation_button_a`} onClick={() => setActive("first")}>Highlights</a>
                            <a className={`${active == "second" && 'activeBtn'} sublocation_button_a`} onClick={() => setActive("second")}>Itinerary</a>
                            <a className={`${active == "third" && 'activeBtn'} sublocation_button_a`} onClick={() => setActive("third")}>FAQs</a>
                            <a className={`${active == "fourth" && 'activeBtn'} sublocation_button_a`}  
                            // onClick={() => setActive("fourth")}
                            >Bookings</a>
                            <a className={`${active == "fifth" && 'activeBtn'} sublocation_button_a`} 
                            // onClick={() => setActive("fifth")}
                            >Reviews</a>
                        </div>

                        <div className="sublocation_btnOne">
                            {active === "first" && <Trek location_id={'JvH2wjbXOWgoOA17X4GW'+data?.trek_data?.city}/>}
                            {active === "second" && <Itinerary location_id={'JvH2wjbXOWgoOA17X4GW'+data?.trek_data?.city} />}
                            {active === "third" && <FAQ location_id={'JvH2wjbXOWgoOA17X4GW'+data?.trek_data?.city} />}
                            {active === "fourth" && <Package />}
                            {active === "fifth" && <Review city_id={'JvH2wjbXOWgoOA17X4GW'+data?.trek_data?.city} trek_id={trek_id} />}
                        </div>
                    </div>
                    <div className="sublocation_SecondDiv_form">
                        <Form />
                    </div>
                </div>
                <Policy />
                <Destination trendingTreks={All_Treks.filter((trek) => {
                    return trek.trek_data.packagetype === "Trending";
                })} />
                <Footer />
            </div>
        </div>
    )
}

export default SubLocation