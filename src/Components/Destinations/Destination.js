import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Destination.css';
import progress from './img/progess.png';
import imgDefault from './img/a.png';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useHistory } from "react-router-dom";

const Destination = (props) => {

  const history = useHistory();
  const goToPage = (loc) => {
    history.push({ pathname: `/${loc}`, state: { page_loc: 0 } });
  }

  return (
    <>
      <div id="destination" className="secondPage">
        <div className="second_header">
          <img src={progress} alt="" />
          Top Trending Destinations
        </div>
      </div>
      <div className="sliderDestination slider_splideOut">
        <div className="slider-splide">
          <Splide className='slider_splide_react' options={{ rewind: true, perPage: 4 }} aria-label="React Splide Example">
            {props?.trendingTreks?.length > 0 && props?.trendingTreks?.map(trek => {
              return (
                <SplideSlide onClick={() => goToPage(trek?.trek_id)} className='slider_splide_react1'>
                  <div style={{ backgroundImage: `url(${trek.trek_data?.img1 || "/Images/aboutus-bg.png"})` }} className='slider_splide_react_img'>
                    <p className='trek__cursive'>{trek?.trek_id}</p>
                  </div>
                  <div className="one1">
                    <p className="head">{trek?.trek_id}</p>
                    <div className='content'>
                      <p className='package_dates'>{trek.trek_data.day}D/{trek?.trek_data?.night}N</p>
                      <div className='star_text'><StarRoundedIcon sx={{ color: '#E7B80F' }} /><p>{trek?.trek_data?.review}/5</p></div>
                      <p className='current_price'>₹ {trek?.trek_data?.price}/- </p>
                      <p className='prev_price'>₹ {trek?.trek_data?.pricecross}/- </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}

          </Splide>
          <Splide className='slider_splide_react_mobile' options={{ rewind: true, perPage: 2 }} aria-label="React Splide Example">
            {props.trendingTreks.map(trek => {
              return (
                <SplideSlide className='slider_splide_react1'>
                  <div style={{ backgroundImage: `url(${trek.trek_data?.img1 || "/Images/aboutus-bg.png"})` }} className='slider_splide_react_img'>
                    <p className='trek__cursive'>{trek?.trek_id}</p>
                  </div>
                  <div className="one1">
                    <p className="head">{trek.trek_id}</p>
                    <div className='content'>
                      <p className='package_dates'>{trek.trek_data.day}D/{trek.trek_data.night}N</p>
                      <div className='star_text'><StarRoundedIcon sx={{ color: '#E7B80F' }} /><p>{trek.trek_data.review}/5</p></div>
                      <p className='current_price'>₹ {trek.trek_data.price}/- </p>
                      <p className='prev_price'>₹ {trek.trek_data.pricecross}/- </p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Destination