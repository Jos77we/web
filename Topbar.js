import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="text">
        <p style={{ color: "white", fontSize: "1.5rem", marginLeft: "20px" }}>
          Tourism
        </p>
      </div>
      <div className="choice">
        <p className="choices">About</p>
        <p className="choices">Offers</p>
        <p className="choices">Signup</p>
      </div>
    </div>
  );
};

export default Topbar;
