import React, { useState, useEffect } from 'react';
import './FirstHome.css';
import './FirstHomeAnimation.css';
import logo from './img/logo.png';
import call from './img/phone-call.png';
import background1 from "./img/compressed/campingBackground.webp";
import background2 from "./img/compressed/raftingBackground.webp";
import background3 from "./img/compressed/skiingBackground.webp";
import background4 from "./img/compressed/toursBackground.webp";
import background5 from "./img/compressed/trekkingBackground.webp";
import background6 from "./img/compressed/exploreFunBackground.webp";
import divider from "./img/Line 2.png";
import arrow from "./img/Arrow 1.png";
import icon1 from "./img/camping.png";
import icon2 from "./img/rafting.png";
import icon3 from "./img/skiing.png";
import icon4 from "./img/tours.png";
import icon5 from "./img/trekking.png";
import icon6 from "./img/exploreFun.png";
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
    const [class1, setclass1] = useState('one icon_size');
    const [class2, setclass2] = useState('two icon_size');
    const [class3, setclass3] = useState('three icon_size');
    const [class4, setclass4] = useState('four icon_size');
    const [class5, setclass5] = useState('five icon_size');
    const [class6, setclass6] = useState('changeIcon icon_size');

    const [animation1, setanimation1] = useState('one onerev icon_size');
    const [animation2, setanimation2] = useState('two tworev icon_size');
    const [animation3, setanimation3] = useState('three threerev icon_size');
    const [animation4, setanimation4] = useState('four fourrev icon_size');
    const [animation5, setanimation5] = useState('five fiverev icon_size');
    const [animation6, setanimation6] = useState('changeIcon changeIconrev icon_size');
    const [active, setActive] = useState(false)

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
        history.push(`/${location ? location : 'All_Location'}/${activity ? activity : 'All_Activities'}/All_Styles`);
    }

    const [newArr, setNewArr] = useState([icon1, icon2, icon3, icon4, icon5, icon6]);
    const [number, setNumber] = useState(1);
    const [currentClass, setCurrentClass] = useState(false);

    const function1 = () => {
        setActive(false);
        setCurrentClass(!currentClass);
        setNumber((number + 1) % 6)
        var temp = class6;
        setclass6(class5);
        setclass5(class4);
        setclass4(class3);
        setclass3(class2);
        setclass2(class1);
        setclass1(temp);

        var temp = animation6
        setanimation6(animation5);
        setanimation5(animation4);
        setanimation4(animation3);
        setanimation3(animation2);
        setanimation2(animation1);
        setanimation1(temp);
        // setclass1(class2);
    }

    const function2 = () => {
        setActive(true)
        setCurrentClass(!currentClass);
        if (number == 0) {
            setNumber(5);
        } else {
            setNumber((number - 1) % 6);
        }
        var temp = class1;
        setclass1(class2);
        setclass2(class3);
        setclass3(class4);
        setclass4(class5);
        setclass5(class6);
        setclass6(temp);

        var temp = animation1;
        setanimation1(animation2);
        setanimation2(animation3);
        setanimation3(animation4);
        setanimation4(animation5);
        setanimation5(animation6);
        setanimation6(temp);
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

                <div className="secRow">
                    <div className="secondBox">
                        <div className="secondbox_row">
                            <div className="second_Border">
                                <img src={icon1} className={active ? animation1 : class1} alt="" />
                                <img src={icon2} className={active ? animation2 : class2} alt="" />
                                <img src={icon3} className={active ? animation3 : class3} alt="" />
                                <img src={icon4} className={active ? animation4 : class4} alt="" />
                                <img src={icon5} className={active ? animation5 : class5} alt="" />
                                <img src={icon6} className={active ? animation6 : class6} alt="" />
                            </div>
                        </div>
                        <div className="secondbox_row2">
                            <div className="changeArrow" onClick={function1}>
                                <img src={arrow} className="changeArrowImg" alt="" />
                            </div>


                            <div className="changeArrow" onClick={function2}>
                                <img src={arrow} className="changeArrowImg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

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
                            <div onClick={() => { setShowdropdown_act(!showdropdown_act) }} className='dropdown' ><KeyboardArrowDownOutlinedIcon onClick={() => { setInput(""); setShowdropdown_act(!showdropdown_act) }} /></div>
                            {showdropdown_act &&
                                <div className="header__dropdown header__dropdown1">
                                    {globalVariable?.Activities && Object.entries(globalVariable?.Activities)
                                        .filter((n) => n[1].toLowerCase().includes(input?.toLowerCase())).length > 0 ? Object.entries(globalVariable?.Activities)
                                            .filter((n) => n[1].toLowerCase().includes(input.toLowerCase())).map((act) => (
                                                <h5 onClick={() => { setInput(act[1]); setActivity(act[1]);  setShowdropdown_act(!showdropdown_act); }} className='header__dropdown_h5'>{act[1]}</h5>
                                            )) : <h5 onClick={() => { setInput(""); setActivity("All_Activities"); }} className='header__dropdown_h5'>No result</h5>}
                                </div>
                            }
                            <img className='divider' src={divider} alt="" />
                            <div className='dropdown' onClick={() => { setInput2(''); setShowdropdown(!showdropdown) }} ><LocationOnOutlinedIcon /></div>
                            <input onFocus={onFocus1} value={input2} type="text" placeholder="Location" onChange={onChangeloc} />
                            {/* this is for location dropdown */}
                            {showdropdown &&
                                <div className="header__dropdown header__dropdown2">
                                    {globalVariable?.Locations
                                        .filter((n) => n.toLowerCase().includes(input2.toLowerCase())).length > 0 ? globalVariable?.Locations
                                            .filter((n) => n.toLowerCase().includes(input2.toLowerCase())).map((loc) => (
                                                <h5 onClick={() => { setInput2(loc); setLocation(loc);  setShowdropdown(!showdropdown) }} className='header__dropdown_h5'>{loc}</h5>
                                            )) : <h5 onClick={() => { setLocation("All_Location")}} className='header__dropdown_h5'>No result</h5>}
                                </div>
                            }

                            <img className='divider' src={divider} alt="" />
                            <div className='search' onClick={Search_Click} ><SearchOutlinedIcon /></div>
                        </div>
                        <div className='SocialLinks'>
                            <img className='social-link' onClick={() => window.open("https://www.facebook.com/thrillozealofficial/")} src={facebookIcon} alt="" />
                            <InstagramIcon className='social-link' onClick={() => window.open("https://www.instagram.com/thrillozeal/")}/>
                            <img className='social-link' src={linkedinIcon} alt="" />
                            <img className='social-link' src={twitterIcon} alt="" />
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