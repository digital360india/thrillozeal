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
import FAQ from '../Components/FAQs/FAQ';
import Package from '../Components/Trek/Package';
import Footer from '../Components/Footer/Footer';
import Policy from '../Components/Policy/Policy';
import Destination from '../Components/Destinations/Destination';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SubLocationImages from '../Components/Destinations/SubLocationsImages';
// import './Destination.css';

function SubLocation() {
    const param = useParams();

    var { location_id, trek_id } = useParams();

    const [active, setActive] = useState("first");
    const [data, setData] = useState(null);
    const database = db.collection("Cities")
        .doc(location_id)
        .collection("All_Trek")
        .doc(trek_id)

    useEffect(() => {
        database.onSnapshot((snapshot) => (
            setData(snapshot.data())
        ))
    }, [])
    // console.log(data)
    useEffect(() => {
        console.log("hari", (data?.pricecross - data?.price) * 100 / data?.pricecross);
    }, [data])

    return (
        <div className='SubLocation'>
            <Header />
            <div className="subLocation">

                <SubLocationImages data={data} />

                <div className="smallHeader">
                    <div className="header_name">
                        Home
                        {" >"}
                    </div>
                    <div className="header_name">
                        Cities
                        {" > "}
                    </div>
                    {/* <div className="header_name">
                        Nainital
                        {" > "}
                    </div> */}
                    <div className="header_name active">
                        {data?.location}
                    </div>
                </div>
                <div className="sublocation_firstDiv">
                    <div className="card__c2">
                        <div className="card__c2_head">
                            {data?.name}
                        </div>
                        <div className="card__c2_body">
                            <div className="card__c2_innner">
                                <img src="/Images/clock.png"></img>
                                <div className="c2__text">{data?.day}D/{data?.night}N</div>
                            </div>
                            <div className="card__c2_innner">
                                <img src="/Images/map-pin.png" alt='map'></img>
                                <div className="c2__text">{data?.location}</div>
                            </div>
                            <br />
                            <div className="card__c2_innner card__c2_innner2">
                                <div className="naini__stars">
                                    <img src="/Images/Group 4.png"></img>
                                    <p>based on {data?.reviewNo} reviews</p>
                                </div>
                                <div className="naini__rating">
                                    <p>{data?.review}</p>
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
                            <div className="strike"><p>starting from</p> INR {data?.pricecross}/-</div>
                            <div className='subLocation_price_price'>INR {data?.price}/-</div>
                            <div className="discount">
                                <p>Flat {parseInt((data?.pricecross - data?.price) * 100 / data?.pricecross)}% off!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sublocation_SecondDiv">
                    <div className="sublocation_SecondDiv_first">
                        <div className="sublocation_button">
                            <a className="sublocation_button_a" onClick={() => setActive("first")}>Highlights</a>
                            <a className="sublocation_button_a" onClick={() => setActive("second")}>Itinerary</a>
                            <a className="sublocation_button_a" onClick={() => setActive("third")}>FAQs</a>
                            <a className="sublocation_button_a" onClick={() => setActive("fourth")}>Bookings</a>
                            <a className="sublocation_button_a" onClick={() => setActive("fifth")}>Reviews</a>
                        </div>

                        <div className="sublocation_btnOne">
                            {active === "first" && <Trek />}
                            {active === "second" && <Itinerary />}
                            {active === "third" && <FAQ />}
                            {active === "fourth" && <Package />}
                            {active === "fifth" && <></>}
                        </div>
                    </div>
                    <div className="sublocation_SecondDiv_form">
                        <Form />
                    </div>
                </div>
                <Policy />
                <Destination />
                <Footer />
            </div>
        </div>
    )
}

export default SubLocation