import React from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'

const EachDay = ({data}) => {
  return (
    <Accordion>
    <AccordionSummary
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>
        {data?.num ? data?.num: "Day "+data?.n} - {data?.dayHead?data?.dayHead:data?.ques}
      </Typography>
    </AccordionSummary>
    <AccordionDetails className="AccordionDetails">
      <ul style={{paddingLeft:'12px'}}>
        {
            data?.daydesc?.map((desc)=>(
                <li>{desc}</li>
            ))
        }
        {
            data?.desc?.map((desc)=>(
                <li>{desc}</li>
            ))
        }
      </ul>
    </AccordionDetails>
  </Accordion>
  )
}

export default EachDay