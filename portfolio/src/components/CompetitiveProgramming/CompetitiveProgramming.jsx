import React from 'react';
import styles from './CompetitiveProgramming.module.scss';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const stats = [
  {
    name: 'Codeforces',
    value: 1398,
    label: 'Pupil',
    color: '#1f8acb',
    logo: <SiCodeforces />,
    badge: 'Pupil',
    extra: '',
    link: 'https://codeforces.com/profile/yash_fsoc',
    bg: 'linear-gradient(135deg, #1f8acb 0%, #38bdf8 100%)',
  },
  {
    name: 'LeetCode',
    value: 1546,
    label: '500+ Problems',
    color: '#ffa116',
    logo: <SiLeetcode />,
    badge: '500+',
    extra: 'Problems',
    link: 'https://leetcode.com/u/sudoYash/',
    bg: 'linear-gradient(135deg, #ffa116 0%, #f8fafc 100%)',
  },
  {
    name: 'CodeChef',
    value: 1696,
    label: '3★',
    color: '#95551a',
    logo: <SiCodechef />,
    badge: '3★',
    extra: '',
    link: 'https://www.codechef.com/users/yashizzer',
    bg: 'linear-gradient(135deg, #95551a 0%, #f8fafc 100%)',
  },
  {
    name: 'GFG',
    value: 1948,
    label: '4★, 300+ Day Streak',
    color: '#2f8d46',
    logo: <SiGeeksforgeeks />,
    badge: '4★',
    extra: '300+ Streak',
    link: 'https://www.geeksforgeeks.org/user/yashrajgybz2/',
    bg: 'linear-gradient(135deg, #2f8d46 0%, #38bdf8 100%)',
  },
];

const CompetitiveProgramming = () => (
  <section className={styles.cp} id="cp">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2>Competitive Programming</h2>
      <div className={styles.statsGrid}>
        {stats.map((s) => (
          <motion.a
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.statCard}
            key={s.name}
            style={{ borderColor: s.color, background: s.bg }}
            whileHover={{ scale: 1.08, boxShadow: `0 8px 32px 0 ${s.color}55` }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <div className={styles.logo} style={{ background: s.color }}>
              {s.logo}
            </div>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.badge} style={{ background: s.color }}>{s.badge}</div>
            {s.extra && <div className={styles.extra}>{s.extra}</div>}
            <div className={styles.platform}>{s.name}</div>
            <div className={styles.label}>{s.label}</div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CompetitiveProgramming; 