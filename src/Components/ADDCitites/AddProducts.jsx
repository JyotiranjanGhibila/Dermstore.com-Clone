import React, { useState,useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {AuthContext} from "../Context/AuthContext"

const AddProducts = ({ handleAddPro }) => {
  // console.log("its:",handleAddPro)
  const {logoutUser,authState} =useContext(AuthContext)
  const [formState, setFormState] = useState({
    name: "",
    img: "",
    price: "",
  });
  const handleChange = (e) => {
    const v =
      e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: v,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    handleAddPro(formState);
  };
  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <div className="wrapper">
          <h1 className="Title">ADMIN CAN ADD THE PRODUCTS</h1>
          <form onSubmit={handleSubmit} className="Form">
            <div className="inp-box">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Add Title of the Produc"
                className="inp-boxx"
                
              />
            </div>
            <div className="inp-box">
              <input
                type="link"
                name="img"
                value={formState.img}
                onChange={handleChange}
                placeholder="Add Link of the Product Image"
                className="inp-boxx"
                
              />
            </div>
            <div className="inp-box">
              <input
                type="number"
                name="price"
                value={formState.price}
                onChange={handleChange}
                placeholder="Add Product Price"
                className="inp-boxx"
              />
            </div>
            <div>
              <input type="submit" value="submit" className="sub-btn"/>
            </div>
            <div>
              <button onClick={logoutUser} className="logout-btn">Logout</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProducts;
