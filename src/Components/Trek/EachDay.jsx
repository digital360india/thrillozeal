import React, { useEffect } from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Itinerary.css'
import {ArrowForwardIosRounded as ArrowForwardIosRoundedIcon,
ExpandMore as ExpandMoreIcon} from '@mui/icons-material';
const EachDay = ({ data,expanded,listStyle }) => {
  console.log("data:::",data)
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
          {data?.num ? data?.num+". " : "Day " + data?.n + "-"} {data?.dayHead ? data?.dayHead : data?.ques}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        <ul className={listStyle}>
          {
            data?.daydesc?.map((desc) => {
              if(desc != "")
                return(<li>{desc}</li>);
              
                return <></>
            })
          }
          {
            data?.desc?.map((desc) => (
              <li dangerouslySetInnerHTML={{__html: desc}}/>
            ))
          }
        </ul>
        <div className="eachday__gallery">
        <img src={data?.img} alt="" />
        <img src={data?.img1} alt="" />
        <img src={data?.img2} alt="" />
        <img src={data?.img3} alt="" />
          {/* { data?.dayImg?.map((img) =>{ 
            console.log(img)
            return(
          <img src={data?.img} alt="" />
          )})} */}
          {/* <img src="/Images/sqImg3.png" alt="" />
          <img src="/Images/sqImg4.png" alt="" />
          <img src="/Images/sqImg1.png" alt="" /> */}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default EachDay