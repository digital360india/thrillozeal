import React from 'react';
import Slider from "react-slick";
import './Review.css';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const Review = () => {
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
  const [value, setValue] = React.useState(0);
  return (
    <>
    <div className="Card-Wrapper">
      <h2 className=" box-heading">Reviews </h2>
      <PersonReview/>
      <PersonReview/>
      {/* <div className="Accordian-Wrapper">
      <EachDay listStyle="itineray__list" expanded="true" data={{n:1, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
      <EachDay listStyle="itineray__list" data={{n:2, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
      <EachDay listStyle="itineray__list" data={{num:3, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
        {data && data?.map((d, index) => (
          // <ShowDay data={d}/>
          <div>
            <EachDay listStyle="itineray__list" expanded={index === 0 ? "true" : "false"}  data={d?.data} />
          </div>
        ))}
      </div> */}
    </div>
    <div className='Card-Wrapper'>
      <h2 className=" box-heading">Submit Review </h2>
      <div className="review_form">
      <div className="review_div_form">

      <input type="text" name="input" placeholder="Full Name*"></input>
        <input type="text" name="mobile" placeholder="Mobile Number*"></input>
        <input type="email" name="input" placeholder="Email Id*"></input>
        <textarea name="Text1" placeholder="Share details of your personal experience of this package."
            id="standard-multiline-flexible" cols="200" rows="10"></textarea>
        <div className='star__rating' >
        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }}/>
        </div>
        <input type="submit" name="submit" value="Send"></input>
     </div>
      </div>
    </div>
    </>
  );
}


export default Review


// <div className="blue1"> <img src="./Images/Vector 5.svg"></img></div>
//         <div className="yellow1"><img src="./Images/Vector 2.svg"></img></div>
//         <div className="review1"><img src="./Images/Ellipse 31.png"></img>
//         <p>Thank you thrillozeal for organizing such a great trip! I had a lot of fun with everyone and also made a few friends.</p>
//         <p>-Karan Godara</p>
//         <p>22nd Jan, 2022</p>
//         </div>
        
//       </div>
//       <div>
//         <div className="blue2">
//         <img src="./Images/Vector 4.svg"></img></div>
//         <div className="review2">
//             <img src="./Images/Ellipse 32.png"></img>
//             <p>Awesome blossom and a lot of fun! Had an amazing experienve.
// Auli is truly a heavenly place, full of snow and surrounded by enchanting mountains. A must visit!</p>
//             <p>-Noushin Aslam</p>
//             <p>15th Jan, 2022</p>
//         </div>
//       </div>
//       <div>
//       <img src="./Images/Vector 6.png"></img>
//       <img src="./Images/Vector 3.png"></img>
//       <div className="review3">
//             <img src="./Images/Ellipse 33.png"></img>
//             <p>One of the best trips of my life! Had loads of fun. The arrangements were smooth and we did not have to worry about anything!</p>
//             <p>-Shalini Bisht</p>
//             <p>10th Feb, 2022</p>
//         </div>

      