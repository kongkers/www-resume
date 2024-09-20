import * as React from 'react';
import {TypeAnimation} from 'react-type-animation';
import { IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io';
import { IoMailOutline} from 'react-icons/io5';
import { Icon } from '@chakra-ui/react'
import experienceList from './experience.js';
import ExperienceItem from './components/molecules/experience.items.js';
import EducationItem from './components/molecules/education.item.js';
import educationList from './education.js';
import {devopsSkills, softwareSkills} from './skills.js';
import Skill from './components/atoms/skill.js';
import SideMenu from './components/molecules/side.menu.js'

export default function AppV2() {
  return(
    <div id="home" className="app-main">
      <div id="app-header" className="app-header">
        <div className="app-navbar">
          <div className="app-navbar-logo">
            <a href="#home">
              <img src="/public/assets/dk_logo_white_bg.png" height="64"/>
            </a>
          </div>
          <div className="app-navbar-menu">
            <div className="horizontal-menu">
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
          </div>
          <div className="app-navbar-right">

          </div>
        </div>
        <div className="app-intro">
          <div className="profile-container">
            <div className="profile-img-container">
              <img className="profile-img" src="/public/assets/profile_square.jpg" alt="Profile image"/>
            </div>
          </div>
          <div className="app-intro-about">
            <div className="intro-container">
              <div className="hero-welcome">
                👋 I'm
              </div>
              <div className="hero-name">
                David Kong.
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
        </div>
        <div className="app-intro-socials">
          <div className="socials-left">
            <div className="social-logo-left">
              <div className="social-logo-container">
                <Icon boxSize={36} as={IoLogoInstagram} />
              </div>
            </div>
            <div className="social-details-left">
              <div className="social-details-container">
                <div className="social-details-heading">
                  Instagram
                </div>
                <div className="social-details-link">
                  <a href="https://www.instagram.com">@kongkers_dev</a>
                </div>
              </div>
            </div>
          </div>
          <div className="socials-middle">
            <div className="social-details">
              <div className="social-details-container">
                <div className="social-details-heading">
                  LinkedIn
                </div>
                <div className="social-details-link">
                  <a href="https://linkedin.com/in/">/in/david-kong</a>
                </div>
              </div>
            </div>
            <div className="social-logo-right">
              <div className="social-logo-container">
                <Icon boxSize={36} as={IoLogoLinkedin} />
              </div>
            </div>
          </div>
          <div className="socials-right">
            <div className="social-details">
              <div className="social-details-container">
                <div className="social-details-heading">
                  Drop your Message
                </div>
                <div className="social-details-link">
                  <a href="mailto:david@kongkers.dev">david@kongkers.dev</a>
                </div>
              </div>
            </div>
            <div className="social-logo-right">
              <div className="social-logo-container">
                <Icon boxSize={36} as={IoMailOutline}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
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
                      <EducationItem item={item}/>
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
                  softwareSkills.map(skill => (<Skill skill={skill}/>))
                }
              </div>
              <h3>Devops</h3>
              <div className="skills-container">
                {
                  devopsSkills.map(skill => (<Skill skill={skill}/>))
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
