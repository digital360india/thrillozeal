// {<div className="two_checkbox">
// <h6>Destinations</h6>
// {filterArrayloc.length > 0 &&
//     <div className="show_filterArray">
//         {filterArrayloc.map(arr => (
//             <h5>
//                 {arr}
//                 {/* <img className='filter_Cross' src={cross} alt="" onClick={()=>remove_from_array(arr)}/> */}
//             </h5>
//         ))}
//     </div>
// }
// {text.map((dest) => (
//     <div className='checkbox'>
//         <input type="checkbox" onClick={(e) => { check__checkBoxLoc(e, dest) }} />
//         <p>{dest}</p>
//     </div>
// ))}

// <div className="loadMore">
//     Load More..
// </div>
// </div>}
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

function Filter() {
    
  
    const [{ locations,activities,filter_prices}, dispatch] = useStateValue();
    
    const [showslider, setShowslider] = useState(false);
    const [showfilter, setShowfilter] = useState(false);
    const [width, setWidth] = useState(window.screen.width);
    // const [filterArrayloc, setFilterArrayloc] = useState([]);
    const [filterArrayact, setFilterArrayact] = useState([]);
    const [filterArraysty, setFilterArraysty] = useState([]);
    const [filterArraypri, setFilterArraypri] = useState('All price range');

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

    const check__checkBoxAct = (e, dest) => {
        const checked = e.target.checked;

        if (checked) {
            filterArrayact.push(dest);
            const na = [...filterArrayact]
            setFilterArrayact(na);
            dispatch({
                type: actionTypes.SET_USE_FILTER_ACT,
                useFilter_act: filterArrayact,
              });
        } else {
            const index = filterArrayact.findIndex(checkAge);

            function checkAge(age) {
                console.log(age)
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
            } else {
                console.warn(
                    `Cant remove product (id: ) as its not in basket!`
                )
            }
        }
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
                    <div className='filter_image__div'>
                        <img src={progress} alt="" />
                        <h6>Popularity</h6>
                        <p>popularity first</p>
                    </div>
                    <div className='filter_image__div'>
                        <img src={lowhigh} alt="" />
                        <h6>Price</h6>
                        <p>low to high</p>
                    </div>
                    <div className='filter_image__div'>
                        <img src={highlow} alt="" />
                        <h6>Price</h6>
                        <p>high to low</p>
                    </div>
                    <div className='filter_image__div'>
                        <img src={star} alt="" />
                        <h6>Ratings</h6>
                        <p>Highest Ratings</p>
                    </div>
                </div>
            </>}
            {(showfilter || width > 900) && <>

                <div className="filter_top2">

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
                        {filterArrayact.length > 0 &&
                            <div className="show_filterArray">
                                {filterArrayact.map(arr => (
                                    <h5>
                                        {arr}
                                        {/* <img className='filter_Cross' src={cross} alt="" onClick={()=>remove_from_array(arr)}/> */}
                                    </h5>
                                ))}
                            </div>
                        }
                        {activities.map((dest) => (
                            <div className='checkbox'>
                                <input type="checkbox" onClick={(e) => { check__checkBoxAct(e, dest) }} />
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
                        <div className='checkbox'>
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
                        </div>

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
                                            <h5 className={filterArraypri === arr &&'dark_box'} onClick={() => { setFilterArraypri(arr) }}>
                                                {arr}
                                            </h5>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div></>}
        </div>
    )
}

export default Filter
