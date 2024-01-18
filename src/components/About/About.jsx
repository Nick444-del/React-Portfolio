import React from "react";
import "./about.css";
import me from '../../assets/about me.jpg';
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={ me } alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>N/A</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon"/>
              <h5>Projects</h5>
              <small><link rel="stylesheet" href="https://github.com/Nick444-del" />Github</small>
            </article>
          </div>

          <p>
          Hello! I'm a tech enthusiast with a Master's degree in Information Technology and a background in Computer Applications. My expertise spans data analysis, Android development, and frontend development. Passionate about leveraging technology to solve real-world challenges, I thrive in creating innovative solutions at the intersection of data and user experience. Let's connect and explore the exciting possibilities in the digital realm!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
