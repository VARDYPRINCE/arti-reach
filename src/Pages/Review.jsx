import "../styles/review.css";
import rec from "../assets/images/Rectangle 22 (1).png";
import benson from "../assets/images/Frame 557.png";
import simi from "../assets/images/Frame 558.png";
import mike from "../assets/images/Frame 559.png";

const Review = () => {
  return (
    <div className="review">
      <h3 className="review_title" id="review">Reviews</h3>

      <div className="fam_grid">
        <img src={rec} alt="" className="photos_2" />
        <div className="statement_">
          <h3 className="happy_clients">
            2500+ Happy Clients and to us they are satisfied
          </h3>
          <p className="happy_paragraph">
            At Arti-Reach we take the satisfcation of our members seriously, we
            strive to produce excellence in all our services which is what we
            stand by, making ourselves a Trusted and Reliable service company.
          </p>
        </div>
      </div>

      <div className="review_box">
        <div>
          <img src={benson} alt="" />
        </div>
        <div>
          <img src={simi} alt="" />
        </div>
        <div>
          <img src={mike} alt="" />
        </div>
      </div>
      <div className="btn_review_btn"><button className="btn_review">See more</button></div>
    </div>
  );
};

export default Review;
