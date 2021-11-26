import uniqid from 'uniqid';

import { skills } from 'portfolio';

import './style.css';

const Skills = () => {
  if (skills.length === 0) return null;

  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
