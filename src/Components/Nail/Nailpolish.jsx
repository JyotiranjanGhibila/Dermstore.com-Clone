import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./skin.gif";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Footer from "../Footer";
const Nailpolish = () => {
  const [nail, setNail] = useState([]);
  const [load, setLoad] = useState(true);
  const [cart,setCart]=useState(1)
  const [product_type, setProduct_type] = useState("");
  const getFetch = () => {
    return fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`
    ).then((res) => res.json());
  };
  useEffect(() => {
    handleFetch();
  }, []);
  const handleFetch = async () => {
    try {
      setLoad(true);
      let data = await getFetch();
      setNail(data);
      setLoad(false);
    } catch (er) {
      console.log(er);
      setLoad(false);
    }
  };
  console.log(nail);

  const handleSearch=()=>{
    setLoad(true)
      getFetch(product_type)
      .then((res)=>{
        setNail(res)
      })
      .catch((er)=>{
        console.log(er)
      })
      .finally(()=>
      {
        setLoad(false)
      }
      )
  }
  const handleCart=()=>{
    setCart(cart+1)
    alert(`${cart},Item Added To The Cart`)
  }
  return (
    <div>
      <div className="main-div">
        <div className="first-nav">
          <img className="logo" src={Logo} alt="We Care" />
          <div className="search">
            <input
              value={product_type}
              onChange={(e) => setProduct_type(e.target.value)}
              type="text"
              className="search-box"
              placeholder="search for a brand or a product"
            />
            <button
              className="search-btn"
              disabled={load}
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
          <div className="account">
            <FaUserCircle className="icon" />
            <p>Account</p>
          </div>
          <div className="cart">
            <FaCartPlus className="icon" />
            <p>Cart:{cart}</p>
          </div>
          <div className="admin-div">
            <FaUserCog className="icon" />
            <Link
              to="/admin"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Admin</p>
            </Link>
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
      </div>
      <Slider />
      {load ? (
        <div style={{ alignitem: "center" }}>
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt="Loading..."
          />
        </div>
      ) : null}
      <div className="main-nail">
        {nail.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.image_link} alt={el.brand} className="nail-img" />
              <p>{el.name}</p>

              <p>
                {el.price_sign}
                {el.price}
              </p>
              <button className="black-btn" onClick={handleCart}>ADD TO CART</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Nailpolish;
