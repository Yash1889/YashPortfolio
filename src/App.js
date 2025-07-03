import React from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import CompetitiveProgramming from './components/CompetitiveProgramming/CompetitiveProgramming';
import AchievementsCertificates from './components/AchievementsCertificates';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero showResumeButton />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CompetitiveProgramming />
      <AchievementsCertificates />
      <Footer />
    </div>
  );
}

export default App;
