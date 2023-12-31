import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Practice.css";
//Swiper.use([EffectCoverflow, Pagination, Navigation]);

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/food.png";
import slide_image_2 from "../../assets/travel.png";
import slide_image_3 from "../../assets/sea.png";
import slide_image_4 from "../../assets/youtube.png";

const Proatice = () => {
  return (
    <div>
      <div className="container" style={{ color: "white" }}>
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide className="slides">
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="slides">
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="slides">
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide className="slides">
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Proatice;
