import React from "react";
import "./Header.css";
import { FaHeart, FaThumbsUp, FaEye, FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="img1" src="./logo.png" alt="logo" />
        <p className="t1">| STORIES</p>
        <button className="btn">Courses</button>
      </div>
      <div>
        <img className="img2" src="./deo.jpeg" alt="background" />
      </div>
      <div className="user-details">
        <div>
          <img className="img3" src="./eqbal.png" alt="profile" />
        </div>
        <div className="p-details">
          <div>
            <h3>
              Equbal Fahmi
              <span className="diamond"> 💎</span>
              <span className="verified"> ✔</span>
            </h3>
          </div>
          <div className="flow">
            <div className="f1">
              <p className="box">6482</p>
              <span>Followers</span>
            </div>
            <div className="f2">
              <p className="box">245</p>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pos">
        <p>Co-Founder & CEO at Terribly Tiny Tales</p>
        <p>
          <a
            href="https://github.com/FahmiEqubal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/FahmiEqubal/
          </a>
        </p>

        <div className="icon">
          <FaStar size={"2vh"} color="rgb(0, 187, 255)" />
          <span style={{ marginRight: "10px" }}>125</span>
          <FaThumbsUp size={"2vh"} color="gold" />
          <span style={{ marginRight: "10px" }}>12</span>
          <FaEye size={"2vh"} color="grey" />
          <span style={{ marginRight: "10px" }}>57.8k</span>
          <FaHeart size={"2vh"} color="red" />
          <span style={{ marginRight: "10px" }}>26.0k</span>
        </div>
      </div>
    </>
  );
};

export default Header;
