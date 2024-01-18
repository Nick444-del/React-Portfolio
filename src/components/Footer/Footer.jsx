import React from "react";
import "./footer.css";

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a className="footer__logo" href="">EGATOR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Nick444-del"><FaGithub/></a>
        <a href="https://www.instagram.com/gorulenikhil/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/nikhil-goruled444/"><FaLinkedinIn/></a>
      </div>

      {/* <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div> */}
    </footer>
    );
};

export default Footer;
