import React from "react";
import Navbar from "../Components/Navbar";
import Skinmedica from "../Components/Skinmedica";
import Slider from "../Components/Slider";
import ShopCategory from "../Components/ShopCategory"
import Bestseller from "../Components/Bestseller";
import BrandFe from "../Components/BrandFe";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Skinmedica/>
      <ShopCategory/>
      <Bestseller/>
      <BrandFe/>
      <Footer/>
    </div>
  );
};

export default Home;
