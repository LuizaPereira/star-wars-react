import React from 'react';

import './styles.scss';

import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import email from '../../assets/images/email.png';

const About = () => (
  <div className="container">
    <h1> Angular Challenge </h1>
    <div className="about-detail">
      <p>
        My name is Luiza Pereira, I am a JT (Jovem Talento, Young Talent) at
        ilegra BR.
      </p>
      <p>
        This is my first project using React.js, and have the intention to level
        my skills.
      </p>

      <ul className="list">
        <li>This project uses YARN to manage project dependencies</li>
        <li>
          All the data came from{' '}
          <a href="https://swapi.co/" target="_blank" rel="noopener noreferrer">
            Star Wars API
          </a>
        </li>
        <li>SCSS for the development of styles</li>
        <li>Componentization concepts</li>
        <li>Style guide of Airbnb</li>
      </ul>

      <ul className="footer-list">
        <li>
          <a
            href="https://github.com/LuizaPereira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github account" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/luiza-pereira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn account"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </li>
        <li>
          <a href="mailto:luiza.pereira@ilegra.com">
            <img src={email} alt="Gmail account" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
