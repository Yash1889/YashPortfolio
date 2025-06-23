import React from 'react';
import styles from './Footer.module.scss';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, link: 'https://github.com/Yash1889', label: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://linkedin.com/in/yash-raj-gupta001/', label: 'LinkedIn' },
  { icon: <FaTwitter />, link: 'https://x.com/Yashrajgupta199', label: 'Twitter' },
  { icon: <SiLeetcode />, link: 'https://leetcode.com/u/sudoYash/', label: 'LeetCode' },
  { icon: <SiCodeforces />, link: 'https://codeforces.com/profile/yash_fsoc', label: 'Codeforces' },
  { icon: <SiCodechef />, link: 'https://www.codechef.com/users/yashizzer', label: 'CodeChef' },
  { icon: <SiGeeksforgeeks />, link: 'https://www.geeksforgeeks.org/user/yashrajgybz2/', label: 'GFG' },
];

const Footer = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('yashrajgupta188@gmail.com');
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <span>📍 Banaras, India</span>
        <span className={styles.email} onClick={handleCopy} title="Copy Email">
          📧 yashrajgupta188@gmail.com
        </span>
      </div>
      <div className={styles.socials}>
        {socials.map(s => (
          <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.icon}>
            {s.icon}
          </a>
        ))}
      </div>
      <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer; 