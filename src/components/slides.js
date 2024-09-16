import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div style={{ padding: '10px' }}>
          <img src="src_pic/Banner0.png" alt="Slide 1" style={{ width: '100%', height: '750px', display: 'block', borderRadius: '10px' }} />
        </div>
        <div style={{ padding: '10px' }}>
          <img src="src_pic/Banner1.png" alt="Slide 2" style={{ width: '100%', height: '750px', display: 'block', borderRadius: '10px' }} />
        </div>
        <div style={{ padding: '10px' }}>
          <img src="src_pic/Banner2.png" alt="Slide 3" style={{ width: '100%', height: '750px', display: 'block', borderRadius: '10px' }} />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
