import React, { useState } from 'react';
import "../styles/rating.css"; // Create and include this CSS file for styling

const Rating = ({ rating, onChange }) => {
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleClick = (star) => {
    onChange(star);
  };

  const handleMouseEnter = (star) => {
    setHoveredStar(star);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredStar || rating) ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
