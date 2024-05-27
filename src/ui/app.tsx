import * as React from 'react';
import ExperienceItem from './components/molecules/experience.items.js';

export default function App() {
  return(
    <div className="app-main">
      <div className="hero-container">
        <div className="hero-left">

        </div>
        <div className="hero-right">

        </div>
        <div className="hero-intro">
          HEY! I AM
          <div className="hero-name">
          David Kong
          </div>
          <div className="job-description">
            I'm a senior software engineer.
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="hero-right">
          <img src="/public/assets/profile@2x.jpg" className="hero-profile" />
        </div>

        <div className="hero-right">
          <h1>About Me</h1>
          I'm a multi-discipline software engineer with an innate curiousity that loves to tinker.
          With extensive experience in DevOps, software architecture, systems integration and backend development.
          <p>
          I have been working for WooliesX for the last 5 years, building and supporting the Everyday Rewards App for both Australia and NZ.
          </p>
          <p>
          I have a proven track record for building and scaling applications to millions of users, with an emphasis on security.
          </p>
        </div>
      </div>
      <div className="education-container">
        <div className="education-menu">
          <ul>
            <li>Experience</li>
            <li>Skills</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="education-content">
          <h2>Experience</h2>
          <ul className="resume-list">
            <li>
              <ExperienceItem />
            </li>
          </ul>
          <h2>Education</h2>
          <ul className="resume-list">
            <li>1996-2000</li>
            <li>1990-1996</li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="footer-col">
          <h2>About</h2>
        </div>
        <div className="footer-col">
          <h2>Links</h2>
        </div>

        <div className="footer-col">
          <h2>Have a question?</h2>
        </div>
        <div className="footer-legal-notice">
          Copyright &copy 2024 David Kong. All rights reserved.
        </div>
      </div>
    </div>
  )
}
