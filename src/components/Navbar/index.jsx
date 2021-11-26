import { useState } from 'react';
import {
  Close as CloseIcon,
  Menu as MenuIcon,
  WbSunnyRounded as WbSunnyRoundedIcon,
  Brightness2 as Brightness2Icon,
} from '@material-ui/icons';

import { useThemeContext } from 'contexts/theme';
import { projects, skills, contact } from 'portfolio';

import './style.css';

const Navbar = () => {
  const { themeName, toggleTheme } = useThemeContext();
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        className="nav__list"
        style={{ display: showNavList ? 'flex' : null }}
      >
        {projects.length > 0 && (
          <li className="nav__list-item">
            <a
              className="link link--nav"
              href="#projects"
              onClick={toggleNavList}
            >
              Projects
            </a>
          </li>
        )}

        {skills.length > 0 && (
          <li className="nav__list-item">
            <a
              className="link link--nav"
              href="#skills"
              onClick={toggleNavList}
            >
              Skills
            </a>
          </li>
        )}

        {contact.email && (
          <li className="nav__list-item">
            <a
              className="link link--nav"
              href="#contact"
              onClick={toggleNavList}
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        type="button"
        onClick={toggleTheme}
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
        type="button"
        onClick={toggleNavList}
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
