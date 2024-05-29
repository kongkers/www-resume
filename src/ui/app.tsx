import * as React from 'react';
import ExperienceItem from './components/molecules/experience.items.js';

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
          <ul>
            <li>Experience</li>
            <li>Skills</li>
            <li>Education</li>
          </ul>
        </div>
        <div className="education-content">
          <h2>Experience</h2>
          <ul className="resume-list">
            { experienceList.map(item => (
              <li>
                <ExperienceItem item={item} />
              </li>
              ))
            }
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
          Copyright &copy; 2024 David Kong. All rights reserved.
        </div>
      </div>
    </div>
  )
}
