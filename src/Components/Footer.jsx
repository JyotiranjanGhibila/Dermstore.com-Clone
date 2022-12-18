import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaApple,
  FaLinkedinIn,
  FaGoogle,
  FaCookie,
  FaInfo,
  FaSync,
  FaTruckMoving,
  FaMapMarker,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{borderTop:"1px solid grey"}}>
      <div className="first-foot">
        <div>
          <p>
            Sign up to our newsletters and receive the latest exclusive
            discounts and deals
          </p>
          <button className="black-btn">SIGN ME UP</button>
        </div>
        <div>
          <p>Connect With Us</p>
          <FaGoogle className="company-icon" />
          <FaFacebookF className="company-icon" />
          <FaGithub className="company-icon" />
          <FaLinkedinIn className="company-icon" />
          <FaInstagram className="company-icon" />
          <FaApple className="company-icon" />
        </div>
      </div>
      <div className="sec-foot" style={{borderTop:"1px solid grey"}}>
        <div className="fot-p">
          <p>Customer Service</p>
          <p>
            <span className="service-icon">
              <FaInfo />
            </span>
            Help Center / FAQs
          </p>
          <p>
            <span className="service-icon">
              <FaSync />
            </span>
            Returns
          </p>
          <p>
            <span className="service-icon">
              <FaMapMarker />
            </span>
            Shipping Information
          </p>
          <p>
            <span className="service-icon">
              <FaTruckMoving />
            </span>
            Track my order
          </p>
          <p>
            {" "}
            <span className="service-icon">
              <FaCookie />
            </span>{" "}
            Cookie Settings
          </p>
        </div>
        <div style={{ display: "flex" ,justifyContent:"space-between"}} >
          <div className="fot-p" style={{marginRight:"30px"}}>
            <p>My Account</p>
            <p>Manage My Auto-Replenishments</p>
            <p>My Rewards</p>
            <p>My Favorites</p>
            <p>Refer a Friend</p>
            <p>Order History</p>
          </div>
          <div className="fot-p" style={{marginRight:"30px"}}>
            <p>Company</p>
            <p>About Us</p>
            <p>Press</p>
            <p>What is Klarna?</p>
          </div>
          <div className="fot-p">
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Modern Slavery Statement</p>
            <p>Product Recall</p>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
      <div className="third-foot" style={{borderTop:"1px solid grey"}}>
        
            <h1>THG</h1>
            <p>2022 © The Hut.com Ltd.</p>
       
        
            <h4>Pay securely with</h4>
            <img style={{width:"20%"}} src="https://thumbs.dreamstime.com/b/kiev-ukraine-march-payment-system-logos-maestro-paypal-jcb-apple-pay-google-mastercard-visa-amazon-skrill-western-union-wallet-220009160.jpg" alt="" />
        
      </div>
    </div>
  );
};

export default Footer;











