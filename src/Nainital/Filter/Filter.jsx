import React, { useState, useEffect } from 'react';
import './Filter.css';
import star from './img/Vector.png'
import progress from './img/progess.png'
import filter from './img/filter.png';
import slider from './img/sliders.png';
import highlow from './img/high-low.png';
import lowhigh from './img/low-high.png';
import cross from './img/cross.svg';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Filter({ data, setData_Filtered }) {

    const [active, setActive] = useState('a');
    // console.log(props.filter_by_price_inc)
    const [{ globalVariable, Travel_Style, filter_prices, useFilter_price }, dispatch] = useStateValue();

    const [showslider, setShowslider] = useState(false);
    const [showfilter, setShowfilter] = useState(false);
    const [width, setWidth] = useState(window.screen.width);
    // const [filterArrayloc, setFilterArrayloc] = useState([]);
    const [filterArrayact, setFilterArrayact] = useState([]);
    const [useFilter_act, setuseFilter_act] = useState('');
    const [filterArraysty, setFilterArraysty] = useState([]);
    const [useFilter_style, setuseFilter_style] = useState('');

    const trendingPackage = () => {
        const temp = data.filter((trek) => {
            return trek?.trek_data?.packagetype === "Trending";
        });
        setData_Filtered([...temp])
    }
    const filter_by_price_inc = () => {
        const temp = data;
        temp.sort((a, b) => {
            return a?.trek_data?.price - b?.trek_data?.price;
        });
        setData_Filtered([...temp])
    }
    const filter_by_price_desc = () => {
        const temp = data;
        temp.sort((a, b) => {
            return b?.trek_data?.price - a?.trek_data?.price;
        });
        setData_Filtered([...temp])
    }
    const increasing_rating = () => {
        const temp = data;
        temp.sort((a, b) => {
            return b?.trek_data?.review - a?.trek_data?.review;
        });
        setData_Filtered([...temp])
    }

    // const [filterArraypri, setFilterArraypri] = useState('All price range');

    // dispatch({
    //     type: actionTypes.SET_USER,
    //     user: auth,
    //   });

    const show_slider = () => {
        setShowslider(!showslider);
    }

    const show_filter = () => {
        setShowfilter(!showfilter);
    }

    const check__checkBoxAct = (e, dest,index) => {
        // console.log(index)
        const checked = e.target.checked;
        if (checked) {
            filterArrayact.push(dest);
            const na = [...filterArrayact]
            setuseFilter_act(prev=>prev+index)
            console.log(useFilter_act)
        } else {
            const index = filterArrayact.findIndex(checkAge);

            function checkAge(age) {
                return age == dest;
            }
            if (index >= 0) {
                filterArrayact.splice(index, 1);
                const na = [...filterArrayact]
                setFilterArrayact(na)
                dispatch({
                    type: actionTypes.SET_USE_FILTER_ACT,
                    useFilter_act: filterArrayact,
                });
            }
        }
    }

    const check__checkBoxSty = (e, sty) => {
        const checked = e.target.checked;
        if (checked) {
            filterArraysty.push(sty);
            const na = [...filterArraysty]
            setFilterArraysty(na);
            dispatch({
                type: actionTypes.SET_USE_FILTER_STY,
                useFilter_style: filterArraysty,
            });
        } else {
            const index = filterArraysty.findIndex(checkAge);

            function checkAge(age) {
                console.log(age)
                return age == sty;
            }
            if (index >= 0) {
                filterArraysty.splice(index, 1);
                const na = [...filterArraysty]
                setFilterArraysty(na)
                dispatch({
                    type: actionTypes.SET_USE_FILTER_STY,
                    useFilter_style: filterArraysty,
                });
            } else {
                console.warn(
                    `Cant remove product (id: ) as its not in basket!`
                )
            }
        }
    }

    // setting price range by user
    const price_range = (arr) => {
        dispatch({
            type: actionTypes.SET_USE_FILTER_PRICES,
            useFilter_price: arr,
        });
    }

    const applyFilter = () => {

    }
    return (

        <div className="filter">
            <div className='filter__slider'>
                <img onClick={show_slider} src={slider} alt="" />
                <img onClick={show_filter} src={filter} alt="" />
            </div>
            {(showslider || width > 900) && <> <div className="filter_top">
                <div className="filter__t1">
                    Sort By
                </div>
                <div className="filter__t2">
                    Reset
                </div>
            </div>
                <div className="images__list">
                    {/* <img src={group1} alt="" /> */}
                    <div className={active == 'a' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('a'); trendingPackage(); }}>
                        <img src={progress} alt="" />
                        <h6>Popularity</h6>
                        <p>popularity first</p>
                    </div>
                    <div className={active == 'b' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('b'); filter_by_price_inc() }}>
                        <img src={lowhigh} alt="" />
                        <h6>Price</h6>
                        <p>low to high</p>
                    </div>
                    <div className={active == 'c' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('c'); filter_by_price_desc() }}>
                        <img src={highlow} alt="" />
                        <h6>Price</h6>
                        <p>high to low</p>
                    </div>
                    <div className={active == 'd' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('d'); increasing_rating() }}>
                        <img src={star} alt="" />
                        <h6>Ratings</h6>
                        <p>Highest Ratings</p>
                    </div>
                </div>
            </>}
            {<>

                <div className={(showfilter || width > 900) ? "filter_top2" : ' filter_top2 filter_top2_left'}>

                    <div className="filter__two1">
                        Reset Filter
                    </div>

                    <div className="filter__two2 start_checkbox">
                        Select Filter
                    </div>
                    <div className="two_checkbox">
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <p>Trending Packages</p>
                        </div>
                        <div className='checkbox start_checkbox'>
                            <input type="checkbox" />
                            <p>Lightening Deals</p>
                        </div>
                    </div>
                    {/* Destinations */}

                    {/* Categories */}
                    <div className="two_checkbox">
                        <h6>Categories</h6>
                        {filterArraysty > 0 &&
                            <div className="show_filterArray">
                                {filterArraysty.map(arr => (
                                    <h5>
                                        {arr}
                                        {/* <img className='filter_Cross' src={cross} alt="" onClick={()=>remove_from_array(arr)}/> */}
                                    </h5>
                                ))}
                            </div>
                        }
                        {globalVariable?.Categories?.map((dest,index) => (
                            <div className='checkbox'>
                                <input type="checkbox" onClick={(e) => { check__checkBoxAct(e, dest,index) }} />
                                <p>{dest}</p>
                            </div>
                        ))}

                        <div className="loadMore">
                            Load More..
                        </div>
                    </div>
                    {/* Categories */}
                    <div className="two_checkbox">
                        <h6>Travel Style</h6>
                        {globalVariable?.Activities.map((sty) => (
                            <div className='checkbox'>
                                <input type="checkbox" onClick={(e) => check__checkBoxSty(e, sty)} />
                                <p>{sty}</p>
                            </div>
                        ))}
                        {/* <div className='checkbox'>
                            <input type="checkbox" />
                            <p>Friends</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <p>Family</p>
                        </div>
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <p>Couple</p>
                        </div> */}

                        <div className="loadMore">
                            Load More..
                        </div>
                    </div>

                    {/* Price Range */}
                    <div className="two_checkbox">
                        <h6>Price Range</h6>
                        <div className='checkbox'>
                            {filter_prices.length > 0 &&
                                <div className="show_filterArray">
                                    {filter_prices.map(arr => (
                                        <h5 className={useFilter_price === arr && 'dark_box'} onClick={() => price_range(arr)}>
                                            {arr}
                                        </h5>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <button onClick={applyFilter}>
                        Apply
                    </button>
                </div>
            </>
            }
        </div>
    )
}

export default Filter
