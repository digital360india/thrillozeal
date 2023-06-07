import React from "react";
import "./Nainital_Card.css";
import fastfood from "../img/Fast Food.png";
import London from "../img/London Cab.png";
import Hotel from "../img/Hotel Door.png";
import threeD from "../img/3D Glasses.png";
import more from "../img/Plus Math.png";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import imgmore from "../img/img_more.png";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Card({ data }) {
  const { location } = useParams();
  const history = useHistory();
  // console.log("data", data?.data);
  return (
    <div
      className="nainital__card"
      onClick={() =>
        history.push(`/${location}/${data?.id}`)
      }
    >
      <div className="card__c1">
        <div className="top__img_c1">
          {data?.trek_data?.img ? (
            <img
              style={{ width: "320px", borderRadius: "20px",height:"180px" }}
              src={data?.trek_data?.img}
              alt=""
            />
          ) : (
            <img src={img1} alt="" />
          )}
        </div>
        <div className="bott__img_c1">
          {data?.trek_data?.img1 ? (
            <img
              style={{ width: "100px", height: "80px",paddingTop:"4px", borderRadius: "20px" }}
              src={data?.trek_data?.img1}
              alt=""
            />
          ) : (
            <img src={img2} alt="" />
          )}
          {data?.trek_data?.img2 ? (
            <img
              style={{ width: "100px", height: "80px",paddingTop:"4px", borderRadius: "20px" , marginLeft:"2px" , marginRight:"2px"}}
              src={data?.trek_data?.img2}
              alt=""
            />
          ) : (
            <img
              style={{ width: "100px ", height: "80px",paddingTop:"4px", borderRadius: "20px" }}
              src={img3}
              alt=""
            />
          )}


          {/* <img src={imgmore} alt="" /> */}
          {data?.trek_data?.img3 ? (
            <img
              style={{ width: "100px", height: "80px",paddingTop:"4px", borderRadius: "20px" , marginLeft:"2px" , marginRight:"2px"}}
              src={data?.trek_data?.img3}
              alt=""
            />
          ) : (
            <img
              style={{ width: "100px ", height: "80px",paddingTop:"4px", borderRadius: "20px" }}
              src={imgmore}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="card__c2">
        <div class="card__c2_head">{data?.trek_data?.name}</div>
        <div className="card__c2_body">
          <div className="card__c2_innner">
            <img src="./Images/clock.png"></img>
            <div className="c2__text">{data?.trek_data?.day}D/{data?.trek_data?.night}N</div>
          </div>
          <div className="card__c2_innner">
            <img src="./Images/map-pin.png"></img>
            <div className="c2__text">{data?.trek_data?.location}</div>
          </div>
          <br />
          <div className="card__c2_innner card__c2_innner2">
            <div className="naini__stars">
              <img src="./Images/Group 4.png"></img>
              <p>based on {data?.trek_data?.reviewNo} reviews</p>
            </div>
            <div className="naini__rating">
              <p>{data?.trek_data?.review}</p>
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
            Starting from <span>INR {data?.trek_data?.pricecross}</span>
          </div>
          <div className="pricing2">
            INR {data?.trek_data?.price}
            <span>per adult</span>
          </div>
        </div>
        <div className="naini__bottons">
          <button>Send Enquiry</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
