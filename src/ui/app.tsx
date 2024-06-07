import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ExperienceItem from './components/molecules/experience.items.js';
import EducationItem from './components/molecules/education.item.js';
import Skill from './components/atoms/skill.js';

const experienceList = [
  {
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2023 to Present',
    position: 'Senior Full Stack Engineer',
    company: 'Rushfaster',
    summary: `<ul>
      <li>Building a server side rendered react website.</li>
      <li>Building a CMS platform to power the website.</li>
      <li>Implemented CI/CD pipeline</li>
      </ul>
    `,
  },
  {
    logo: 'https://prod.mobile-api.woolworths.com.au/zeus/mnemosyne/v1/public/activity/supermarkets_division_logo.png',
    timeframe: '2019 to Present',
    position: 'Technical Lead',
    company: 'WooliesX',
    summary: `<ul>
      <li>Designed, architected and led the delivery of the Everyday Rewards App for NZ</li>
      <li>Helped lead the design and delivery of the Everyday Rewards App for Australia</li>
      <li>Architected the integration and migration of Eagle Eye into the Everyday Rewards App</li>
      <li>Delivery lead for the eReceipts project for the Everyday Rewards App()</li>
      <li>Built helper tools for fetching accessTokens for testing and automation</li>
      <li>Built CMS for Everyday Rewards App (Typescript, React SSR)</li>
      <li>Built the Ads and Content Service to connect Woolworths Shopping App with Adobe Target</li>
      <li>Built integration services to help with the migration of services from legacy Rewards platform to Eagle Eye.</li>
      <li>Built an Android App to help testers create test data (Kotlin/Compose)</li>
      <li>Built an iOS app to prototype GraphQL Subscriptions (Swift/SwiftUI)</li>
    </ul>`,
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
    logo: '/public/assets/excelera_round@2x.png',
    timeframe: '2008 to Present',
    position: 'Senior Software Engineer',
    company: 'Excelera Pty Ltd',
    summary: 'This is a summary',
  }];

const educationList = [{
  logo: '/public/assets/unsw.png',
  timeframe: '1996 to 2000',
  school: 'University of New South Wales',
  certification: 'Bachelor of Electrical Engineering',
  summary: `<ul>
              <li>Completed all units required. But did not finish work experience</li>
              <li>Achieved in High Distinction in computer science units</li>
            </ul>
            `
}, {
  logo: '/public/assets/east_hills_boys_hs.png',
  timeframe: '1991 to 1996',
  school: 'East Hills Boys Technology High School',
  certification: 'High School',
  summary: `<ul>
              <li>Awarded Dux for year 12.</li>
              <li>Presented School in the debating team</li>
            </ul>`
}]

const softwareSkills = [
  'javascript',
  'nodejs',
  'react',
  'kotlin',
  'server side react',
  'bun',
  'swift',
  'postgresql',
  'cosmosdb',
  'mongodb',
  'graphql',
  'typescript',
  'figma',
  'webpack',
];

const devopsSkills = [
  'azure',
  'gcp',
  'aws',
  'kubernetes',
  'route53',
  'terraform',
  'docker',
  'linux',
  'apigee',
  'bash',
  'powershell',
  'jenkins',
  'sumologic',
  'splunk',
  'rancher',
  'grafana',
]

export default function App() {
  return(
    <div className="app-main">
      <div className="nav-menu">
        <div className="main-menu">
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
          </ul>
        </div>
        <div className="logo-container">
          <img src="/public/assets/dk_logo.svg"/>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-left">
        </div>
        <div className="hero-right">
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
          <img src="/public/assets/profile@2x.jpg" className="hero-profile"/>
        </div>

        <div className="hero-right">
          <div className="about-me">
            <h1>About Me</h1>
            I'm a multi-discipline software engineer with an innate curiousity that loves to tinker.
            With extensive experience in DevOps, software architecture, systems integration and backend development.
            <p>
              I have been working for WooliesX for the last 5 years, building and supporting the Everyday Rewards App
              for both Australia and NZ.
            </p>
            <p>
              I have a proven track record for building and scaling applications to millions of users, with an emphasis
              on security.
            </p>
          </div>
        </div>
      </div>
      <div className="education-container">
        <div className="education-menu">
          <div className="education-sticky">
            <ul>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="experience" className="education-content">
          <div>
            <h2>Experience</h2>
            <ul className="resume-list">
              {experienceList.map(item => (
                <li>
                  <ExperienceItem item={item}/>
                </li>
              ))
              }
            </ul>
          </div>
          <div id="education">
            <h2>Education</h2>
            <ul className="resume-list">
              {
                educationList.map(item => (
                  <li>
                    <EducationItem item={item} />
                  </li>
                ))
              }
            </ul>
          </div>
          <div id="skills">
            <h2>Skills</h2>
            <h3>Software Engineering</h3>
            <div className="skills-container">
              {
                softwareSkills.map(skill => (<Skill skill={skill}))
              }
            </div>
            <h3>Devops</h3>
            <div className="skills-container">
              {
               devopsSkills.map(skill => (<Skill skill={skill}))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-legal-notice">
          Copyright &copy; 2024 David Kong. All rights reserved.
        </div>
      </div>
    </div>
  )
}
