import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Destination.css';
import progress from './img/progess.png';

const Destination = () => {
  return (
      <>
      <div className="secondPage">
        <div className="second_header">
            <img src={progress} alt="" />
        Top Trending Destinations
        </div>
    </div>
    <div className="slider_splideOut">
    <div className="slider-splide">
        <Splide className='slider_splide_react' options={ { rewind: true,perPage:4} } aria-label="React Splide Example">
        {/* <Splide options={ { rewind: true,perPage:4} } aria-label="React Splide Example"> */}
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/a.png" alt="Image 1"/>
        <div className="one1">
            <p className="head">Auli - Chopta</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 4,499/- </p>
            <p>₹ 7,499/- </p>
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/b.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Auli</p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>

      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/c.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Chopta </p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/d.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Rishikesh</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 2,499/-</p>
            <p>₹ 4,999/-</p>
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/a.png" alt="Image 1"/>
        <div className="one1">
            <p className="head">Auli - Chopta</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 4,499/- </p>
            <p>₹ 7,499/- </p>
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/b.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Auli</p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>

      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/c.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Chopta </p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p>
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/d.png" alt="Image 2"/>
        <div>
            <p className="head">Rishikesh</p>
            <p>4D/3N</p>
            <img src="/Images/1.svg"></img>
            <p>4.9/5</p>
            <p>₹ 2,499/-</p>
            <p>₹ 4,999/-</p>
        </div>
      </SplideSlide>
    </Splide>
    {/* for mobile views */}
    <Splide className='slider_splide_react_mobile' options={ { rewind: true, perPage:2} } aria-label="React Splide Example">
        {/* <Splide options={ { rewind: true,perPage:4} } aria-label="React Splide Example"> */}
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/a.png" alt="Image 1"/>
        <div className="one1">
            <p className="head">Auli - Chopta</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 4,499/- </p>
            <p>₹ 7,499/- </p> */}
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/b.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Auli</p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p> */}
        </div>
      </SplideSlide>

      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/c.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Chopta </p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p> */}
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/d.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Rishikesh</p>
            <p>4D/3N</p>
            <img src="/Images/1.svg"></img>
            <p>4.9/5</p>
            {/* <p>₹ 2,499/-</p>
            <p>₹ 4,999/-</p> */}
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/a.png" alt="Image 1"/>
        <div className="one1">
            <p className="head">Auli - Chopta</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 4,499/- </p>
            <p>₹ 7,499/- </p> */}
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/b.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Auli</p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p> */}
        </div>
      </SplideSlide>

      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/c.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Chopta </p>
            <p>3D/2N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 3,999/-  </p>
            <p>₹ 6,999/-  </p> */}
        </div>
      </SplideSlide>
      <SplideSlide className='slider_splide_react1'>
        <img className='slider_splide_react_img' src="/Images/d.png" alt="Image 2"/>
        <div className="one1">
            <p className="head">Rishikesh</p>
            <p>4D/3N</p>
            <div className='star_text'><img src="/Images/1.svg"></img><p>4.9/5</p></div>
            {/* <p>₹ 2,499/-</p>
            <p>₹ 4,999/-</p> */}
        </div>
      </SplideSlide>
    </Splide>
    </div>
    </div>
    </>
  );
}

export default Destination