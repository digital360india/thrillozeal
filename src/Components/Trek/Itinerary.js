import React, { useEffect, useState } from "react";
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'
import { useParams } from "react-router-dom";
import db from "../../firebase";
import EachDay from "./EachDay";

const Itinerary = () => {

  var { location_id, trek_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    db.collection("Cities")
      .doc(location_id)
      .collection("All_Trek")
      .doc(trek_id)
      .collection('Itinerary')
      .orderBy("n", "asc")
      .onSnapshot((snapshot) => (
        setData(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))
  }, [trek_id])
  console.log("data", data)

  return (
    <div className="Card-Wrapper">
      <h2 className=" box-heading">Trek Itinerary </h2>
      <div className="Accordian-Wrapper">
      <EachDay listStyle="itineray__list" expanded="true" data={{n:1, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", dayImg: ["/Images/sqImg2.png","/Images/sqImg3.png","/Images/sqImg4.png","/Images/sqImg1.png"], daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
      <EachDay listStyle="itineray__list" data={{n:2, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
      <EachDay listStyle="itineray__list" data={{num:3, dayHead: "Delhi to Baniyakund, Chopta (430 km/11 hrs)", daydesc : ["We'll begin our journey at 6 a.m from Delhi.","We'll have our overnight at Baniyakund in Chopta either at a lodging facility or a campsite, depending on your tour package.","En route to Chopta from Delhi, we'll pass Devprayag, Srinagar, Rudraprayag, and Ukhimath. We'll make a small halt at Devprayag to witness the beauty of Alaknanda and Bhagirathi streams when they confluence to become Ganga.","By 5 in the evening, we'll reach Baniyakund and relax there with the overnight stay."]}} />
        {data && data?.map((d, index) => (
          // <ShowDay data={d}/>
          <div>
            <EachDay listStyle="itineray__list" expanded={index === 0 ? "true" : "false"}  data={d?.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
