import React from 'react';
import styles from './Projects.module.scss';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'TLE Eliminators',
    desc: 'A comprehensive system to track and manage student progress on Codeforces. Features include student management, Codeforces progress tracking, contest history visualization, problem solving analytics, automated data sync, inactivity detection, and more.',
    features: [
      'Student Management (CRUD operations)',
      'Codeforces Progress Tracking',
      'Contest History Visualization',
      'Problem Solving Analytics',
      'Automated Data Synchronization',
      'Inactivity Detection & Email Notifications',
      'Responsive Design with Light/Dark Mode',
    ],
    stack: ['React.js', 'Material-UI', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Nodemailer'],
    live: 'https://codeforces-5.onrender.com',
    repo: 'https://github.com/Yash1889/codeforces',
    image: '',
  },
  {
    title: 'Spring Boot CRUD Example',
    desc: 'A simple Spring Boot app demonstrating CRUD operations on a Student entity. Built with Java, Spring Boot, Thymeleaf, and H2 in-memory database.',
    features: [
      'Spring Data JPA',
      'Thymeleaf Frontend',
      'H2 In-memory Database',
      'MVC + Service + Repo Architecture',
    ],
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'H2'],
    live: '',
    repo: 'https://github.com/Yash1889/crud-spring-boot',
    image: '',
  },
  {
    title: 'Movies Hub',
    desc: 'A movie tracker app with real-time search, star ratings, and IMDB-style UI. Features include watchlist, watched movies, and a clean responsive design.',
    features: [
      'Real-time Search',
      'Star-based Ratings',
      'Watchlist & Watched',
      'IMDB-style UI',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    repo: 'https://github.com/Yash1889/movies-hub',
    image: '',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <motion.div
              className={styles.card}
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <div className={styles.cardHeader}>
                <h3>{p.title}</h3>
                <div className={styles.links}>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" title="Live Demo"><FaExternalLinkAlt /></a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" title="Source Code"><FaGithub /></a>}
                </div>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.features}>
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className={styles.stack}>{p.stack.join(' · ')}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 