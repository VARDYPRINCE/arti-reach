import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/rating.css";
import DashboardNavBar from "./DashboardNavBar";
import ServiceModal from "./ServiceModal";

const Ratings = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;

        return (
          <label key={starRating}>
            <input
              type="radio"
              name="rating"
              value={starRating}
              onClick={() => setRating(starRating)}
              style={{ display: "none" }} // Hide radio inputs visually
            />
            <FaStar
              size={30}
              className="star"
              color={starRating <= rating ? "yellow" : "grey"}
            />
          </label>
        );
      })}
      {/* <ServiceModal /> */}
    </div>
  );
};

export default Ratings;


