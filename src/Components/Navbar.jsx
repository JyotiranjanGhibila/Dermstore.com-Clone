import React from "react";
import Styles from "./Styles.css";
import Logo from "./logo.jpg";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="first-nav">
        <img className="logo" src={Logo} alt="We Care" />

        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search for a brand or a product"
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
        <div className="account">
          <FaUserCircle className="icon" />
          <p>Account</p>
        </div>
        <div className="cart">
          <FaCartPlus className="icon" />
          <p>Cart</p>
        </div>
      </div>
      <div className="sec-nav"></div>
    </div>
  );
};

export default Navbar;
