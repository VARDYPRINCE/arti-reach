import  { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/rating.css";

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
              size={20}
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


