import React from 'react';
import './Nainital_Card.css';
import fastfood from '../img/Fast Food.png'
import London from '../img/London Cab.png';
import Hotel from '../img/Hotel Door.png';
import threeD from '../img/3D Glasses.png';
import more from '../img/Plus Math.png';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import imgmore from '../img/img_more.png';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Card({data}) {
    const {location}=useParams()
    const history=useHistory();
    console.log("data",data?.data)
    return (
        <div className="nainital__card" onClick={()=>history.push(`/${location}/${data?.data?.Name}/${data?.data?.price}`)}>
            <div className="card__c1">
                <div className="top__img_c1">
                    <img src={img1} alt="" />
                </div>
                <div className="bott__img_c1">
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={imgmore} alt="" />
                </div>
            </div>
            <div className="card__c2">
                <div class="card__c2_head">
                {data?.data?.Name}
                </div>
                <div className="card__c2_body">
                    <div className="card__c2_innner">
                        <img src="./Images/clock.png"></img>
                        <div className="c2__text">5D/6N</div>
                    </div>
                    <div className="card__c2_innner">
                        <img src="./Images/map-pin.png"></img>
                        <div className="c2__text">Chamoli,UK</div>
                    </div>
                    <br/>
                    <div className="card__c2_innner card__c2_innner2">
                        <div className="naini__stars">
                            <img src="./Images/Group 4.png"></img>
                            <p>based on 78 reviews</p>
                        </div>
                        <div className="naini__rating">
                            <p>4.5</p>
                        </div>
                    </div>
                </div>
                <div className="naini__icons_collection">
                    <div className="naini__icons">
                    <img src={fastfood} />
                    <p>Meals</p>
                    </div>
                    <div className="naini__icons">
                    <img src={London} />
                    <p>Transportation</p>
                    </div>
                    <div className="naini__icons">
                    <img src={Hotel} />
                    <p>Hotel</p>
                    </div>
                    <div className="naini__icons">
                    <img src={threeD} />
                    <p>Sight- seeing</p>
                    </div>
                    <div className="naini__icons">
                    <img src={more} />
                    <p>More</p>
                    </div>
                </div>
                <div className="nain__pricing">
                    <div className="pricing1">
                    Starting from <span>INR 10500</span>
                    </div>
                    <div className="pricing2">
                    INR 8,999 
                     <span>per adult</span>
                    </div>
                </div>
                <div className="naini__bottons">
                    <button>Send Enquiry</button>
                    <button>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card