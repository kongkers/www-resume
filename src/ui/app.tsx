import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ExperienceItem from './components/molecules/experience.items.js';
import EducationItem from './components/molecules/education.item.js';
import Skill from './components/atoms/skill.js';
import experienceList from './experience.js';
import educationList from './education.js';
import NavigationMenu from './components/molecules/navigation.menu.js';
import { softwareSkills, devopsSkills } from './skills.js';
import SideMenu from './components/molecules/side.menu.js';


export default function App() {

  return(
    <div id="home" className="app-main">
      <NavigationMenu />
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
      <div id="hero-container" className="hero-container">
        <div className="hero-left">
        </div>
        <div className="hero-right">
        </div>
        <div className="hero-intro">
          <div className="hero-welcome">
            👋 I'm
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
            <SideMenu />
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
                softwareSkills.map(skill => (<Skill skill={skill} />))
              }
            </div>
            <h3>Devops</h3>
            <div className="skills-container">
              {
               devopsSkills.map(skill => (<Skill skill={skill} />))
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
