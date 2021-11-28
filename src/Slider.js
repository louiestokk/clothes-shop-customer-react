import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Slider = () => {
  const { text, index, images, colors } = useGlobalContext();
  return (
    <div className="slider-container">
      <img src={images[index]} alt="kids clothes" className="slider-image" />
      <div>
        <h3 style={{ color: "#ec4899" }} className="slider-text">
          {text[index]}
        </h3>
        <Link to="/products">
          <button type="button" className="btn">
            Explore
          </button>
        </Link>
      </div>
      <p></p>
    </div>
  );
};

export default Slider;
