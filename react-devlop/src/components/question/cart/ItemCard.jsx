import React from "react";

const ItemCard = ({ title, image, price, brand, rating, category , addCartHandler }) => {
  return (
    <div className="group w-60 bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md ">

      {/* Image */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">

        {/* Brand + Category */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-md">{brand}</span>
          <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400">
          {"★".repeat(Math.round(rating))}
          <span className="text-gray-500 text-sm ml-1">
            ({rating})
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center pt-1">
          <p className="text-lg font-bold text-indigo-600">
            ₹{price}
          </p>

          <button
          onClick = {addCartHandler}
           className="bg-indigo-600 cursor-pointer text-white px-3 py-1.5 rounded-lg text-sm hover:bg-indigo-700 transition-all duration-300">
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default ItemCard;