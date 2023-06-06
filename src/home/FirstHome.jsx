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
import search from './img/search.png';
import dropdown from './img/Vector.svg';
import map from './img/map-pin.png';
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
import instagramIcon from './img/instagram_icon.png'
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
function FirstHome() {

    const history = useHistory();
    const [{ globalVariable,All_Treks }, dispatch] = useStateValue();

    const [showsearch, setShowsearch] = useState(false);
    const [showdropdown_act, setShowdropdown_act] = useState(false);
    const [showdropdown, setShowdropdown] = useState(false);
    // const [img1, setimg1] = useState(background1);
    // const [img2, setimg2] = useState(background1);
    // const [ind, setind] = useState(01);

    useEffect(() => {
        db.collection('GlobalVariable').doc("GlobalVariable").onSnapshot((snapshot) => (
            dispatch({
                type: actionTypes.SET_USE_ALL_DATA,
                All_Data: snapshot.data(),
            })
        ))
    }, []);

    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [location, setLocation] = useState('')
    const [activity, setActivity] = useState('')

    const [class1, setclass1] = useState('one');
    const [class2, setclass2] = useState('two');
    const [class3, setclass3] = useState('three');
    const [class4, setclass4] = useState('four');
    const [class5, setclass5] = useState('five');
    const [class6, setclass6] = useState('changeIcon');

    const [allTreks, setAllTreks] = useState([]);
      
    useEffect(() => {
        
        db.collection('Cities').onSnapshot(snapshot =>{
           snapshot.docs.map(city =>{
             db.collection('Cities').doc(city.id).collection('All_Trek').onSnapshot(snapshot =>{
                snapshot.docs.map(doc => 
                    setAllTreks(prevTrek => [...prevTrek,{
                            trek_id: doc.id,
                            trek_data : doc.data()
                        }])
                        );
             });
           });
        });
     }, []);

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_USE_ALL_TREKS,
            All_Treks: allTreks,
          });
      }, [allTreks])

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
        history.push(`/${location}`)
    }

    const [newArr, setNewArr] = useState([icon1, icon2, icon3, icon4, icon5, icon6]);
    const [number, setNumber] = useState(1);

    const function1 = () => {
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
                            <input onFocus={onFocus} value={activity} type="text" placeholder="Activities" onChange={onChangeAct} />
                            {
                                // <div className={showdropdown_act ? "header__dropdown" : 'header__dropdownnone'}>
                                //.filter((n) => n.toLowerCase().includes(input.toLowerCase())).length > 0 ? activities.filter((n) => n.toLowerCase().includes(input.toLowerCase())).map((loc) => (
                                //         <h5 onClick={() => { console.log("onFocus={onFocus}"); setActivity(loc); setInput(loc) }} className='header__dropdown_h5'>{loc}</h5>
                                //     )) : <h5 onClick={() => { setActivity(''); setShowdropdown_act(false) }} className='header__dropdown_h5'>No result</h5>}
                                // </div>
                            }
                            <img className='dropdown' src={dropdown} alt="" />
                            <img className='divider' src={divider} alt="" />
                            <img className='dropdown' src={map} alt="" />
                            <input onFocus={onFocus1} value={location} type="text" placeholder="Location" onChange={onChangeloc} />
                            {showdropdown &&
                                <div className="header__dropdown header__dropdown2">
                                    {globalVariable?.locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).length > 0 ? globalVariable?.locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).map((loc) => (
                                        <h5 onClick={() => { setInput2(loc); setLocation(loc) }} className='header__dropdown_h5'>{loc}</h5>
                                    )) : <h5 onClick={() => setLocation("")} className='header__dropdown_h5'>No result</h5>}
                                </div>
                            }

                            <img className='divider' src={divider} alt="" />
                            <img onClick={Search_Click} className='search' src={search} alt="" />
                        </div>
                        <div className='SocialLinks'>
                            <img className='social-link' src={facebookIcon} alt="" />
                            <img className='social-link' src={instagramIcon} alt="" />
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
            })}/>
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