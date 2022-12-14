import React from 'react';
import "./ExploreCities.css";

function ExploreCities() {
    return (
        <div className='ExploreCities'>
            <div className="second_header">
                <img src='/Images/progess.png' alt="" />
                Explore By Cities
            </div>
            <div className="ExploreCities_sec">
                <div className="ExploreCities_rowone">
                    <div className='ExploreCities_imgrow'>
                        <div className="hexa_div">
                            <img className='hexa_div_img' src="/Images/Polygon 1.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Rishikesh</p>
                            </div>
                        </div>
                        <div className="hexa_div">
                            <img className='hexa_div_img' src="/Images/Polygon 2.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Nainital</p>
                            </div>
                        </div>
                        <div className="hexa_div">
                            <img className='hexa_div_img' src="/Images/Polygon 3.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Haridwar</p>
                            </div>
                        </div>
                    </div>
                    <div className='ExploreCities_imgrow ExploreCities_imgrow2'>
                        <div className="hexa_div">
                            <img className='hexa_div_img' src="/Images/Polygon 4.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Mussoorie</p>
                            </div>
                        </div>
                        <div className="hexa_div img_for_mobile_explore">
                            <img className='hexa_div_img' src="/Images/Polygon 5.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Tehri</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ExploreCities_rowtwo">
                    <div className="hexa_div">
                        <img className='hexa_div_img' src="/Images/Polygon 6.png" alt="" />
                        <div className='hexa_div_p'>
                            <p >Uttarkashi</p>
                        </div>
                    </div><div className="hexa_div">
                        <img className='hexa_div_img' src="/Images/Polygon 7.png" alt="" />
                        <div className='hexa_div_p'>
                            <p >Pithoragarh</p>
                        </div>
                    </div><div className="hexa_div">
                        <img className='hexa_div_img' src="/Images/Polygon 5.png" alt="" />
                        <div className='hexa_div_p'>
                            <p >Pithoragarh</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ExploreCities;