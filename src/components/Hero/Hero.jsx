import React from 'react';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg'; // Placeholder, to be replaced

const Hero = ({ showResumeButton }) => {
  // Typing animation logic will be added later
  return (
    <section className={styles.hero} id="hero">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={styles.inner}>
        <div className={styles.left}>
          <motion.h1 
            className={styles.headline}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>Yashraj Gupta</span>
          </motion.h1>
          <motion.div 
            className={styles.tagline}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Competitive Programmer. Full-Stack Developer. ML Enthusiast.
          </motion.div>
        </div>
        <div className={styles.right}>
          <motion.div 
            className={styles.profileCard}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 48px 8px #00ff41cc, 0 2px 24px 0 #00ff4133",
              borderColor: "#00ff41"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              src={profileImg} 
              alt="Yashraj Gupta" 
              className={styles.profileImg}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
            <div className={styles.glow}></div>
            <motion.div 
              className={styles.cardContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className={styles.terminalLine}>
                HELLO FRIENDS
                <motion.span
                  className={styles.cursor}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                >
                  _
                </motion.span>
              </div>
              <motion.div 
                className={styles.cardCta}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.a 
                  href="#projects" 
                  className={styles.cardBtn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                {showResumeButton && (
                  <motion.a 
                    href="/resume.pdf" 
                    className={styles.cardBtn} 
                    download
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Resume
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.bgAnim}></div>
    </section>
  );
};

export default Hero; 