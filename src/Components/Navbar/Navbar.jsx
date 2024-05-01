import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "darkNav" : ""}`}>
      <h1 className="logo">EduPro</h1>
      <ul>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="program" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-250} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
