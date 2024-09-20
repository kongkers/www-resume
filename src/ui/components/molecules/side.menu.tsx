import * as React from 'react';
import useScrollPosition from '@react-hook/window-scroll';

const getScrollPosition = (elementId) => {
  if(typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    const rect = element.getBoundingClientRect();
    return rect.top;
    // return document.documentElement.scrollTop + rect.top - document.documentElement.clientHeight;
  }
  return 0;
}

export default function SideMenu() {
  const [experienceTitle, setExperienceTitle] = React.useState('Experience');
  const [educationTitle, setEducationTitle] = React.useState('Education');
  const [skillsTitle, setSkillsTitle] = React.useState('Skills');
  let triggerY = 0;

  if (typeof window !== 'undefined') {
    const viewPortHeight = document.documentElement.clientHeight;
    triggerY = viewPortHeight - 50;
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const experience = getScrollPosition('experience');
      const skills = getScrollPosition('skills');
      const education = getScrollPosition('education');
      if (experience > 0 && experience <= triggerY) {
        setExperienceTitle('<b>- Experience</b>');
        setEducationTitle('Education');
        setSkillsTitle('Skills');
      }
      if(education > 0 && education <= triggerY) {
        setExperienceTitle('Experience');
        setEducationTitle('<b>- Education</b>');
        setSkillsTitle('Skills');
      }
      if(skills > 0 && skills <= triggerY) {
        setSkillsTitle('<b>- Skills</b>');
        setExperienceTitle('Experience');
        setEducationTitle('Education');
      }
    });
  });

  return (
    <ul>
      <li>
        <a href="#experience" dangerouslySetInnerHTML={{__html: experienceTitle}}></a>
      </li>
      <li>
        <a href="#education" dangerouslySetInnerHTML={{__html: educationTitle}} />
      </li>
      <li>
        <a href="#skills" dangerouslySetInnerHTML={{__html: skillsTitle}} />
      </li>
    </ul>
  )
}
