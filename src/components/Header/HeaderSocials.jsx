import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nikhil-goruled444/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Nick444-del" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/gorulenikhil/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
