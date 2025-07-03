import React from 'react';
import styles from './Experience.module.scss';
import { FaBriefcase, FaUserTie, FaTrophy, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';

const Experience = () => (
  <section className={styles.experience} id="experience">
    <h2 className={styles.heading}><FaBriefcase className={styles.icon} /> Experience</h2>
    <div className={styles.timeline}>
      <div className={styles.item}>
        <div className={styles.title}><FaUserTie className={styles.icon} /> Internshala Student Partner</div>
        <div className={styles.meta}>Internshala · Remote · Campus Ambassador<br/>Apr 2025 – Jun 2025</div>
        <ul className={styles.desc}>
          <li>Promoted Internshala's internships and skill development programs at KIET through outreach campaigns, peer mentorship, and career awareness initiatives.</li>
          <li>Helped many students explore relevant internships and online trainings.</li>
          <li>Organized promotional events and managed student engagement across digital platforms.</li>
          <li>Developed communication, leadership, and branding skills through hands-on campaign execution.</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.title}><FaLightbulb className={styles.icon} /> Hackathons & Innovation Sprints</div>
        <div className={styles.meta}>Hack With Gujarat · Samsung Hackathon<br/>2024 – Present</div>
        <div className={styles.subitem}><FaRocket className={styles.icon} /> <b>Hack With Gujarat</b></div>
        <ul className={styles.desc}>
          <li>Developed SmartPitch, a simplified platform to help early-stage startups create effective pitch decks.</li>
          <li>Features included pitch templates, investor matching, and AI-based validation tools.</li>
          <li>Targeted towards student founders and bootstrapped entrepreneurs.</li>
        </ul>
        <div className={styles.subitem}><FaRocket className={styles.icon} /> <b>Samsung Hackathon</b></div>
        <ul className={styles.desc}>
          <li>Built a mental wellness assistant tailored for students.</li>
          <li>Integrated mood tracking, sentiment analysis, and habit-based recommendations.</li>
          <li>Stack: React (frontend), Flask (backend), third-party AI for NLP.</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.title}><FaTrophy className={styles.icon} /> ICPC – Competitive Programming</div>
        <div className={styles.meta}>Ranked 4th in College · ICPC Preliminary Round<br/>2024</div>
        <ul className={styles.desc}>
          <li>Secured 4th place in KIET among ICPC participants during internal selections.</li>
          <li>Competed as part of a 3-member team, solving algorithmic challenges under strict time limits.</li>
          <li>Enhanced speed, accuracy, and collaboration through real-time coding sprints.</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.title}><FaUsers className={styles.icon} /> Member · DSTL</div>
        <div className={styles.meta}>KIET Group of Institutions<br/>Feb 2024 – Present</div>
        <ul className={styles.desc}>
          <li>Active contributor to DSTL, the official coding and development club of KIET.</li>
          <li>Participated in technical sessions, collaborative projects, and peer-learning activities around AI, ML, and competitive programming.</li>
          <li>Helped foster a culture of innovation and problem-solving on campus.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience; 