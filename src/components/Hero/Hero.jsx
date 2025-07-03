import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import styles from './Hero.module.scss';

const titleText = 'Competitive Programmer · ML Engineer · Full-Stack Developer';

const Hero = ({ showResumeButton }) => {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const heroBg = process.env.PUBLIC_URL + '/assets/mr-robot.jpg';

  useEffect(() => {
    const nameTimer = setTimeout(() => setShowName(true), 1000);
    const titleTimer = setTimeout(() => setShowTitle(true), 1500);
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <section
      className={styles.hero}
      id="hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(16, 18, 26, 0.65)), url(${heroBg}) center center/cover no-repeat`
      }}
    >
      <div className={styles.heroContent}>
        <div className={styles.animatedHello}>
          <Typewriter
            words={['Hello, friend.']}
            loop={1}
            cursor
            cursorStyle={<span className={styles.cursor}>_</span>}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        {showName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.name}
          >
            I am Yashraj Gupta
          </motion.div>
        )}
        {showTitle && (
          <motion.div
            className={styles.animatedTitle}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.025
                }
              }
            }}
            style={{marginTop: showName ? '0.2rem' : '1.2rem'}}
          >
            {titleText.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                aria-hidden="true"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
        <div className={styles.heroLinks}>
          <a href="https://www.linkedin.com/in/yashrajguptaiitk/" target="_blank" rel="noopener noreferrer" className={styles.linkedin} aria-label="LinkedIn profile">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/Yash1889" target="_blank" rel="noopener noreferrer" className={styles.github} aria-label="GitHub profile">
            <FaGithub size={28} />
          </a>
          {showResumeButton && (
            <a href="/resume.pdf" className={styles.resumeBtn} download title="Download Resume" aria-label="Download Resume PDF">
              <FaFileDownload size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero; 