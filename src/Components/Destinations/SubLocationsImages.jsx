import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './SubLocationImages.css';
import progress from './img/progess.png';

const SubLocationImages = ({ data }) => {
    console.log(data)
  
    return (
        <>
            <div className="slider_splideOut">
                <div className="slider-splide">
                    <Splide className='  slider_splide_reactN'>

                        <SplideSlide className='slider_splide_react1N'>
                            <div class="side-crop">
                                <img className='testClass' src={data?.img} alt="Image 1" />
                            </div>
                        </SplideSlide>

                        <SplideSlide className='slider_splide_react1N'>
                            <div class="side-crop">
                                <img className='testClass' src={data?.img1} alt="Image 1" />
                            </div>
                        </SplideSlide>

                        <SplideSlide className='slider_splide_react1N'>
                            <div class="side-crop">
                                <img className='testClass' src={data?.img2} alt="Image 1" />
                            </div>
                        </SplideSlide>

                        <SplideSlide className='slider_splide_react1N'>
                            <div class="side-crop">
                                <img className='testClass' src={data?.img3} alt="Image 1" />
                            </div>
                        </SplideSlide>

                    </Splide>

                </div>
            </div>
        </>
    );
}

export default SubLocationImages