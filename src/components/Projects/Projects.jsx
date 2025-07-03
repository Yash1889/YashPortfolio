import React from 'react';
import styles from './Projects.module.scss';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaPlay, FaRobot, FaDatabase, FaFilm, FaUser } from 'react-icons/fa';

const projects = [
  {
    title: 'MovieTracker',
    desc: 'A modern, responsive web application for tracking and discovering movies. Features real-time search, watchlist management, star ratings, and a beautiful dark theme UI.',
    features: [
      'Real-time Movie Search',
      'Watchlist & Watched Movies',
      'Star-based Rating System',
      'Trending Movies Discovery',
      'Local Storage Persistence',
      'Responsive Design',
      'Dark Theme UI',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'TMDB API', 'Local Storage'],
    live: 'https://movies-hub-sepia-sigma.vercel.app',
    repo: 'https://github.com/Yash1889/movies-hub',
    icon: <FaFilm />,
    category: 'Web Application',
  },
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
    icon: <FaPlay />,
    category: 'Web Application',
  },
  {
    title: 'Spring Boot CRUD',
    desc: 'A robust Spring Boot application demonstrating full CRUD operations with a clean MVC architecture, featuring student management, RESTful APIs, and modern web interface.',
    features: [
      'Complete CRUD Operations',
      'Spring Data JPA Integration',
      'RESTful API Endpoints',
      'Thymeleaf Frontend',
      'H2 Database',
      'MVC Architecture',
      'Form Validation',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Thymeleaf', 'H2 Database', 'Maven'],
    live: 'https://web-production-4cea6.up.railway.app',
    repo: 'https://github.com/Yash1889/crud-spring-boot',
    icon: <FaDatabase />,
    category: 'Backend Application',
  },
  {
    title: 'GroqJarvis - AI Assistant',
    desc: 'A modern, feature-rich AI assistant powered by Groq API with multiple personality modes, PDF support, speech synthesis, and a beautiful ChatGPT-like interface.',
    features: [
      'Multi-Mode AI Personalities (7 different modes)',
      'PDF Document Processing & Analysis',
      'Text-to-Speech Synthesis',
      'Real-time Chat Interface',
      'Dark/Light Mode Toggle',
      'Responsive Design',
      'Conversation History',
    ],
    stack: ['Python', 'Flask', 'Groq API', 'JavaScript', 'CSS', 'PyPDF2', 'Web Speech API'],
    live: '',
    repo: 'https://github.com/Yash1889/GROQ-ChatBot',
    icon: <FaRobot />,
    category: 'AI Application',
  },
  {
    title: 'Personal Portfolio',
    desc: 'A modern, responsive portfolio website showcasing my skills, projects, and competitive programming achievements with smooth animations and professional design.',
    features: [
      'Responsive Design & Modern UI/UX',
      'Smooth Animations with Framer Motion',
      'Competitive Programming Stats Integration',
      'Interactive Skills Section',
      'Project Showcase with Live Demos',
      'Dark/Light Theme Support',
      'Contact Information & Social Links',
    ],
    stack: ['React.js', 'SCSS', 'Framer Motion', 'React Icons', 'Vercel'],
    live: 'https://yash-portfolio-8eoa.vercel.app',
    repo: 'https://github.com/Yash1889/YashPortfolio',
    icon: <FaUser />,
    category: 'Portfolio Website',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }}
      >
        <h2>Featured Projects</h2>
        <p className={styles.subtitle}>Explore my latest work across different technologies and domains</p>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              className={styles.card}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.titleSection}>
                  <div className={styles.icon}>{project.icon}</div>
                  <div>
                    <h3>{project.title}</h3>
                    <span className={styles.category}>{project.category}</span>
                  </div>
                </div>
                <div className={styles.links}>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Live Demo"
                      className={styles.liveLink}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Source Code"
                      className={styles.repoLink}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
              
              <p className={styles.desc}>{project.desc}</p>
              
              <div className={styles.featuresSection}>
                <h4>Key Features</h4>
                <ul className={styles.features}>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.stackSection}>
                <h4>Tech Stack</h4>
                <div className={styles.stack}>
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 