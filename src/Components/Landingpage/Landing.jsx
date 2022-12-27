import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Landing.css'
import { Autoplay} from "swiper";
import Img1 from "../Assets/slideimg (1).jpg";
import Img2 from "../Assets/slideimg (2).jpg";
import Img3 from "../Assets/slideimg (3).jpg";
import Img4 from "../Assets/slideimg (4).jpg";
import Img5 from "../Assets/slideimg (5).jpg";
function Landing() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-50"
      >
        <SwiperSlide className='slides'><img src={Img1} alt="wait for internet" /></SwiperSlide>
        <SwiperSlide> <img src={Img2} alt="wait for internet" /></SwiperSlide>
        <SwiperSlide> <img src={Img3} alt="wait for internet" /></SwiperSlide>
        <SwiperSlide> <img src={Img4} alt="wait for internet" /></SwiperSlide>
        <SwiperSlide> <img src={Img5} alt="wait for internet" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Landing
