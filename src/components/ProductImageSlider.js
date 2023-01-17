import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductImageSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
        <img src={data.image} alt={data.title} />
        </div>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
        <div>
          <img src={data.image} alt={data.title} />
        </div>
      </Slider>
    </>
  )
}

export default ProductImageSlider