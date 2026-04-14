import React, { useState } from "react";
import "./day1.css";

const StarRating = ({ totalStar = 5 }) => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <p>star rating</p>
      {[...Array(totalStar)].map((_, index) => (
        <button
          className={`btn ${index < rating ? "active" : ""}`}
          key={index}
          onClick={() => setRating(index + 1)}
        >
          ★
        </button>
      ))}
      <div>{rating > 3 ? "excellant" : "average"}</div>
    </div>
  );
};

export default StarRating;

// .btn {
//   border: none;
//   background-color: transparent;
//   font-size: 50px;
//   cursor: pointer;
// }
// .active {
//   color: blue;
// }
