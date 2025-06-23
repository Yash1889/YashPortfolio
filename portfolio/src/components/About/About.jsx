import React from 'react';
import styles from './About.module.scss';
import { motion } from 'framer-motion';

const highlights = [
  '2nd Year CSE (AI) @ KIET',
  '1000+ problems solved (LeetCode, Codeforces, GFG, CodeChef)',
  'React.js, Node.js, C++, Python, JavaScript',
  'Full-stack & ML Projects',
  'Clean code & modern UI/UX',
  'Always learning, always building',
];

const About = () => (
  <section className={styles.about} id="about">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className={styles.inner}>
      <div className={styles.left}>
        <h2>About Me</h2>
        <h3 className={styles.headline}>Building impactful products at the intersection of <span>code</span> and <span>intelligence</span>.</h3>
        <p className={styles.bio}>
          I'm Yashraj Gupta, a passionate developer and competitive programmer. I love solving real-world problems, building full-stack apps, and exploring the power of AI. My journey is driven by curiosity, discipline, and a relentless pursuit of clean, scalable solutions.
        </p>
      </div>
      <div className={styles.right}>
        <ul className={styles.highlights}>
          {highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
      </div>
    </motion.div>
  </section>
);

export default About; 