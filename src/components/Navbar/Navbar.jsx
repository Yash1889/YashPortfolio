import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'cp', label: 'Competitive Programming' },
  { id: 'achievements', label: 'Achievements' },
];

const Navbar = () => {
  // Scrollspy logic
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: 0 };
        const rect = el.getBoundingClientRect();
        return { id: link.id, top: rect.top };
      });
      const current = offsets.reduce((acc, cur) => {
        if (cur.top < window.innerHeight / 2) return cur;
        return acc;
      }, offsets[0]);
      setActive(current.id);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Yashraj Gupta</div>
      <ul className={styles.links}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? styles.active : ''}
              onClick={e => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 