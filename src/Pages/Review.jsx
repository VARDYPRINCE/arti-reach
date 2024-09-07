import React from "react";
import "../styles/review.css";
import rec from "../assets/images/Rectangle 22 (1).png";
import benson from "../assets/images/Frame 557.png";
import simi from "../assets/images/Frame 558.png";
import mike from "../assets/images/Frame 559.png";

const Review = () => {
  return (
    <div className="review">
      <h3 className="review_title" id="review">
        Reviews
      </h3>

      <div className="fam_grid">
        <img src={rec} alt="Decorative background" className="photos_2" />
        <div className="statement_">
          <h3 className="happy_clients">
            2500+ Happy Clients and to us they are satisfied
          </h3>
          <div className="happy_paragraph">
            At Arti-Reach, we take the satisfaction of our members seriously. We
            strive to deliver excellence in all our services, standing by our
            commitment to be a Trusted and Reliable service company.
          </div>
        </div>
      </div>

      <div className="review_box">
        <div>
          <img src={benson} alt="Review by Benson" />
        </div>
        <div>
          <img src={simi} alt="Review by Simi" />
        </div>
        <div className="helll">
          <img src={mike} alt="Review by Mike" />
        </div>
      </div>
      
      <div className="btn_review_btn">
        <button className="btn_review">See more</button>
      </div>
    </div>
  );
};

export default Review;
