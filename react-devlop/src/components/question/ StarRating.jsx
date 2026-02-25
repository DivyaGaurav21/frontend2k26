// CREATE STAR RATING COMPONENT

// import React, { useState } from "react";

// const StarRating = ({ totalStars = 5 }) => {
//   const [rating, setRating] = useState(0);

//   const renderStar = () => {
//     let stars = [];
//     for (let i = 1; i <= totalStars; i++) {
//       stars.push(
//         <button
//           key={i}
//           className={`text-9xl ${rating >= i ? "text-yellow-400" : "text-gray-400"}`}
//           onClick={() => setRating(i)}
//         >*
//         </button>
//       )
//     }
//     return stars;
//   }

//   return <div>
//     <p>Rating this Products</p>
//     {renderStar()}
//     <p> {rating > 0 ? `you have rated ${rating} / ${totalStars}` : "please rate"}</p>
//     <p>{rating > 2 ? "good quality" : "poor quality"}</p>
//   </div>;
// };

// export default StarRating;

// ------------------- Approach 2 -----------------------------

import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  // NOTE: Array.from({length:totalStars}) , [...Array(totalStars)] both are same
  return (
    <div>
      <h1>Star Rating</h1>
      <div>
        {[...Array(totalStars)].map((_, i) => (
          <button
            key={i}
            onClick={() => setRating(i+1)}
            className={`text-9xl ${i < rating ? "text-yellow-500" : ""}`}
          >
            *
          </button>
        ))}
      </div>
      <div>
        <p>you have rated {rating}/{totalStars} of this product</p>
        <p>{rating > 3 && "Excellant product"}</p>
      </div>
    </div>
  );
};

export default StarRating;
