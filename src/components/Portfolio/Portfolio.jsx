import React from "react";
import "./portfolio.css";
import IMG1 from '../../assets/Android Projects.png';
import IMG2 from '../../assets/Diwali Sales Analysis.png';
import IMG3 from '../../assets/Netflix_Homepage_Clone.png';
import apk1 from '../../assets/Age to minutes.apk';
import report from '../../assets/Diwali_Sales_Analysis.ipynb';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Android Age to Minutes Calculator in kotlin',
    github: 'https://github.com/Nick444-del/Android-age-to-minutes-in-kotlin',
    demo: apk1
  },
  {
    id: 2,
    image: IMG2,
    title: 'Diwali Sales analysis in Python',
    github: 'https://github.com/Nick444-del/Diwali-Sales-Analysis',
    demo: report
  },
  {
    id: 3,
    image: IMG3,
    github: 'https://github.com/Nick444-del/Netflix-Clone',
    demo: 'https://endearing-faloodeh-86a43c.netlify.app/'
  }
]

const Portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn">Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo/Download</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
    );
};

export default Portfolio;
