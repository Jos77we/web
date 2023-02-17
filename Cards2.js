import React from "react";
import "./Cards.css";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import htm1 from "./images/hotelimg.jpg";
import htm2 from "./images/hotelimg1.jpg";
import htm3 from "./images/hotelimg2.jpg";
import htm4 from "./images/hotelimg3.jpg";

const Cards2 = () => {
  return (
    <>
      <div className="index-common">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-item">
            <img src={htm2} alt="pic"></img>
            <div className="slide-line"></div>
            <div className="slide-description">
              <p style={{ fontSize: "1.7rem" }}>Maasai Mara</p>
              <p style={{ fontSize: "0.9rem" }}>
                The beautiful savannah of Maasai Mara overlook on a hot air
                ballon. Travel miles and miles of this vast spectacular scene.
                Get to see amazing scenaries like the wild beast migration,
                lions den and many more
              </p>
              <p>Most popular among 498 travellers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-item">
            <img src={htm1} alt="pic"></img>
            <div className="slide-line"></div>
            <div className="slide-description">
              <p style={{ fontSize: "1.7rem" }}>Amboseli National Park</p>
              <p style={{ fontSize: "0.9rem" }}>
                Long stretch of savannah lands on the edge of the Yatta. Travel
                to this vast spectacular land and enjoy seeing one of the
                fastest mammals in Africa. Get to see other scenaries and a
                taste of the maasai culture
              </p>
              <p>Most popular among 200 travellers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-item">
            <img src={htm3} alt="pic"></img>
            <div className="slide-line"></div>
            <div className="slide-description">
              <p style={{ fontSize: "1.7rem" }}>Serengeti National Park</p>
              <p style={{ fontSize: "0.9rem" }}>
                Each year people come from allover the world to see the largest
                migration on land. Get to feel the monent as wild beast move
                across the Mara river which are dangerous waters with more than
                200 crocodiles. Join us and feel the adrenaline rush
              </p>
              <p>Most popular among 366 travellers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-item">
            <img src={htm4} alt="pic"></img>
            <div className="slide-line"></div>
            <div className="slide-description">
              <p style={{ fontSize: "1.7rem" }}>The Kenyan Coast</p>
              <p style={{ fontSize: "0.9rem" }}>
                The beautiful savannah of Maasai Mara overlook on a hot air
                ballon. Travel miles and miles of this vast spectacular scene.
                Get to see amazing scenaries like the wild beast migration,
                lions den and many more
              </p>
              <p>Most popular among 401 travellers</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Cards2;
