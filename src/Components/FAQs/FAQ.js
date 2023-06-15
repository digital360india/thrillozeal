import React from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import db from '../../firebase';
import { useEffect } from 'react';
import EachDay from '../Trek/EachDay';
import './FAQ.css';

const FAQ = (props) => {

  var { trek_id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    db.collection("Cities")
      .doc(props.location_id)
      .collection("All_Trek")
      .doc(trek_id)
      .collection('Faq')
      .orderBy('num',"asc")
      .onSnapshot((snapshot) => (
        setData(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })))
      ))
  }, [trek_id])

  return (
    <div className="Card-Wrapper">
      <h2 className='box-heading'>FAQs</h2>
        {data && data?.map((d,index) => (
          <div>
            <EachDay listStyle="faq__list" data={d?.data} expanded={index === 0 ? true : false} />
          </div>
        ))}
    </div>
  );
}
export default FAQ
//


// 
// No. of days - 3 days
// Difficulty level - moderate
// Total trekking distance - 5-6 km (one way)
// Total travelling distance - 235 km (one way)
// Average cost - INR 8,500 to 12,000
// Best time to visit - April to June (summers) and September to December (winters)
// Climate - average 14°C in summers and 5°C in winters
// Geolocation - Baniyakund, Chopta

