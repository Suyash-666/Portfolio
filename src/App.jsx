import './index.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const PAGES = ['home', 'skills', 'projects', 'education', 'contact'];
const pageTitles = {
  home: 'Home',
  skills: 'Skills',
  projects: 'Projects',
  education: 'Education',
  contact: 'Contact',
};

const pageContent = {
  skills: (
    <div className="section-content">
      <div className="section-title">Skills</div>
      <div className="skills-grid">
        <div>JavaScript</div><div>React</div><div>Node</div><div>Express</div><div>MongoDB</div>
        <div>Python</div><div>C++</div><div>SQL</div><div>Firebase</div><div>AWS</div>
      </div>
    </div>
  ),
  projects: (
    <div className="section-content">
      <div className="section-title">Projects</div>
      <div className="project-list">
        <div className="project-item">
          <a className="project-name project-link" href="https://suyash-666.github.io/finance-tracker/" target="_blank" rel="noopener noreferrer">
            Expense Tracker
          </a>
          <div className="project-tech">React, Firebase, MERN</div>
        </div>
        <div className="project-item">
          <a className="project-name project-link" href="https://medical-recommendation-system-f037.onrender.com" target="_blank" rel="noopener noreferrer">
            ML Healthcare System
          </a>
          <div className="project-tech">Python, Flask, ML</div>
        </div>
      </div>
    </div>
  ),
  education: (
    <div className="section-content">
      <div className="section-title">Education</div>
      <div className="section-detail">B.E. IT</div>
      <div className="section-detail">ARMIET, Mumbai University</div>
      <div className="section-detail">CGPA: 7.444</div>
    </div>
  ),
  contact: (
    <div className="section-content">
      <div className="section-title">Contact</div>
      <div className="section-detail">Email: <a href="mailto:sp4367475@gmail.com">sp4367475@gmail.com</a></div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/suyash-pawar-539741202/" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'0.5em'}}><rect width="24" height="24" rx="4" fill="#0A66C2"/><path d="M7.1 8.6c.8 0 1.3-.5 1.3-1.2 0-.7-.5-1.2-1.3-1.2-.8 0-1.3.5-1.3 1.2 0 .7.5 1.2 1.3 1.2zm-1.1 1.7h2.2v7.1H6V10.3zm3.7 0h2.1v1h.1c.3-.6 1-1.2 2-1.2 2.1 0 2.5 1.4 2.5 3.2v4.1h-2.2v-3.6c0-.9-.1-2-1.3-2-1.3 0-1.5 1-1.5 2v3.6h-2.2V10.3zm8.2 7.1c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-13c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v13z" fill="#fff"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/Suyash-666" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'0.5em'}}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.18 9.18 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" fill="#fff"/></svg>
          GitHub
        </a>
        <a href="https://leetcode.com/u/Suyash_666/" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
          <svg width="22" height="22" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle',marginRight:'0.5em'}}><rect width="50" height="50" rx="10" fill="#FFA116"/><path d="M35.5 24.5h-17m0 0l6.5-6.5m-6.5 6.5l6.5 6.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          LeetCode
        </a>
      </div>
    </div>
  ),
};

const directions = {
  skills: { enter: { x: '100%', y: 0 }, exit: { x: '-100%', y: 0 } },
  projects: { enter: { x: '-100%', y: 0 }, exit: { x: '100%', y: 0 } },
  education: { enter: { x: 0, y: '100%' }, exit: { x: 0, y: '-100%' } },
  contact: { enter: { x: 0, y: '-100%' }, exit: { x: 0, y: '100%' } },
  home: { enter: { x: 0, y: 0 }, exit: { x: 0, y: 0 } },
};

export default function App() {
  const [page, setPage] = useState('home');
  const [direction, setDirection] = useState('');

  // Navigation handler
  const goTo = (target) => {
    if (target === 'skills') setDirection('left');
    else if (target === 'projects') setDirection('right');
    else if (target === 'education') setDirection('up');
    else if (target === 'contact') setDirection('down');
    else setDirection('');
    setPage(target);
  };

  const goBack = () => {
    // Reverse direction for AnimatePresence
    if (page === 'skills') setDirection('right');
    else if (page === 'projects') setDirection('left');
    else if (page === 'education') setDirection('down');
    else if (page === 'contact') setDirection('up');
    else setDirection('');
    setPage('home');
  };

  // Animation variants for each direction
  const getVariants = (key) => {
    if (key === 'home') {
      return {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        exit: { opacity: 0, scale: 0.98 },
      };
    }
    const d = directions[key];
    return {
      initial: { opacity: 0, x: d.enter.x, y: d.enter.y },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: d.exit.x, y: d.exit.y },
    };
  };

  return (
    <div className="app-bg min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="css-stars" />
      <AnimatePresence mode="wait" initial={false}>
        {page === 'home' && (
          <motion.div
            key="home"
            className="fullpage-section"
            variants={getVariants('home')}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="hero-section">
              <div className="hero-name">Suyash Pawar</div>
              <div className="hero-subtitle">IT Engineer | MERN Developer | Problem Solver</div>
            </div>
            <div className="nav-cards">
              <div className="nav-card" onClick={() => goTo('education')}>Education</div>
              <div className="nav-card" onClick={() => goTo('skills')}>Skills</div>
              <div className="nav-card" onClick={() => goTo('projects')}>Projects</div>
              <div className="nav-card" onClick={() => goTo('contact')}>Contact</div>
            </div>
          </motion.div>
        )}
        {PAGES.filter((p) => p !== 'home').map((key) =>
          page === key ? (
            <motion.div
              key={key}
              className="fullpage-section"
              variants={getVariants(key)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <div className="glass-card section-zone">
                <div className="section-header">
                  <span className="section-title">{pageTitles[key]}</span>
                  <button className="back-btn" onClick={goBack}>Back</button>
                </div>
                <div className="section-body">{pageContent[key]}</div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
