import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './Review.css';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import db from '../firebase';
import firebase from "firebase";

const Review = (props) => {
  const [reviewFormData, setReviewFormData] = useState({name: "",email: "",mobile: "",experience_message:"",rating:0});
  const [starValue, setStarValue] = React.useState(0);
  const [messageToggle, setMessageToggle] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewFormData((prevReviewFormData) => ({ ...prevReviewFormData, [name]: value }));
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    var timestmp = firebase.firestore.FieldValue.serverTimestamp();
    if(reviewFormData.name === "" || reviewFormData.email === "" || reviewFormData.mobile === "" || reviewFormData.experience_message === ""){
      alert("Please fill all the fields");
      return;
    }
    db.collection('Cities').doc(props.city_id).collection('All_Trek').doc(props.trek_id).collection('Reviews').doc(reviewFormData.email,timestmp).set({
      name: reviewFormData.name,
      email: reviewFormData.email,
      mobile: reviewFormData.mobile,
      experience_message: reviewFormData.experience_message,
      rating: starValue,
      timestamp: timestmp,
      approved: false,
    });
    setReviewFormData({name: "",email: "",mobile: "",experience_message:"",rating:0});
    setMessageToggle(true);
    setInterval(()=>{setMessageToggle(false)}, 2000)

};

  const PersonReview = () => {
    return (
      <div className="person__div_container">
        <div className="person__left_div">
          <img className='person__img' src="/Images/Ellipse 31.png" alt=""></img>
        </div>
        <div className="person__right_div">
          <h3 className='person__name'>Karan Godara</h3>
          <Rating className='person__star_review' name="read-only" value="4" readOnly/>
          <p className='person__text_review'>Thank you thrillozeal for organizing such a great trip! I had a lot of fun with everyone and also made a few friends.</p>
        </div>
      </div>
    );
  }
  return (
    <>
    <div className="Card-Wrapper">
      <h2 className=" box-heading">Reviews </h2>
      <PersonReview/>
      <PersonReview/>
    </div>
    <div className='Card-Wrapper'>
      <h2 className=" box-heading">Submit Review </h2>
      <div className="review_form">
      <div className="review_div_form">

      <input type="text" id="name" name="name" value={reviewFormData.name} onChange={handleChange} placeholder="Full Name*" required></input>
      <input type="text" id="mobile" name="mobile" value={reviewFormData.mobile} onChange={handleChange} placeholder="Mobile Number*" required></input>
      <input type="email" id="email" name="email" value={reviewFormData.email} onChange={handleChange} placeholder="Email Id*" required></input>
        <textarea name="experience_message" placeholder="Share details of your personal experience of this package."
            id="standard-multiline-flexible" cols="200" rows="10" onChange={handleChange} value={reviewFormData.experience_message}></textarea>
        <div className='star__rating' >
        <Rating name="simple-controlled" value={starValue} onChange={(event, newValue) => { setStarValue(newValue); }}/>
        </div>
        {messageToggle && <span className="thankyou__span">Thank you for sharing your Experience!</span>}
        <input type="submit" name="submit" value="Send" onClick={handleSubmit}></input>
     </div>
      </div>
    </div>
    </>
  );
}


export default Review