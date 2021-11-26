import { contact } from 'portfolio';

import './style.css';

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section id="contact" className="section contact center">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
