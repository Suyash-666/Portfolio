import { useRef } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import useReveal from './lib/useReveal.js';

export default function App() {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
