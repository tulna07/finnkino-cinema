import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//Components
import Image from "@/components/Image";

import "./MultipleItems.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  if (props.icon) {
    return (
      <button
        onClick={onClick}
        className="multi-carousel__arrow multi-carousel__arrow--next hide-on-mobile-tablet"
      >
        {props.icon}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} multi-carousel__arrow multi-carousel__arrow--next hide-on-mobile-tablet`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  if (props.icon) {
    return (
      <button
        onClick={onClick}
        className="multi-carousel__arrow multi-carousel__arrow--prev hide-on-mobile-tablet"
      >
        {props.icon}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} multi-carousel__arrow multi-carousel__arrow--prev hide-on-mobile-tablet`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
}

function MultipleItems({
  className,
  data,
  Component,
  dots = false,
  speed = 2000,
  autoplaySpeed = 3000,
  slidesToShow = 3.2,
  slidesToScroll = 3.2,
  autoplay = true,
  nextArrow = "",
  prevArrow = "",
  ...props
}) {
  const settings = {
    dots: dots,
    infinite: true,
    autoplay: autoplay,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <SampleNextArrow icon={nextArrow} />,
    prevArrow: <SamplePrevArrow icon={prevArrow} />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const renderCarouselContent = () => {
    return data?.map((item) => {
      switch (Component) {
        case "img":
        case "Image":
          return (
            <Link key={item.maPhim} to={`/movie-detail/${item.maPhim}`}>
              <Image className="multi-carousel__img" src={item.hinhAnh} />
            </Link>
          );
        default:
          return (
            <Link key={item.maPhim} to={`/movie-detail/${item.maPhim}`}>
              {item.tenPhim}
            </Link>
          );
      }
    });
  };
  return (
    <Slider className={`${className}`} {...settings} {...props}>
      {renderCarouselContent()}
    </Slider>
  );
}

export default MultipleItems;
