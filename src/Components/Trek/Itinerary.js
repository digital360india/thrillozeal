import React from "react";
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'
const Itinerary = () => {
  return (
    <div className="Card-Wrapper">
      <h2 className=" box-heading">Trek Itinerary </h2>
    <div className="Accordian-Wrapper">
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Day 1 - Delhi to Baniyakund, Chopta (430 km/11 hrs)
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <ul>
            <li>We'll begin our journey at 6 a.m from Delhi.</li>
            <li>
              Considering the meal breaks, it'll take around 11 hours to reach
              Chopta covering a distance of about 430 km.
            </li>
            <li>
              We'll have our overnight at Baniyakund in Chopta either at a
              lodging facility or a campsite, depending on your tour package.
            </li>
            <li>
              En route to Chopta from Delhi, we'll pass Devprayag, Srinagar,
              Rudraprayag, and Ukhimath.
            </li>
             
            <li>
              We'll make a small halt at Devprayag to witness the beauty of
              Alaknanda and Bhagirathi streams when they confluence to become
              Ganga.
            </li>
            <li>
              {" "}
              By 5 in the evening, we'll reach Baniyakund and relax there with
              the overnight stay.
            </li>
          </ul>

          <div className="image-box">
              <img src="./Images/Rectangle 65.png"></img>
              <img src="./Images/Rectangle 66.png"></img>
              <img src="./Images/Rectangle 67.png"></img>
              <img src="./Images/Rectangle 68.png"></img>
              
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Day 2 - Chopta to Tungnath to Chopta (5 km/5-6 hrs - one way)</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
            The trek to Tungnath from Chopta is about 5 km and will take around 5-6 hours to reach the temple. We'll begin trekking Chopta by early morning 7 a.m.

            </li>
            <li>Upon reaching the temple, you can offer your prayers to the Lord.
</li>
            <li>
            Then we'll continue ascending towards the peak of Chandrashila. The complete one-way trek will end in a max of 6 hours, so we'll have a good amount of time to explore the summit of Chandrashila.

            </li>
            <li>
            After that, we'll come back to Chopta by descending through the same route.

            </li>
             
            <li>
            After that, we'll come back to Chopta by descending through the same route.

            </li>
            <li>
            In Chopta, we'll have another night's stay at the same facility we stayed the first night.
            </li>
          </ul>

          <div className="image-box">
              <img src="./Images/Rectangle 74.png"></img>
              <img src="./Images/Rectangle 75.png"></img>
              <img src="./Images/Rectangle 76.png"></img>
              <img src="./Images/Rectangle 89.png"></img>
          </div>


        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         <Typography> Day 3 - Chopta to Haridwar (230 km/8 hrs)
</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
             On our third day, we'll begin our return journey to Delhi by 7 am in the morning after having our breakfast.


            </li>
            <li>Following 11 hours of drive and meal breaks, we'll reach Delhi by 6 pm in the evening, where our tour will officially end.

</li>
</ul>
          <div className="image-box">
              <img src="./Images/Rectangle 3.png"></img>
              <img src="./Images/Rectangle 4.png"></img>
              <img src="./Images/Rectangle 5.png"></img>
              <img src="./Images/Rectangle 6.png"></img>
            
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className="not-mobile">
        <AccordionSummary
        
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         <Typography> Day 4 -  Kedar Kharak to Kedar tal (Trek 10kms- Two Way Total)
</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
            Start next day early morning towards the heavenly kedartal after having a hearty meal. 


            </li>
            <li>The trail is small rivers and is rocky, keep following the markings to ensure that you are on the right path.

</li>
          <li>
          You will reach kedartal which is 4780 m above the sea level.
          </li>
          <li>Explore the area and the Kedartal lake and then head back towards your campsite.</li>
</ul>
          <div className="image-box">
              <img src="./Images/Rectangle 3.png"></img>
              <img src="./Images/Rectangle 4.png"></img>
              <img src="./Images/Rectangle 5.png"></img>
              <img src="./Images/Rectangle 6.png"></img>
            
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className="not-mobile">
        <AccordionSummary
        
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         <Typography>Day 5 - Kedar Kharak to Gangotri (Trek 19kms- One way)
</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
            Bid adeiu to this beautiful trek and start your return journey towards gangotri.


            </li>
            <li>Ascend down to the gangotri region with a long downward trek of 7-8 hrs.

</li>
          <li>Enjoy the return trek consisting of beautiful views and trails.</li>
          <li>Come back to gagotri, rest and call it a day.</li>
</ul>
          <div className="image-box">
              <img src="./Images/Rectangle 3.png"></img>
              <img src="./Images/Rectangle 4.png"></img>
              <img src="./Images/Rectangle 5.png"></img>
              <img src="./Images/Rectangle 6.png"></img>
            
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className="not-mobile">
        <AccordionSummary
        
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         <Typography> Day 6  - Gangotri To Harsil and back to Doon (250 kms - 12/14 Hours)
</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
            On our final day we will start early and reach Harsil valley, which is located at a distance of 26 kms from Gangotri.


            </li>
            <li>Explore the beautiful Harsil Valley.

</li>
            <li>We will also visit the Gartang Gali which is a famous spot opened in 2021 for the tourists. It is located at a distance of 20 kms from Harsil.</li>

            <li>Finally in the afternoon we will start our return journey to Dehradun.</li>
            <li>This magical trek and trip has finally come to an end</li>
</ul>
          <div className="image-box">
              <img src="./Images/Rectangle 3.png"></img>
              <img src="./Images/Rectangle 4.png"></img>
              <img src="./Images/Rectangle 5.png"></img>
              <img src="./Images/Rectangle 6.png"></img>
            
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
        
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> Additional Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul>

            <li>
            Note:

            </li>
            <li>Google maps provide a wrong location to Chopta that is extremely close to Rudraprayag and about 57 km away from Sari. The Chopta mentioned in our itinerary lies on the route to Tungnath.

</li>
            <li>
             All timings are subject to changes as per the ongoing Covid restrictions.

            </li>
            <li>
            Meal details

            </li>
             
            <li>
            Breakfast - tea/coffee, paratha, toast, sandwich (depending on availability).


            </li>
            <li>
            Lunch - roti with vegetable, paratha, dal &amp; rice, achar, salad, sweet.
            </li>
            <li>

            Dinner - rice &amp; gravy, roti/paratha, achar, salad, sweet.

            </li>
            <li> Snacks - tea/coffee, biscuits, sandwiches.
</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};

export default Itinerary;
