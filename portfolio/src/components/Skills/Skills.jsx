import React from 'react';
import styles from './Skills.module.scss';
import { motion } from 'framer-motion';
import { SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiGit, SiGithub, SiFigma } from 'react-icons/si';

const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'C++', level: 'Advanced', icon: <SiCplusplus />, glow: true },
      { name: 'Python', level: 'Intermediate', icon: <SiPython /> },
      { name: 'JavaScript', level: 'Intermediate', icon: <SiJavascript /> },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'HTML', level: 'Advanced', icon: <SiHtml5 /> },
      { name: 'CSS', level: 'Advanced', icon: <SiCss3 /> },
      { name: 'React', level: 'Advanced', icon: <SiReact />, glow: true },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', level: 'Intermediate', icon: <SiNodedotjs /> },
      { name: 'Express', level: 'Intermediate', icon: <SiExpress /> },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', level: 'Intermediate', icon: <SiGit /> },
      { name: 'GitHub', level: 'Intermediate', icon: <SiGithub /> },
      { name: 'Figma', level: 'Beginner', icon: <SiFigma /> },
      { name: 'REST APIs', level: 'Intermediate', icon: null },
    ],
  },
];

const Skills = () => (
  <section className={styles.skills} id="skills">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2>Skills</h2>
      <div className={styles.groups}>
        {skills.map((g) => (
          <div className={styles.group} key={g.group}>
            <div className={styles.groupTitle}>{g.group}</div>
            <div className={styles.items}>
              {g.items.map((s) => (
                <motion.div
                  className={styles.skill + (s.glow ? ' ' + styles.glow : '')}
                  key={s.name}
                  tabIndex={0}
                  whileHover={{ scale: 1.07, boxShadow: s.glow ? '0 0 16px 2px #38bdf8' : '0 2px 16px 0 #38bdf822' }}
                  whileTap={{ scale: 0.97 }}
                >
                  {s.icon && <span className={styles.icon}>{s.icon}</span>}
                  <span>{s.name}</span>
                  <span className={styles.level}>{s.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills; 