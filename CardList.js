import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import "./styles.css";
import pic1 from "./images/wildimg2.jpg";
import pic2 from "./images/wildimg3.jpg";
import pic3 from "./images/wildimg4.jpg";
import pic4 from "./images/wildimg5.jpg";
import pic5 from "./images/wildimg6.jpg";
import pic6 from "./images/wildimg7.jpg";
import pic7 from "./images/wildimg8.jpg";
import pic8 from "./images/wildimg9.jpg";
const CardList = () => {
  return (
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
            <img src={pic1} alt="hotel"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Ngorongoro</p>
            <p style={{ fontSize: "0.8rem" }}>Ngorongoro, Tanzania</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $300
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} alt="animal"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Maasai Mara</p>
            <p style={{ fontSize: "0.8rem" }}>Narok, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $250
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} alt="hotel"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Diana</p>
            <p style={{ fontSize: "0.8rem" }}> Malindi, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $250
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic4} alt="hotel"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Mombasa</p>
            <p style={{ fontSize: "0.8rem" }}>Dunga beach, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $250
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic5} alt="hotel"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Kilimanjaro</p>
            <p style={{ fontSize: "0.8rem" }}>Arusha, Tanzania</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $350
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic6} alt="animal"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>
              Amboseli Reserve
            </p>
            <p style={{ fontSize: "0.8rem" }}>Amboseli, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $250
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} alt="animal"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Tsavo Reserve</p>
            <p style={{ fontSize: "0.8rem" }}> Taita Taveta, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $400
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic7} alt="animal"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>Nairobi Park</p>
            <p style={{ fontSize: "0.8rem" }}> Nairobi, Kenya</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $50
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic8} alt="animal"></img>
            <p style={{ padding: "10px", fontSize: "1.2rem" }}>
              Serengeti Park
            </p>
            <p style={{ fontSize: "0.8rem" }}>Morogoro, Tanzania</p>
            <p style={{ fontSize: "1.4rem", padding: "0px 50px 0px 0px" }}>
              $350
            </p>
          </SwiperSlide>
        </Swiper>
    </>
  );
};

export default CardList;
