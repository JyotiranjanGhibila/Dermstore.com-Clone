import React from "react";
import Carousel from "react-bootstrap/Carousel";
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
      </Carousel>
<<<<<<< HEAD
      <h1>20% off SkinMedica</h1>
      <p>Save on formulas created by dermatologists & rooted in science.</p>
=======
>>>>>>> 689f9ee9c2714356b3b3b1094c399366366a5b2f
    </div>
  );
};

export default Slider;
