import React, { useState } from "react";

const StarP = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h1>Star rating</h1>
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <button
            key={i}
            className={`star ${i < rating ? "active" : ""}`}
            onClick={() => setRating(i + 1)}
          >
            *
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarP;
