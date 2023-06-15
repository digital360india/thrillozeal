import React, { useEffect, useState } from "react";
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'
import { useParams } from "react-router-dom";
import db from "../../firebase";
import EachDay from "./EachDay";

const Itinerary = (props) => {

  var { trek_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    db.collection("Cities")
      .doc(props.location_id)
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
  }, [props.location_id,trek_id])
  console.log("data", data)

  return (
    <div className="Card-Wrapper">
      <h2 className=" box-heading">Trek Itinerary </h2>
      <div className="Accordian-Wrapper">
        {data && data?.map((d, index) => (
          <div>
            <EachDay listStyle="itineray__list" expanded={index === 0 ? true : false}  data={d?.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
