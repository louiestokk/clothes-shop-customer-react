import React from "react";
import { links } from "./data";
import { social } from "./data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="form-container">
        <h2>subscribe to newsletter</h2>
        <form className="form">
          <input type="email" placeholder="Email" />
          <button type="submit" className="footer-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="footer-icons">
        <ul className="footer-list">
          {links.map((el) => {
            const { id, text, url, icon } = el;
            return (
              <li key={id}>
                <Link to={url} className="footer-links">
                  {text}
                  {icon}
                </Link>
              </li>
            );
          })}
          <li>
            <a href={social.url} className="footer-links">
              {social.text} {social.icon}
            </a>
          </li>
        </ul>
      </div>
      <div className="logo-container">
        <h4>Abeyda</h4>
        <div>
          <p>Classic</p>
          {/* <GiDress /> */}
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; All Rights Reserved Abeyda Classic, Stone Town Zanzibar.</p>
        <span>Developer / Stokk Tech Limited</span>
      </div>
    </div>
  );
};

export default Footer;
