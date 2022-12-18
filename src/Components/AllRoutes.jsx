import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./ADDCitites/Products";
import Home from "../Pages/Home";
import Nailpolish from "./Nail/Nailpolish";
import LoginSignUp from "./Auth/LoginSingUp";
import Register from "./Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/nail" element={<Nailpolish />}></Route>
      <Route path="/log" element={<LoginSignUp />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/single/:id" element={<AddToCart/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
