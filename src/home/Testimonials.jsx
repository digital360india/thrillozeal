import React from 'react';
import './Testimonials.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Testimonials() {
    const data = [
        {
            text: "Thank you thrillozeal for organizing such a great trip! I had a lot of fun with everyone and also made few friends.",
            name: '-Karan Godara',
            date: '22nd Jan, 2022',
            imgPro: '/Images/Ellipse 31.png',
            img: '/Images/reviewf.png'
        },
        {
            text: "Awesome blossom and a lot of fun! Had an amazing experienve.Auli is truly a heavenly place, full of snow and surrounded by enchanting mountains. A must visit!",
            name: '-Noushin Aslam',
            date: '15nd Jan, 2022',
            imgPro: '/Images/Ellipse 32.png',
            img: '/Images/reviewc.png'
        },
        {
            text: "One of the best trips of my life! Had loads of fun. The arrangements were smooth and we did not have to worry about anything!",
            name: '-Shalini Bisht',
            date: '10th Feb, 2022',
            imgPro: '/Images/Ellipse 33.png',
            img: '/Images/reviewl.png'
        },
        {
            text: "Awesome blossom and a lot of fun! Had an amazing experienve.Auli is truly a heavenly place, full of snow and surrounded by enchanting mountains. A must visit!",
            name: '-Noushin Aslam',
            date: '15nd Jan, 2022',
            imgPro: '/Images/Ellipse 32.png',
            img: '/Images/reviewc.png'
        },
        {
            text: "Thank you thrillozeal for organizing such a great trip! I had a lot of fun with everyone and also made few friends.",
            name: '-Karan Godara',
            date: '22nd Jan, 2022',
            imgPro: '/Images/Ellipse 31.png',
            img: '/Images/reviewf.png'
        },
        {
            text: "One of the best trips of my life! Had loads of fun. The arrangements were smooth and we did not have to worry about anything!",
            name: '-Shalini Bisht',
            date: '10th Feb, 2022',
            imgPro: '/Images/Ellipse 33.png',
            img: '/Images/reviewl.png'
        },
    ]
    return (
        <div className='testimonials'>
            <div className="second_header">
                <img src='/Images/progess.png' alt="" />
                Testimonials
            </div>
            <div className="testimonials_sec">
                <Splide options={{ rewind: true, perPage: 3 }} aria-label="React Splide Example">
                    {
                        data.map((data, k) => (
                            <>{
                                (k == 0 || k % 3 == 0) &&
                                <SplideSlide className='testimonials_secDiv'>
                                    <img className='imgPro' src={data.imgPro} alt="" />
                                    <img src="/Images/reviewf.png" alt="" />
                                    <h5>
                                        {data?.text}
                                    </h5>
                                    <h2>
                                        {data?.name}
                                    </h2>
                                    <h3>
                                        {data?.date}
                                    </h3>
                                </SplideSlide>
                            }
                                {(k == 1 || k == 4 || k == 7) &&
                                    <SplideSlide className='testimonials_secDiv' style={{ color: 'white' }} >
                                        <img className='imgPro' src={data.imgPro} alt="" />
                                        <img src="/Images/reviewc.png" alt="" />
                                        <h5>
                                            {data?.text}
                                        </h5>
                                        <h2>
                                            {data?.name}
                                        </h2>
                                        <h3>
                                            {data?.date}
                                        </h3>
                                    </SplideSlide>
                                }
                                {(k == 2 || k == 5 || k == 8) &&
                                    <SplideSlide className='testimonials_secDiv'>
                                        <img className='imgPro' src={data.imgPro} alt="" />
                                        <img src="/Images/reviewl.png" alt="" />
                                        <h5>
                                            {data?.text}
                                        </h5>
                                        <h2>
                                            {data?.name}
                                        </h2>
                                        <h3>
                                            {data?.date}
                                        </h3>
                                    </SplideSlide>
                                }
                            </>
                        ))
                    }
                </Splide>
            </div>
            {/* for mobile  */}
            <div className="testimonials_sec_formobile">
                <Splide style={{width:'100vw' ,maxWidth:'100% !important'}} options={{ rewind: true, perPage:1}} aria-label="React Splide Example">
                    {
                        data.map((data) => (
                            <>
                                <SplideSlide className='testimonials_secDiv' style={{ color: 'white' }} >
                                    <img className='imgPro' src={data.imgPro} alt="" />
                                    <img src="/Images/reviewc.png" alt="" />
                                    <h5>
                                        {data?.text}
                                    </h5>
                                    <h2>
                                        {data?.name}
                                    </h2>
                                    <h3>
                                        {data?.date}
                                    </h3>
                                </SplideSlide>
                            </>
                        ))
                    }
                </Splide>
            </div>
        </div>
    )
}

export default Testimonials