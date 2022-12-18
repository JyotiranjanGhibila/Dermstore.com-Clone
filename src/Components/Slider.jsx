import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Styles from "./Styles.css"
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/44/original-1116-STDCRE-43990-CM-DS-Q4-Batching-1920x700-061844.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="slider-text">Now at We Care</h3>
            <h1 className="slider-text">Introducing: ISDIN</h1>
            <p className="slider-text">Discover Barcelona-born, advanced skin care formulas with innovative textures for a practical & sensory experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/01/original-1116-STDCRE-43990-CM-DS-Q4-Batching-1920x700-075901.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="slider-text-w">The Ultimate Gift</h1>
            <p className="slider-text-w">Our curated roundup of 50 merry- making &I glow giving skin,hair & beauty gifts for everyone on your list</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/01/original-1007-STDCRE-42245-DS-AH-October-Batching-shot-26-HomePage_1920x700-051001.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h1 className="slider-text-w">Up to 50% Off + Extra 10%</h1>
            <p className="slider-text-w">Save even MORE when you shop up what's on sale-but hurry before they're gone for good</p>
            <h2>CODE: Extra94</h2>
            <button>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/51/original-1117-STDCRE-43638-DS-AH-Klarna-Assets-HomePage_1920x700_copy_3-074351.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="slider-text">Now at We Care</h3>
            <h1 className="slider-text">Introducing: ISDIN</h1>
            <p className="slider-text">Discover Barcelona-born, advanced skin care formulas with innovative textures for a practical & sensory experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/32/original-1116-STDCRE-43990-CM-DS-Q4-Batching-1920x700-074832.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h1 className="slider-text">Forget Someone?</h1>
            <p className="slider-text">Rewards Memberes. order by December 21st for free two-day</p>
            <p className="slider-text">shipping & get everything under the tree on time when you spend $150 or more</p>
            <h2>CODE: Extra94</h2>
            <button><Link to="/nail" style={{textDecoration:"none",color:"black"}}>SHOP NOW</Link></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>20% off SkinMedica</h1>
      <p>Save on formulas created by dermatologists & rooted in science.</p>
    </div>
  );
};

export default Slider;
