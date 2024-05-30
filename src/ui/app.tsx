import * as React from 'react';
import ExperienceItem from './components/molecules/experience.items.js';
import { TypeAnimation } from 'react-type-animation';

const experienceList = [{
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2019 to Present',
    position: 'Technical Lead',
    company: 'WooliesX',
    summary: 'This is a summary',
}, {
    logo: '/public/assets/amp_round_logo.png',
    timeframe: '2018 to 2019',
    position: 'Technical Lead',
    company: 'AMP',
    summary: 'This is a summary',

  }, {
    logo: '/public/assets/commonwealth_bank_round_logo.png',
    timeframe: '2017 to 2018',
    position: 'Senior Devops Engineer',
    company: 'Commonwealth Bank',
    summary: 'This is a summary',
  }, {
    logo: '/public/assets/accenture_round_logo.png',
    timeframe: '2017',
    position: 'Senior Devops Engineer',
    company: 'Accenture',
    summary: 'This is a summary',
  }, {
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2008 to Present',
    position: 'Senior Software Engineer',
    company: 'Excelera Pty Ltd',
    summary: 'This is a summary',
  }];
export default function App() {
  return(
    <div className="app-main">
      <div className="hero-container">
        <div className="hero-left">

        </div>
        <div className="hero-right">
          <div className="nav-menu">
            <ul>
              <li>
                <a href="#about-me">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#tech-stack">Tech Stack</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-intro">
          <div className="hero-welcome">
            HEY! I AM
          </div>
          <div className="hero-name">
          David Kong
          </div>
          <div className="job-description">
            <TypeAnimation
              sequence={[
                `I'm a technical lead.`,
                2000,
                `I'm a software engineer.`,
                2000,
                `I'm a devops engineer.`,
                2000,
                `I'm a photographer.`,
                4000,
                '',
              ]}
              speed={25}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div id="about-me" className="about-container">
        <div className="hero-right">
          <img src="/public/assets/profile@2x.jpg" className="hero-profile" />
        </div>

        <div className="hero-right">
          <div className="about-me">
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
      </div>
      <div className="education-container">
        <div className="education-menu">
          <div className="education-sticky">
            <ul>
              <li>Experience</li>
              <li>Skills</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
        <div id="experience" className="education-content">
          <h2>Experience</h2>
          <ul className="resume-list">
            { experienceList.map(item => (
              <li>
                <ExperienceItem item={item} />
              </li>
              ))
            }
          </ul>
          <h2 id="education">Education</h2>
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
          Copyright &copy; 2024 David Kong. All rights reserved.
        </div>
      </div>
    </div>
  )
}
