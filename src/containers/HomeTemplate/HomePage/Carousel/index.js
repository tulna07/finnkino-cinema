import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.scss";
import actFetchBanners from "@/redux/actions/movieBanner";
import Image from "@/components/Image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} carousel__arrow carousel__arrow--next`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} carousel__arrow carousel__arrow--prev`} onClick={onClick} />;
}

function Carousel() {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.movieBanner.data);

  useEffect(() => {
    dispatch(actFetchBanners());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderCarouselItem = () => {
    return props?.map((item) => (
      <Image key={item.maPhim} src={item.hinhAnh} className="carousel__img" />
    ));
  };

  return <Slider {...settings}>{renderCarouselItem()}</Slider>;
}

export default Carousel;
