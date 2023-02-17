import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import "./styles.css";

import htm1 from "./images/hotelimg.jpg";
import htm2 from "./images/hotelimg1.jpg";
import htm3 from "./images/hotelimg2.jpg";
import htm4 from "./images/hotelimg3.jpg";

const CardList1 = () =>{
    return(
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={htm3} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>Mwangaza</p>
              <p style={{ fontSize: "0.8rem" }}>Zanzibar, Tanzania</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $100
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm1} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>
                Sunset Hotel
              </p>
              <p style={{ fontSize: "0.8rem" }}>Malindi, Kenya</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $150
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm4} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>
                Hilton Resort
              </p>
              <p style={{ fontSize: "0.8rem" }}>Diani, Kenya</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $300
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm2} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>
                Serena Hotel
              </p>
              <p style={{ fontSize: "0.8rem" }}>Dar-es-salaam, Tanzania</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $350
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm1} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>OleSerena</p>
              <p style={{ fontSize: "0.8rem" }}>Ukunda, Kenya</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $250
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm4} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>
                Delicacy Hotel
              </p>
              <p style={{ fontSize: "0.8rem" }}>Diani, Kenya</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $200
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm2} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>Beach View</p>
              <p style={{ fontSize: "0.8rem" }}>Oyester Bay, Tanzania</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $50
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm3} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>
                TallMan Hotel
              </p>
              <p style={{ fontSize: "0.8rem" }}>Malindi, Kenya</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $280
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={htm1} alt="animal"></img>
              <p style={{ padding: "10px", fontSize: "1.2rem" }}>Ambassador</p>
              <p style={{ fontSize: "0.8rem" }}>Zanzibar, Tanzania</p>
              <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
                $300
              </p>
            </SwiperSlide>
          </Swiper>
        </>
    );
};

export default CardList1;