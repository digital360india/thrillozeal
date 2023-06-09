import React, { useState, useEffect } from 'react';
import './FirstHome.css';
import logo from './img/logo.png';
import call from './img/phone-call.png';
import background1 from './img/thrillo 1.webp';
import background2 from './img/thrillo 1 (5).webp';
import background3 from './img/thrillo 1 (4).webp';
import background4 from './img/thrillo 1 (2).webp';
import background5 from './img/thrillo 1 (1).webp';
import background6 from './img/thrillo 1 (3).webp';
import divider from './img/Line 2.png';
import arrow from './img/Arrow 1.png';
import icon1 from './img/icon 1.png';
import icon2 from './img/icon 2.png';
import icon3 from './img/icon 3.png';
import icon4 from './img/icon 4.png';
import icon5 from './img/icon 5.png';
import icon6 from './img/icon 6.png';
import background1theme from './img/Ellipse 1 (5).png'
import background2theme from './img/Ellipse 1.png'
import background3theme from './img/Ellipse 1 (4).png'
import background4theme from './img/Ellipse 1 (2).png'
import background5theme from './img/Ellipse 1 (1).png'
import background6theme from './img/Ellipse 1 (3).png'
import facebookIcon from './img/facebook_icon.png'
import twitterIcon from './img/twitter_icon.png'
import linkedinIcon from './img/linkedin_icon.png'
import menu from './img/menu.png'
import Secondpage from './Secondpage';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Destination from '../Components/Destinations/Destination';
import Footer from '../Components/Footer/Footer';
import ExploreCities from './ExploreCities';
import Testimonials from './Testimonials';
import Add from './Add';
import Add2 from './Add2';
import Travel from '../Main/Travel';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Nainital/Header';
import { actionTypes } from '../reducer';
import db from '../firebase';
import {
    KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
    LocationOnOutlined as LocationOnOutlinedIcon,
    SearchOutlined as SearchOutlinedIcon, Instagram as InstagramIcon,
} from "@mui/icons-material";
import Loading from '../Components/Loader/Loading';

function FirstHome() {

    const history = useHistory();
    const [{ globalVariable, All_Treks }, dispatch] = useStateValue();

    const [showsearch, setShowsearch] = useState(false);
    const [showdropdown_act, setShowdropdown_act] = useState(false);
    const [showdropdown, setShowdropdown] = useState(false);

    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [location, setLocation] = useState('All_Location')
    const [activity, setActivity] = useState('All_Activities')

    const [class1, setclass1] = useState('one');
    const [class2, setclass2] = useState('two');
    const [class3, setclass3] = useState('three');
    const [class4, setclass4] = useState('four');
    const [class5, setclass5] = useState('five');
    const [class6, setclass6] = useState('changeIcon');


    const onFocus = () => {
        setShowdropdown_act(true);
    };

    const onBlur = () => {
        const concernedElement = document.querySelector(".FirstHome__input");

        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {
                console.log("Clicked Inside");
            } else {
                setShowdropdown_act(false)
                setShowdropdown(false)
                console.log("Clicked Outside / Elsewhere");
            }
        });
    };

    const onFocus1 = () => {
        setShowdropdown(true)
    };

    const onChangeAct = (e) => {
        setInput(e.target.value)
        setActivity(e.target.value)
    }
const onChangeloc = (e) => {
        setInput2(e.target.value)
        setLocation(e.target.value)
    }

    const Search_Click = () => {
        console.log("'first'")
        history.push(`/${location ? location:'All_Location'}/${activity ? activity:'All_Activities'}/All_Styles`);
    }

    const [newArr, setNewArr] = useState([icon1, icon2, icon3, icon4, icon5, icon6]);
    const [number, setNumber] = useState(1);
    const [currentClass, setCurrentClass] = useState(false);

    const function1 = () => {
        setCurrentClass(!currentClass);
        setNumber((number + 1) % 6)
        var temp = class6;
        setclass6(class5);
        setclass5(class4);
        setclass4(class3);
        setclass3(class2);
        setclass2(class1);
        setclass1(temp);
        // setclass1(class2);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            function1();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentClass]);

    return (
        <>
            <Navbar />
            <div className='FirstHome'>

                <img className={number == 1 ? "backimage1 backimage" : 'backimage2 backimage'} src={background1} alt="" />
                <img className={number == 1 ? "backimage1 theme" : 'backimage2 theme'} src={background1theme} alt="" />


                <img className={number == 2 ? "backimage1 backimage" : 'backimage2 backimage'} src={background2} alt="" />
                <img className={number == 2 ? "backimage1 theme" : 'backimage2 theme'} src={background2theme} alt="" />

                <img className={number == 3 ? "backimage1 backimage" : 'backimage2 backimage'} src={background3} alt="" />
                <img className={number == 3 ? "backimage1 theme" : 'backimage2 theme'} src={background3theme} alt="" />

                <img className={number == 4 ? "backimage1 backimage" : 'backimage2 backimage'} src={background4} alt="" />
                <img className={number == 4 ? "backimage1 theme" : 'backimage2 theme'} src={background4theme} alt="" />

                <img className={number == 5 ? "backimage1 backimage" : 'backimage2 backimage'} src={background5} alt="" />
                <img className={number == 5 ? "backimage1 theme" : 'backimage2 theme'} src={background5theme} alt="" />

                <img className={number == 0 ? "backimage1 backimage" : 'backimage2 backimage'} src={background6} alt="" />
                <img className={number == 0 ? "backimage1 theme" : 'backimage2 theme'} src={background6theme} alt="" />

                <div className="FirstHome__Header">
                    <div className="Header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="sections">
                        <div className="Header__section">
                            About Us
                        </div>
                        <div className="Header__section">
                            Category
                        </div>
                        <div className="Header__section">
                            Cities
                        </div>
                        <div className="Header__section">
                            Contact
                        </div>
                        <div className="call">
                            <a href="tel:8303022306"> <img src={call} alt="" /></a>
                        </div>
                    </div>
                    <div className="sections_forM">
                        <img src={menu} alt="" />
                    </div>
                </div>
                <div className="secRow">
                    <div className="firstBox">
                        <div className='combText'>
                            <div className="text1">
                                Explore New
                            </div>
                            <div className="text2">
                                Adventures
                                <span>!</span>
                            </div>
                        </div>
                        <div className="FirstHome__input" onBlur={onBlur} >
                            <input onFocus={onFocus} value={input} type="text" placeholder="Activities" onChange={onChangeAct} />
                            {/* this for activities dropdown */}
                            <div onClick={() => { setShowdropdown_act(!showdropdown_act) }} className='dropdown' ><KeyboardArrowDownOutlinedIcon /></div>
                            {showdropdown_act &&
                                <div className="header__dropdown header__dropdown1">
                                    {globalVariable?.Activities && Object.entries(globalVariable?.Activities)
                                        .filter((n) => n[1].toLowerCase().includes(input?.toLowerCase())).length > 0 ? Object.entries(globalVariable?.Activities)
                                            .filter((n) => n[1].toLowerCase().includes(input.toLowerCase())).map((act) => (
                                                <h5 onClick={() => { setInput(act[1]); setActivity(act[1]) }} className='header__dropdown_h5'>{act[1]}</h5>
                                            )) : <h5 onClick={() => { setInput(""); setActivity("All_Activities"); }} className='header__dropdown_h5'>No result</h5>}
                                </div>
                            }
                            <img className='divider' src={divider} alt="" />
                            <div className='dropdown' onClick={() => { setShowdropdown(!showdropdown) }} ><LocationOnOutlinedIcon /></div>
                            <input onFocus={onFocus1} value={input2} type="text" placeholder="Location" onChange={onChangeloc} />
                            {/* this is for location dropdown */}
                            {showdropdown &&
                                <div className="header__dropdown header__dropdown2">
                                    {globalVariable?.Locations
                                        .filter((n) => n.toLowerCase().includes(input2.toLowerCase())).length > 0 ? globalVariable?.Locations
                                            .filter((n) => n.toLowerCase().includes(input2.toLowerCase())).map((loc) => (
                                                <h5 onClick={() => { setInput2(loc); setLocation(loc) }} className='header__dropdown_h5'>{loc}</h5>
                                            )) : <h5 onClick={() => setLocation("All_Location")} className='header__dropdown_h5'>No result</h5>}
                                </div>
                            }

                            <img className='divider' src={divider} alt="" />
                            <div className='search' onClick={Search_Click} ><SearchOutlinedIcon /></div>
                        </div>
                        <div className='SocialLinks'>
                            <img className='social-link' src={facebookIcon} alt="" />
                            <InstagramIcon />
                            <img className='social-link' src={linkedinIcon} alt="" />
                            <img className='social-link' src={twitterIcon} alt="" />
                        </div>
                    </div>

                    <div className="secondBox">
                        <div className="secondbox_row">
                            <div className="second_Border">

                                {/* {newArr.map((arr, k) => (
                                    <>
                                        {k == 1 && <img src={arr} className="one" alt="" />}
                                        {k == 2 && <img src={arr} className="two" alt="" />}
                                        {k == 3 && <img src={arr} className="three" alt="" />}
                                        {k == 4 && <img src={arr} className="four" alt="" />}
                                        {k == 5 && <img src={arr} className="five" alt="" />}
                                    </>
                                ))} */}
                                <img src={icon2} className={class1} alt="" />
                                <img src={icon3} className={class2} alt="" />
                                <img src={icon4} className={class3} alt="" />
                                <img src={icon5} className={class4} alt="" />
                                <img src={icon6} className={class5} alt="" />
                                <img src={icon1} className={class6} alt="" />
                            </div>
                        </div>
                        <div className="secondbox_row2">
                            <div className="changeArrow" onClick={function1}>
                                <img src={arrow} className="changeArrowImg" alt="" />
                            </div>


                            <div className="changeArrow" onClick={function1}>
                                <img src={arrow} className="changeArrowImg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Destination trendingTreks={All_Treks.filter((trek) => {
                return trek.trek_data.packagetype === "Trending";
            })} />
            <ExploreCities />
            <Add />
            <Travel />
            <Add2 />
            <Testimonials />
            <Footer />
        </>
    )
}

export default FirstHome;