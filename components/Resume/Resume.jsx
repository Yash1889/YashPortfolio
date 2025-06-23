import React from 'react';
import styles from './Resume.module.scss';
import { motion } from 'framer-motion';

const Resume = () => (
  <section className={styles.resume} id="resume">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2>Resume</h2>
      <a href="/resume.pdf" className={styles.downloadBtn} download>Download Resume</a>
      <div className={styles.githubStats}>
        <img src="https://github-readme-stats.vercel.app/api?username=Yash1889&show_icons=true&theme=dark" alt="GitHub Stats" />
      </div>
    </motion.div>
  </section>
);

export default Resume; 