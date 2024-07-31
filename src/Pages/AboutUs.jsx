import React from "react";
import "./about.css";
import couples from "../assets/images/couple-making-plan-using-tablet-redecorate-house 1.png";

const AboutUs = () => {
  return (
    <div className="pad">
      <div className="mainView">
        <div className="contentz">
          <h3 className="aboutUs" id="aboutUs">About Us</h3>
          <div>
            <h1 className="heading">
              Book <span className="service">Services</span> from the comfort of
              your Home.
            </h1>
            <p className="statement_1">
              Some studies have shown that most people find it difficult to find
              or hire artisan services because of several reasons. We at
              Arti-Reach have brought a new digital innovative soltion to helo
              people have access to artisan services from the comfort of their
              homes encouraging a new path to business transaction.
            </p>
          </div>
          <button className="readmore">Read More</button>
        </div>
        <img
          src={couples}
          alt="couples making plan using a tablet"
          className="picturess"
        />
      </div>
    </div>
  );
};

export default AboutUs;
