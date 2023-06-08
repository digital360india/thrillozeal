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
import { useParams } from 'react-router-dom';
import db from '../../firebase';

function Filter({ data, data_Filtered, setData_Filtered, activity }) {
    var { location, activity, styles } = useParams();
    const [active, setActive] = useState(' ');

    const [{ globalVariable, Travel_Style, filter_prices, useFilter_price }, dispatch] = useStateValue();
    const [showslider, setShowslider] = useState(false);
    const [showfilter, setShowfilter] = useState(false);
    const [width, setWidth] = useState(window.screen.width);
    const [filterArrayact, setFilterArrayact] = useState([]);
    const [useFilter_act, setuseFilter_act] = useState('')
    const [filterArraycate, setFilterArraycate] = useState([]);
    const [useFilter_cate, setuseFilter_cate] = useState('');

    useEffect(() => {

        if (globalVariable?.Activities) {
            if (activity == "All_Activities" || !activity) {
                // setFilterArrayact([...Object.values(globalVariable.Activities)]);
                // setuseFilter_act(
                //     globalVariable.Activities && Object.keys(globalVariable.Activities).find(key => globalVariable.Activities[key])
                // );
            } else {
                setFilterArrayact([activity]);
                console.log(filterArrayact)
                setuseFilter_act(
                    globalVariable.Activities && Object.keys(globalVariable.Activities).find(key => globalVariable.Activities[key] === activity)
                );
            }
            if (styles == "All_Styles" || !styles) {
                // setFilterArraycate([...Object.values(globalVariable.Categories)]);
                // setuseFilter_cate(
                //     globalVariable.Categories && Object.keys(globalVariable.Categories).find(key => globalVariable.Categories[key])
                // );
            } else {
                setFilterArraycate([styles]);
                setuseFilter_cate(
                    globalVariable.Categories && Object.keys(globalVariable.Categories).find(key => globalVariable.Categories[key] === styles)
                );
            }

        }
    }, [activity, globalVariable?.Activities]);

    const trendingPackage = (trek) => {
        return trek?.trek_data?.packagetype === "Trending";
    }
    const filter_by_price_inc = (a, b) => {
        return a?.trek_data?.price - b?.trek_data?.price;
    }
    const filter_by_price_desc = (a, b) => {
        return b?.trek_data?.price - a?.trek_data?.price;
    }
    const increasing_rating = (a, b) => {
        return b?.trek_data?.review - a?.trek_data?.review;
    }

    const show_slider = () => {
        setShowslider(!showslider);
    }

    const show_filter = () => {
        setShowfilter(!showfilter);
    }

    const check__checkBoxAct = (e, dest, val) => {
        const checked = e.target.checked;
        if (checked) {
            filterArrayact.push(dest);
            const na = [...filterArrayact]
            setuseFilter_act(prev => prev + val)
            console.log(useFilter_act)
        } else {
            const ind = useFilter_act.indexOf(val);
            setuseFilter_act(useFilter_act.slice(0, ind) + useFilter_act.slice(ind + 1));

            const index = filterArrayact.findIndex(checkAge);
            function checkAge(age) {
                return age == dest;
            }
            if (index >= 0) {
                filterArrayact.splice(index, 1);
                const na = [...filterArrayact]
                setFilterArrayact(na)
            }
        }
    }

    const check__checkBoxCate = (e, dest, val) => {

        const checked = e.target.checked;
        if (checked) {
            filterArraycate.push(dest);
            const na = [...filterArraycate]
            setuseFilter_cate(prev => prev + val)
            setFilterArraycate(na);
        } else {
            const ind = useFilter_cate.indexOf(val);
            setuseFilter_cate(useFilter_cate.slice(0, ind) + useFilter_cate.slice(ind + 1));

            const index = filterArraycate.findIndex(checkAge);

            function checkAge(age) {
                return age == dest;
            }

            if (index >= 0) {
                filterArraycate.splice(index, 1);
                const na = [...filterArraycate]
                setFilterArraycate(na)
            }
        }
    }

    const price_range = (arr) => {
        dispatch({
            type: actionTypes.SET_USE_FILTER_PRICES,
            useFilter_price: arr,
        });
    }

    const filter_by_categories = (trek) => {
        if (useFilter_cate == "" && styles == "All_Styles") {
            return true;
        }
        return trek?.trek_data?.categories ? trek?.trek_data?.categories?.toLowerCase().includes(useFilter_cate.split("").sort().join("")): true;
    }

    const filter_by_activities = (trek) => {
        if (useFilter_act == "" && activity == "All_Activities") {
            return true;
        }
        return trek?.trek_data?.activities ? trek?.trek_data?.activities?.toLowerCase()?.includes(useFilter_act.split("").sort().join("")):true;
    }

    const allFilter = (trek) => {
        return filter_by_activities(trek) && filter_by_categories(trek);
    }

    const applyFilter = (chr) => {

        console.log("", chr, "useFilter_cate.split", useFilter_cate.split("").sort().join(""), useFilter_act.split("").sort().join(""))

        var temp = data;

        if (chr == 'a') {

            setData_Filtered(data.filter((trek) => {
                return allFilter(trek) && trendingPackage(trek);
            }))

        } else if (chr == 'b') {

            setData_Filtered(data.filter((trek) => {
                return allFilter(trek);
            }).sort((a, b) => filter_by_price_inc(a, b)));

        } else if (chr == 'c') {

            setData_Filtered(data.filter((trek) => {
                return allFilter(trek);
            }).sort((a, b) => filter_by_price_desc(a, b)));

        } else if (chr == 'd') {

            setData_Filtered(data.filter((trek) => {
                return allFilter(trek);
            }).sort((a, b) => increasing_rating(a, b)))
        }else{
            setData_Filtered(data?.length>0 &&  data.filter((trek) => {
                return allFilter(trek);
            }))
        }
    }
    
    useEffect(() => {
        // console.log('first',useFilter_act,useFilter_cate)
        applyFilter(active ? active:'e');
    }, [useFilter_act, useFilter_cate]);

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
                    <div className={active == 'a' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('a'); applyFilter('a'); }}>
                        <img src={progress} alt="" />
                        <h6>Popularity</h6>
                        <p>popularity first</p>
                    </div>
                    <div className={active == 'b' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('b'); applyFilter('b') }}>
                        <img src={lowhigh} alt="" />
                        <h6>Price</h6>
                        <p>low to high</p>
                    </div>
                    <div className={active == 'c' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('c'); applyFilter('c') }}>
                        <img src={highlow} alt="" />
                        <h6>Price</h6>
                        <p>high to low</p>
                    </div>
                    <div className={active == 'd' ? 'filter_image__div filter_image__active' : 'filter_image__div'} onClick={() => { setActive('d'); applyFilter('d') }}>
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
                        {filterArraycate.length > 0 &&
                            <div className="show_filterArray">
                                {filterArraycate.map(arr => (
                                    <h5>
                                        {arr}
                                    </h5>
                                ))}
                            </div>
                        }
                        {globalVariable?.Categories && Object.entries(globalVariable?.Categories)?.map((dest) => (
                            <div className='checkbox'>
                                <input type="checkbox" checked={filterArraycate?.length>0 && filterArraycate.filter((data) => {
                                    return data.includes(dest[1])}).length>0} onClick={(e) => { check__checkBoxCate(e, dest[1], dest[0]) }} />
                                <p>{dest[1]}</p>
                            </div>
                        ))} */}

                        {/* <div className="loadMore">
                            Load More..
                        </div> */}
                    </div>
                    {/* Categories */}
                    <div className="two_checkbox">
                        <h6>Travel Style</h6>
                        {filterArrayact.length > 0 &&
                            <div className="show_filterArray">
                                {filterArrayact.map(arr => (
                                    <h5>
                                        {arr}
                                    </h5>
                                ))}
                            </div>
                        }
                        {globalVariable?.Activities && Object.entries(globalVariable?.Activities)?.map((sty) => (
                            <div className='checkbox'>
                                <input type="checkbox" checked={filterArrayact?.length>0 && filterArrayact.filter((data) => {
                                    return data.includes(sty[1]);
                                }).length > 0} onClick={(e) => check__checkBoxAct(e, sty[1], sty[0])} />
                                <p>{sty[1]}</p>
                            </div>
                        ))}
                    </div>

                    {/* Price Range */}
                    <div className="two_checkbox">
                        <h6>Price Range</h6>
                        <div className='checkbox'>
                            {filter_prices.length > 0 &&
                                <div className="show_filterArray">
                                    {filter_prices.map(arr => (
                                        <h5 className={useFilter_price === arr ? 'dark_box' : 'Not_dark_box'} onClick={() => price_range(arr)}>
                                            {arr}
                                        </h5>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default Filter
