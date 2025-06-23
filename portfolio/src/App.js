import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import CompetitiveProgramming from './components/CompetitiveProgramming/CompetitiveProgramming';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero showResumeButton />
      <About />
      <CompetitiveProgramming />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
