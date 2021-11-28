import React from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import Slider from "../Slider";
const imagesArray = ["../images/banner-1.jpg", "../images/banner-2.jpg"];
const Home = () => {
  return (
    <>
      <div
        className="header"
        style={{
          background: `linear-gradient(rgba(0.2,0.2,0.2,0.2),rgba(0.2,0.2,0.2,0.2)),url(${imagesArray[0]})`,
          backgroundPosition: "center",
        }}
      >
        <h1>We sell modern and classic women's clothing! </h1>
        <h4>
          We also have children's clothes, office clothes, shoes and bags.
        </h4>
        <Link to="./products">
          <button type="button" className="btn">
            Shop Now >>
          </button>
        </Link>
      </div>

      <div className="main">
        <h4>
          We tailor women's and children's clothing in all sizes! <GiClothes />
        </h4>
        <div className="divider"></div>
        <h5>Contact us or visit us for advice. </h5>
        <div className="mainchild">
          <button type="button" className="btn">
            <Link to="/contact"></Link>
            Contact
          </button>
          <a href="" className="btn">
            Visit Us
          </a>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Home;
