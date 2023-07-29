import React from "react";
import imgBtc from "../../assets/btc.png";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h3>About Us</h3>
        <p>
          We are the best crypto trading app in India, we provide our guidance
          at a very cheap price.
        </p>
      </div>
      <div className="right">
        <img src={imgBtc} alt="" />
        <h4>Our Founder</h4>
      </div>
    </div>
  );
};

export default Footer;
