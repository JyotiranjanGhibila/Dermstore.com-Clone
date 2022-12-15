import React from "react";
import Styles from "./Styles.css";
<<<<<<< HEAD
import Logo from "./skin.gif";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {FaUserCog} from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="main-div">
=======
import Logo from "./logo.jpg";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
>>>>>>> fbf1b63c7d6ccd65337a01f3558af37e29908652
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
<<<<<<< HEAD
        <div className="admin-div">
          <FaUserCog className="icon"/>
          <p>Admin</p>
        </div>
      </div>
      <div className="sec-nav">
        <p>Brand</p>
        <p>Holiday Shoop</p>
        <p>Bestseller</p>
        <p>Skin Care</p>
        <p>Makeup</p>
        <p>Hair Care</p>
        <p>Bath & Body</p>
        <p></p>
      </div>
=======
      </div>
      <div className="sec-nav"></div>
>>>>>>> fbf1b63c7d6ccd65337a01f3558af37e29908652
    </div>
  );
};

export default Navbar;
