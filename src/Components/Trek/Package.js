import React from 'react'
import styled from 'styled-components'


const Package = () => {
  return (
    <div>
      <Heading1>Package Options</Heading1>
      <CardContain>
        <label className='container'>
        <input type="radio" name="same-name"></input>
        <span class="checkmark"></span>
        </label>
          <BorderCard>
            <Heading>
            Gangotri- Kedartal- Harsil Valley Trek Package
            </Heading>
            <Description><b>Dehradun to Dehradun</b> (Pickup and drop at Dehradun)</Description>
            <PackageInc>
              <p>Package Includes:</p>
              <div className="img_logo">
              <img src="/Images/Fast Food.png"></img>
              <img src="/Images/London Cab.png"></img>
              <img src="/Images/Hotel Door.png"></img>
              <img src="/Images/3D Glasses.png"></img>
              <img src="/Images/Fire.png"></img>
              <img src="/Images/Kayaking.png"></img>
              </div>
              <div className="icons-row">
              <div className="target-wrap">
              <img src="/Images/Fast Food.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Kayaking.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Hotel Door.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/3D Glasses.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Fire.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/London Cab.png"></img>
              </div>
              </div>
            </PackageInc>
           
            <Position>
              <p>NOW AT <s>6999/-</s></p>
              <p><span>4999/-</span> per person</p>
            </Position>
          </BorderCard>
        
      </CardContain>  

      <CardContain>
        <label className='container'>
        <input type="radio" name="same-name"></input>
        <span class="checkmark"></span>
        </label>
          <BorderCard>
            <Heading>
            Gangotri- Kedartal- Harsil Valley Trek Package
            </Heading>
            <Description><b>Dehradun to Dehradun</b> (Pickup and drop at Dehradun)</Description>
            <PackageInc>
              <p>Package Includes:</p>
              <div className="img_logo">
              <img src="/Images/Fast Food.png"></img>
              <img src="/Images/London Cab.png"></img>
              <img src="/Images/Hotel Door.png"></img>
              <img src="/Images/3D Glasses.png"></img>
              <img src="/Images/Fire.png"></img>
              <img src="/Images/Kayaking.png"></img>
              </div>
              <div className="icons-row">
              <div className="target-wrap">
              <img src="/Images/Fast Food.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Kayaking.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Hotel Door.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/3D Glasses.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/Fire.png"></img>
              </div>
              <div className="target-wrap">
              <img src="/Images/London Cab.png"></img>
              </div>
              </div>
            </PackageInc>
           
            <Position>
              <p>NOW AT <s>6999/-</s></p>
              <p><span>4999/-</span> per person</p>
            </Position>
          </BorderCard>
        
      </CardContain>  
    </div>
  )
}

const Heading1=styled.h1`

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 34px;

color: #57BEBE;
padding-left:15px;
padding-bottom:15px;


`

const CardContain=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:baseline;
padding: 15px 0;
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #57BEBE;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

input[type="radio"]{

}
`
const BorderCard=styled.div`
margin-left:20px;
position:relative;
width:783px;
height:187px;
padding:20px;

background: rgba(255, 252, 228, 0.3);
border: 2px solid #57BEBE;
border-radius: 30px;

@media (max-width:600px){
width: 85%;;
height: 368px;

background: rgba(255, 252, 228, 0.3);
border: 2px solid #57BEBE;
border-radius: 30px;
margin-left:0;
}
`

const Heading=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
/* identical to box height */
color: #57BEBE;
@media (max-width:600px)
{

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

color: #57BEBE;
}
`
const Description=styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;

color: rgba(0, 0, 0, 0.55);

`
const PackageInc=styled.div`
margin-top:60px;

p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;

color: #57BEBE;

@media (max-width:600px){
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
margin-top:120px;
color: #57BEBE;

}


}
.img_logo{
  display:flex;
  
  align-items:center;
}
.img_logo img{
  padding:8px;
}
.icons-row{
  display: none;
}
@media (max-width:600px){
  .icons-row{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

.img_logo{
  display:none;
}
`
const Position=styled.div`
position:absolute;
right: 0px;
    top: 126px;
width:30%;

@media (max-width:600px)
{
  left:25px;
  width:80%;

  

}

span{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */


color: #57BEBE;
}

s{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-decoration-line: line-through;

color: rgba(0, 0, 0, 0.55);

}


`


export default Package