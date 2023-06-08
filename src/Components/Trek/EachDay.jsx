import React, { useEffect } from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'
import {ArrowForwardIosRounded as ArrowForwardIosRoundedIcon,
ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
const EachDay = ({ data,expanded,listStyle }) => {
  return (
    <Accordion defaultExpanded={expanded}>
      <AccordionSummary
      className='typography_header'
      expandIcon={<ExpandMoreIcon sx={{color:'#57BEBE'}} expanded="default" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="typography_header" sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '17px',
          lineHeight: '21px',
        }}>
          {data?.num ? data?.num : "Day " + data?.n + "-"} {data?.dayHead ? data?.dayHead : data?.ques}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        <ul className={listStyle}>
          {
            data?.daydesc?.map((desc) => (
              <li>{desc}</li>
            ))
          }
          {
            data?.desc?.map((desc) => (
              <li dangerouslySetInnerHTML={{__html: desc}}/>
            ))
          }
        </ul>
        <div className="eachday__gallery">
          <img src="/Images/sqImg2.png" alt="" />
          <img src="/Images/sqImg3.png" alt="" />
          <img src="/Images/sqImg4.png" alt="" />
          <img src="/Images/sqImg1.png" alt="" />
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default EachDay