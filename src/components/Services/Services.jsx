import React from "react";
import "./services.css";
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Can create creative hero pages.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have a good knowledge of responsive web Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Know about the frameworks like BootStrap, tailwind css, Reactjs, etc.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Maded many frondend web projects and stored in Github.</p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}
        <article className="service">
          <div className="service__head">
            <h3>Data Analytics</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have a good knowledge of python.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Knows how to automate the task's in python.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have a good grasp on Spreadsheet and MS Excel</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Can create and manage the Database in MySQL and SQL</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Worked on some presonal project's</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Know how to present Data and help's in decision making.</p>
            </li>
          </ul>
        </article>
        {/* END OF wEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Android Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have a good grasp on Java and Kotlin.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have made some projects in Java and Kotlin.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Have cleared basics on Java and Kotlin.</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>Knows how to work in android studio.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
