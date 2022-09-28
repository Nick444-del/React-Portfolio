import React from "react";
import "./about.css";
import me from '../../assets/me-about.jpg';
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
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias repudiandae porro alias, totam tempore ex earum veritatis exercitationem. Repellat architecto sint obcaecati. Officiis, molestiae aspernatur? Eius deserunt laboriosam illo?
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
