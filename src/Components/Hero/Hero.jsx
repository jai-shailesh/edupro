import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="heroText">
        <h1>Ensure Better Education For Better World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et
          perspiciatis cum officia in dignissimos. Pariatur quo accusantium
          ipsam, nulla voluptates odit iusto ad facere? Magnam esse repudiandae
          dignissimos quisquam?
        </p>
        <Link to="program" smooth={true} offset={-250} duration={500}>
          <button className="btn">
            Explore More <img src={dark_arrow} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
