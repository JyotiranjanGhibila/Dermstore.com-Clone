import React from "react";
import Styles from "./Styles.css";
import { Link } from "react-router-dom";
import Logo from "./skin.gif";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main-div">
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
          <p><Link to="/register" style={{textDecoration:"none",color:"black"}}>Account</Link></p>
        </div>
        <div className="cart">
          <FaCartPlus className="icon" />
          <p>Cart</p>
        </div>
        <div className="admin-div">
          <FaUserCog className="icon" />
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <p>Admin</p>
          </Link>
        </div>
      </div>
      <div className="sec-nav">
        <p><Link to="/" style={{textDecoration:"none",color:"black"}}>Brand</Link></p>
        <p>Holiday Shoop</p>
        <p>Bestseller</p>
        <p>Skin Care</p>
        <p><Link to="/nail" style={{textDecoration:"none",color:"black"}}>MakeUp</Link></p>
        <p>Hair Care</p>
        <p>Bath & Body</p>
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
