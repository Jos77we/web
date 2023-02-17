import React from "react";
import "./Dashboard.css";
import {
  UserAddOutlined,
  UserSwitchOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MessageOutlined,
  WhatsAppOutlined,
  WalletOutlined,
  GlobalOutlined,
  CarOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
//import "antd/dist/antd.css";
import Cards from "./Cards";
//import CardList from "./CardList";
//import CardList1 from "./CardList1";
import Topbar from "../Topbar";
import SearchForm from "./SearchForm";
import Cards2 from "./Cards2";

const Dashboard = () => {
  const content = (
    <div>
      <p>Sign-up Today</p>
    </div>
  );
  const login = (
    <div>
      <p>Login account</p>
    </div>
  );

  return (
    <div className="web-app">
      {/* nav-container */}

      <div className="nav-container">
        <Topbar />

        <div className="line1"></div>
        <div className="nav-section">
          <p>Explore the world with us today and </p>
          <p>get to have amazing adventures</p>
        </div>
        <Popover content={content}>
          <div className="nav-options">
            <UserAddOutlined style={{ padding: "12px", fontSize: "30px" }} />
          </div>
        </Popover>
        <Popover content={login}>
          <div className="nav-options1">
            <UserSwitchOutlined style={{ padding: "12px", fontSize: "30px" }} />{" "}
          </div>
        </Popover>
      </div>

      {/* content index */}
      <div className="content-index">
        <div className="index">
          <p style={{ padding: "10px", fontSize: "1.4rem" }}>
            Narrow your Search
          </p>
          <SearchForm />
        </div>
        <div className="index-column">
          <p style={{ padding: " 10px 20px", fontSize: "1.5rem" }}>Safaris</p>
          <div>
            <Cards />
          </div>
          <p style={{ padding: " 10px 20px", fontSize: "1.5rem" }}>Hotels</p>
          <div>
            <Cards2 />
          </div>
        </div>
      </div>
      <div className="lines"></div>

      {/*content area */}
      <div className="lines"></div>

      {/* info section */}
      <div className="about-section">
        <p style={{ textAlign: "center", fontSize: "2.0rem" }}>
          Why choose us for your travels
        </p>
        <div className="about-description">
          <div className="about-item1">
            <WalletOutlined
              style={{ fontSize: "30px", padding: "40px 0px 0px 80px" }}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                padding: " 20px 0px 0px 0px",
              }}
            >
              Best Deals
            </p>
            <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
              We bring to the the best and affordable prices that are pocket
              friendly ensuring you get the best adventures at your own comfort
            </p>
          </div>
          <div className="about-item1">
            <GlobalOutlined
              style={{ fontSize: "30px", padding: "40px 0px 0px 80px" }}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                padding: " 20px 0px 0px 0px",
              }}
            >
              Experience
            </p>
            <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
              With many years of serving our customers who keep coming back we
              believe our experiences and expertise is key in providing you with
              the best time of your life
            </p>
          </div>
          <div className="about-item1">
            <CarOutlined
              style={{ fontSize: "30px", padding: "40px 0px 0px 80px" }}
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                padding: " 20px 0px 0px 0px",
              }}
            >
              Variety
            </p>
            <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
              We bring to you a wide variety of places and activities plus
              accomodation that will suite you, your family and friends thta
              will leave a memoriable mark
            </p>
          </div>
        </div>
      </div>
      <div className="lines"></div>

      {/* Footer section */}

      <div className="footer">
        <div className="social-icons">
          <p style={{ fontSize: "1.4rem", color: "white" }}>Socials</p>
          <div style={{ fontSize: "20px", padding: "10px 5px" }}>
            <TwitterOutlined />
            <FacebookOutlined />
            <InstagramOutlined />
            <MessageOutlined />
            <WhatsAppOutlined />
          </div>
        </div>
        <div className="social-partners">
          <p style={{ fontSize: "1.4rem", color: "white" }}>Our Partners</p>
          <div style={{ fontSize: "0.9rem", color: "white" }}>
            <p>Magical kenya</p>
            <p>Master card</p>
            <p>Allthings Hotel</p>
            <p>Tours and travels</p>
          </div>
        </div>
        <div className="social-partners">
          <p style={{ fontSize: "1.4rem", color: "white" }}>Links</p>
          <div style={{ fontSize: "0.9rem", color: "white" }}>
            <p>Explorers blog</p>
            <p>Our Gallery</p>
            <p>The travellers award</p>
            <p>Sign-up</p>
          </div>
        </div>
      </div>
      <div className="footer-lines"></div>
      <div className="footer-last">
        <CopyrightOutlined
          style={{
            color: "white",
            display: "flex",
            padding: "0px 0px 0px 500px",
            fontSize: "0.5rem",
          }}
        />
        <p style={{ color: "white", fontSize: "0.5rem" }}>
          2022 Tourism.com OneCell Technologies
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
