import React from 'react';
import "./ExploreCities.css";
import { useHistory } from "react-router-dom"

function ExploreCities() {

    const history = useHistory();

    const goToLocation = (location) => {
        history.push(`/${location}`)
    }

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
                            <div onClick={() => goToLocation("rishikesh")}>
                                <img className='hexa_div_img' src="/Images/Polygon 1.png" alt="" />
                                <div className='hexa_div_p'>
                                    <p>Rishikesh</p>
                                </div>
                            </div>
                        </div>
                        <div className="hexa_div">
                            <div onClick={() => goToLocation("nainital")}>
                                <img className='hexa_div_img' src="/Images/Polygon 2.png" alt="" />
                                <div className='hexa_div_p'>
                                    <p >Nainital</p>
                                </div>
                            </div>
                        </div>
                        <div className="hexa_div">
                            <div onClick={() => goToLocation("haridwar")}>
                                <img className='hexa_div_img' src="/Images/Polygon 3.png" alt="" />
                                <div className='hexa_div_p'>
                                    <p >Haridwar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ExploreCities_imgrow ExploreCities_imgrow2'>
                        <div className="hexa_div">
                            <div onClick={() => goToLocation("mussoorie")}>
                                <img className='hexa_div_img' src="/Images/Polygon 4.png" alt="" />
                                <div className='hexa_div_p'>
                                    <p >Mussoorie</p>
                                </div>
                            </div>
                        </div>
                        <div className="hexa_div img_for_mobile_explore">
                            <div onClick={() => goToLocation("pauri_garhwal")}>
                                <img className='hexa_div_img' src="/Images/Polygon 5.png" alt="" />
                                <div className='hexa_div_p'>
                                    <p >Pauri Garhwal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ExploreCities_rowtwo">
                    <div className="hexa_div">
                        <div onClick={() => goToLocation("dehradun")}>
                            <img className='hexa_div_img' src="/Images/Polygon 6.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Dehradun</p>
                            </div>
                        </div>
                    </div><div className="hexa_div">
                        <div onClick={() => goToLocation("pithoragarh")}>
                            <img className='hexa_div_img' src="/Images/Polygon 7.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Pithoragarh</p>
                            </div>
                        </div>
                    </div><div className="hexa_div">
                        <div onClick={() => goToLocation("almora")}>
                            <img className='hexa_div_img' src="/Images/Polygon 5.png" alt="" />
                            <div className='hexa_div_p'>
                                <p >Almora</p>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ExploreCities;