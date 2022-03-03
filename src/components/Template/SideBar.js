import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/tade.jpg`} alt="" />
      </Link>
      <header>
        <h2>TAdale D&apos;Addsis Abeba</h2>
        <p><a href="mailto:tadele@gmail.com">tadele@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Tadele. I like building things.
        I am a <a href="https://astue.du/">Arba Minch Geology</a> graduate, EC Admas, and
        the Senior Application Developer and System Engeneer <a href="https://aa.com">Adama</a>. Before Adamas I was
        at <a href="https://matroid.com">Bechina</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mulugeta A&apos;Addis Abeba <Link to="/">gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
