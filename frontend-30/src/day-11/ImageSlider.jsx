import React, { useEffect, useState } from "react";
import "./day11.css";

const images = [
  "https://picsum.photos/id/1015/1200/600",
  "https://picsum.photos/id/1016/1200/600",
  "https://picsum.photos/id/1018/1200/600",
  "https://picsum.photos/id/1020/1200/600",
  "https://picsum.photos/id/1024/1200/600",
];

const ImageSlider = () => {
  const [currIdx, setCurrIdx] = useState(0);

  function prev() {
    setCurrIdx((curr) => (curr - 1 < 0 ? images.length - 1 : curr - 1));
  }

  function next() {
    setCurrIdx((curr) => (curr + 1) % images.length);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <button className="btn1" onClick={prev}>
        ⬅️
      </button>
      <img src={images[currIdx]} alt={`slider_image_${currIdx}`} className="slider-img" />
      <button className="btn2" onClick={next}>
        ➡️
      </button>
    </div>
  );
};

export default ImageSlider;
