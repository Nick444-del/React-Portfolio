import React from "react";
import "./contact.css";

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7pm9ve', 'template_elabexb', form.current, 'gHONddRE_SRzECjT7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact-option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+917977545525</h5>
            <a href="http://api.whatsapp.com/send?phone+917977545525">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact-option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Nikhil Gorule</h5>
            <a href="https://www.linkedin.com/in/nikhil-goruled444/" target="_blank">View Profile</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your E-mail" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
