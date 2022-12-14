import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../home/img/logo.png';
import divider from '../home/img/Line 2.png'
import search from '../home/img/search.png';
import dropdown from '../home/img/Vector.svg'
import map from '../home/img/map-pin.png'
import call from '../home/img/phone-call.png';
import menu from '../home/img/menu.png';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Header() {
    const history = useHistory();
    // JvH2wjbXOWgoOA17X4GWNainital
    const [{ locations,activities}, dispatch] = useStateValue();

    const [showsearch, setShowsearch] = useState(false);
    const [showdropdown_act, setShowdropdown_act] = useState(false);
    const [showdropdown, setShowdropdown] = useState(false);

    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [location, setLocation] = useState('')
    const [activity, setActivity] = useState('')

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

    const Search_Click=()=>{
        history.push(`/${location}`)
    }

    return (
        <div onBlur={onBlur} className='nainital_header click-text'>
            <div className="firstDiv">
                <div className={!showsearch ? "nainitalSearch_img" : "TruenainitalSearch_img"}>
                    <img onClick={() => setShowsearch(!showsearch)} src={search} alt="" />
                </div>
                <div className={!showsearch ? "N__Header__logo" : "TrueN__Header__logo"}>
                    <img className='Nainital_logo' src={logo} alt="" />
                </div>
                <div className={!showsearch ? "FirstHome__input_forheader" : "TrueFirstHome__input_forheader"}>
                    <input onFocus={onFocus} value={input} type="text" placeholder="Activities" onChange={onChangeAct} />
                    {
                        <div className={showdropdown_act ? "header__dropdown" : 'header__dropdownnone'}>
                            {activities.filter((n) => n.toLowerCase().includes(input.toLowerCase())).length > 0 ? activities.filter((n) => n.toLowerCase().includes(input.toLowerCase())).map((loc) => (
                                <h5 onClick={() => {setActivity(loc); setInput(loc); setShowdropdown_act(false) }} className='header__dropdown_h5'>{loc}</h5>
                            )) : <h5 onClick={() => { setActivity(''); setShowdropdown_act(false) }} className='header__dropdown_h5'>No result</h5>}
                        </div>
                    }
                    <img onClick={() => { setShowdropdown_act(!showdropdown_act) }} className='dropdown' src={dropdown} alt="" />
                    <img className='N__divider' src={divider} alt="" />
                    <img className='dropdown' onClick={() => { setShowdropdown(!showdropdown) }} src={map} alt="" />
                    <input onFocus={onFocus1} value={location} type="text" placeholder="Location" onChange={onChangeloc} />
                    {showdropdown &&
                        <div className="header__dropdown header__dropdown2">
                            {locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).length > 0 ? locations.filter((n) => n.toLowerCase().includes(input2.toLowerCase())).map((loc) => (
                                <h5 onClick={() => { setInput2(loc); setLocation(loc) }} className='header__dropdown_h5'>{loc}</h5>
                            )) : <h5 onClick={() => setLocation("")} className='header__dropdown_h5'>No result</h5>}
                        </div>
                    }
                    <img className='N__divider' src={divider} alt="" />
                    <img className='search' src={search} alt="" onClick={Search_Click} />
                </div>
                <div className="sections_forM">
                    <img src={menu} alt="" />
                </div>
            </div>
            <div className="N__sections">
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
                    <img src={call} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header