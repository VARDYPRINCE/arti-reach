import React from "react";
import logo from "../assets/images/arti-reach logo.png";
import landingpicture from "../assets/images/portrait-man-working-as-engineer_23-2151229979 (1) 1.png";
import gensys from "../assets/images/genesys_main-removebg-preview 1.png";
import tenece from "../assets/images/tenece-removebg-preview 1.png";
import sandra from "../assets/images/Frame 500.png";
import stars from "../assets/images/Frame 503.png";
import star from "../assets/images/Frame 504.png";
import "./landPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="view">
      <div className="nav_bar">
        <div className="logo">
          {" "}
          <img src={logo} alt="App Logo" />
        </div>

        <div className="nav">
          <a href="#aboutUs">About</a>
          <a href="#service">Services</a>
          <a href="#booking">Booking</a>
          <a href="#review">Review</a>
          <a href="#contactUs">Contacts</a>
        </div>
        <div className="button">
          <Link to="/">
            <button className="btn_1">Sign In</button>
          </Link>
          <Link to="/">
            <button className="btn-1">Log In</button>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="mini_img">
          <img src={stars} alt="" />
        </div>
        <div className="mini">
          <img src={sandra} alt="" />
        </div>
        <div className="imgs">
          <img src={star} alt="" />
        </div>
        <div className="paragraph">
          <div className="sub_1">
            <span className="sub">Professional Artisan service Website</span>
          </div>
          <h1 className="header">
            Trusted and Relaible <span className="artisan">Artisan</span>{" "}
            Services.
          </h1>
          <p className="statement">
            Get access to reliable and top notch professional services across
            the entire city, we are about innovative transformation of buisness
            ensuring convenience for our clients.
          </p>

          <div className="button">
            <button className="btn_2">Book Service</button>
            <button className="btn_3">View Services</button>
          </div>
        </div>
        <img
          src={landingpicture}
          alt="A man working as an enginerr"
          className="photo"
        />
      </div>
      <div className="company">
        <h2 className="companies">Trusted By</h2>
        <div className="sponsors">
          <img src={gensys} alt="" />
          <img src={tenece} alt="" className="tenece" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
