import React from "react";
import { GiDress } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { links } from "./data";
import { social } from "./data";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { show, setShow } = useGlobalContext();
  return (
    <>
      <div className="top-banner">
        <h4>Modern clothes 🙍‍♀️ | shoes and bags </h4>
      </div>
      <div className="navbar-container">
        <div className="nav-bar" onClick={() => setShow(!show)}>
          <AiOutlineBars className="nav-btn" />
          <p>Menu</p>
        </div>
        <Link to="/">
          <div className="logo-container">
            <h4>Abeyda</h4>
            <div>
              <p>Classic</p>
              {/* <GiDress /> */}
            </div>
          </div>
        </Link>
        <div className="shopping-container">
          <FaRegHeart />
          <BsFillHandbagFill />
        </div>
      </div>

      <div className={`${show ? "nav-menu show" : "nav-menu"}`}>
        <div className="footer-icons">
          <ul className="footer-list">
            {links.map((el) => {
              const { id, text, url, icon } = el;
              return (
                <li key={id} onClick={() => setShow(!show)}>
                  <Link to={url} className="footer-linkss">
                    {text}
                    <div className="delare"></div>
                  </Link>
                </li>
              );
            })}
            <li>
              <a href={social.url} className="footer-linkss">
                {social.text} {social.icon}
              </a>
              <div className="delare"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
