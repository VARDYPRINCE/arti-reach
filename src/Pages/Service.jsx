import React from "react";
import carpenter from "../assets/images/Frame 519.png";
import potter from "../assets/images/Frame 518.png";
import plumber from "../assets/images/Frame 517.png";
import driver from "../assets/images/Frame 516.png";
import elctricans from "../assets/images/Frame 515.png";
import hairdresser from "../assets/images/Frame 510.png";
import culinary from "../assets/images/Frame 511.png";
import painter from "../assets/images/Frame 512.png";
import cleaner from "../assets/images/Frame 513.png";
import tutor from "../assets/images/Frame 514.png";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="pad_2">
        <h3 className="about" id="service">About Services</h3>
        <h1 className="text_2">We can help you solve your problems</h1>
        <p className="text_3">
          Our Arti-Reach services provide to peoples dilemma on where and how to
          get certan artisans services. .
          <div>
            At Arti-Reach we connect clients to professional artisans that can
            handle respected category of tasks.
          </div>
        </p>
        <div className="grid">
          <img src={carpenter} alt="" />
          <img src={potter} alt="" />
          <img src={plumber} alt="" />
          <img src={driver} alt="" />
          <img src={elctricans} alt="" />
          <img src={hairdresser} alt="" />
          <img src={culinary} alt="" />
          <img src={painter} alt="" />
          <img src={cleaner} alt="" />
          <img src={tutor} alt="" />
        </div>
        <div className="ptn_btn1">
          <button className="btn_4">Explore Services</button>
        </div>
      </div>
    </>
  );
};

export default Service;
