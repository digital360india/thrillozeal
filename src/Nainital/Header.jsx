import React, { useState, useEffect } from 'react';
import './Header.css';
import divider from '../home/img/Line 2.png'
import search from '../home/img/search.png';
import call from '../home/img/phone-call.png';
import menu from '../home/img/menu.png';
import { useHistory, useLocation } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import {
    KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
    LocationOnOutlined as LocationOnOutlinedIcon,SearchOutlined as SearchOutlinedIcon,
} from "@mui/icons-material";
import { useParams } from 'react-router-dom';
import MenuForMobile from '../Components/Navbar/MenuForMobile';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header({ setLoading }) {

    const [mobileOpen, setMobileOpen] = useState(false);

    const history = useHistory();
    var param = useParams();
    // const routerData=useLocation();
    // JvH2wjbXOWgoOA17X4GWNainital
    // console.log(routerData?.state?.activity)
    const [{ globalVariable }, dispatch] = useStateValue();

    const [showsearch, setShowsearch] = useState(false);
    const [showdropdown_act, setShowdropdown_act] = useState(false);
    const [showdropdown, setShowdropdown] = useState(false);

    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [location, setLocation] = useState(param?.location)
    const [activity, setActivity] = useState(param?.activity)

    const onFocus = () => {
        setShowdropdown_act(true);
    };
    const onBlur = () => {
        const concernedElement = document.querySelector(".click-text");

        document.addEventListener("mousedown", (event) => {
            if (concernedElement.contains(event.target)) {
            } else {
                setShowdropdown_act(false)
                setShowdropdown(false)
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
        setLoading(true)
        history.push(`/${location ? location : "All_Location"}/${activity ? activity : "All_Activities"}/All_Categories`);
    }

    const goToPage = (location) => {
        history.push(`/${location}`)
    }

    // const searchByClick = (loc) => {
    //     setInput2(loc);
    //     setLocation(loc);
    //     history.push(`/${loc}`);
    //     setShowdropdown(false);
    // }

    var btn = document.getElementById("sub");
    btn?.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            // validate(e);
            Search_Click()
        }
    });
    var btn2 = document.getElementById("sub2");
    btn?.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            // validate(e);
            Search_Click()
        }
    });
    document.addEventListener("keypress", function onEvent(event) {
        if (event.key === "Enter") {
            // Do something better
            // console.log("Enter")
            Search_Click();
        }
    });

    return (
        <>
            {
                mobileOpen &&
                <MenuForMobile setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
            }
            <div id="sub" onBlur={onBlur} className='nainital_header click-text'>
                <div className="firstDiv">
                    <div className={!showsearch ? "nainitalSearch_img" : "TruenainitalSearch_img"}>
                        <img onClick={() => setShowsearch(!showsearch)} style={{ height: '40px' }} src={search} alt="" />
                    </div>
                    <div onClick={() => goToPage("")} className={!showsearch ? "N__Header__logo" : "TrueN__Header__logo"}>
                        <img className='Nainital_logo' src="/Images/logo.png" alt="" />
                    </div>
                    <div className={!showsearch ? "FirstHome__input_forheader" : "TrueFirstHome__input_forheader"}>
                        <input onFocus={onFocus} value={input} type="text" placeholder="Activities" onChange={onChangeAct} />

                        <div className={showdropdown_act ? "header__dropdown" : 'header__dropdownnone'}>
                            {globalVariable?.Activities && Object.entries(globalVariable?.Activities).filter((n) => n[1].toLowerCase().includes(input.toLowerCase())).length > 0 ? Object.entries(globalVariable?.Activities).filter((n) => n[1].toLowerCase().includes(input.toLowerCase())).map((loc) => (
                                <h5 onClick={() => { setActivity(loc[1]); setInput(loc[1]); setShowdropdown_act(false) }} className='header__dropdown_h5'>{loc[1]}</h5>
                            )) : <h5 onClick={() => { setActivity("All_Activities"); setShowdropdown_act(false) }} className='header__dropdown_h5'>No result</h5>}
                        </div>

                        <div onClick={() => { setShowdropdown_act(!showdropdown_act) }} className='dropdown' ><KeyboardArrowDownOutlinedIcon /></div>
                        <img className='N__divider' src={divider} alt="" />
                        <input onFocus={onFocus1} value={input2} type="text" placeholder="Location" onChange={onChangeloc} />
                        <div className='dropdown' onClick={() => { setShowdropdown(!showdropdown) }} ><LocationOnOutlinedIcon /></div>
                        {showdropdown &&
                            <div className="header__dropdown header__dropdown2">
                                {globalVariable?.Locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).length > 0 ? globalVariable?.Locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).map((loc) => (
                                    <h5 onClick={() => {
                                        setInput2(loc)
                                        setLocation(loc)
                                    }} className='header__dropdown_h5'>{loc}</h5>
                                )) : <h5 onClick={() => setLocation("All_Location")} className='header__dropdown_h5'>No result</h5>}
                            </div>
                        }
                        <img className='N__divider' src={divider} alt="" />
                        <div className='search' onClick={Search_Click} ><SearchOutlinedIcon /></div>
                    </div>
                    <div className="sections_forM" onClick={() => setMobileOpen(!mobileOpen)}>
                        <MenuRoundedIcon style={{ color: 'white', fontSize: '30px', marginTop: "-3px" }} />
                    </div>
                </div>
                <div className="N__sections">
                    <div onClick={() => goToPage("")} className="Header__section">
                        Home
                    </div>
                    <div onClick={() => goToPage("about")} className="Header__section">
                        About Us
                    </div>
                    <div onClick={() => history.push(`/All_Location/All_Activities/All_Categories`)} className="Header__section">
                        Cities
                    </div>
                    <a href="tel:83030 22306">
                        <div className="call">
                            <img src={call} alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header