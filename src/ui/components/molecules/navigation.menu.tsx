import useScrollPosition from '@react-hook/window-scroll';

export default function NavigationMenu() {
  let top = 0;
  if(typeof window !== 'undefined') {
    const element = document.getElementById('hero-container');
    const rect = element.getBoundingClientRect();
    top = rect.height;
  }

  const scrollY = useScrollPosition(60);

  if(scrollY > top) {
    return(
      <div className="navigation-menu shadow">
        <div className="nav-logo">
          <a href="#home">
            <img src="/public/assets/dk_logo.svg" height="36"/>
          </a>
        </div>
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
    );
  }
  return null;
}
