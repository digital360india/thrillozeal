import React from 'react'
import Slider from "react-slick";
import './Review.css'

const Review = () => {
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className="review-box">
        <h2>Reviews</h2>
        <div className="img-slider">
        <Slider {...settings}>
      <div>
         <img src="./Images/Group 29.png"></img>
      </div>
      <div>
      <img src="./Images/Group 29.png"></img>
      </div>
      <div>
      <img src="./Images/Group 29.png"></img>
      </div>
    
    </Slider>
    </div>
    </div>
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

      