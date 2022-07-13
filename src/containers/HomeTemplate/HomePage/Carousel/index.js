import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "./Carousel.scss";
import actFetchBanners from "@/redux/actions/movieBanner";
import Image from "@/components/Image";
import Loader from "@/components/Loader";

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
  const data = useSelector((state) => state.movieBanner.data);
  const loading = useSelector((state) => state.movieBanner.loading);

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
    customPaging: function () {
      return <FontAwesomeIcon className="home__carousel-indicator" icon={faCircle} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb home__carousel-indicators",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderCarouselItem = () => {
    if (loading) return <Loader />;

    const carouselItem = data?.map((item) => (
      <Image key={item.maPhim} src={item.hinhAnh} className="home__carousel-img" />
    ));

    return <Slider {...settings}>{carouselItem}</Slider>;
  };

  return <div className="home__carousel">{renderCarouselItem()}</div>;
}

export default Carousel;