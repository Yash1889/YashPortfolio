import React from 'react';
import Slider from 'react-slick';
import styles from './AchievementsCertificates.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const leetcodeBadges = [
  { caption: '50 days 2024 Leetcode', url: '/certificates/leetcode-50days-2024.png', type: 'image' },
  { caption: '50 days 2025 Leetcode', url: '/certificates/leetcode-50days-2025.png', type: 'image' },
  { caption: '100 days 2024 Leetcode', url: '/certificates/leetcode-100days-2024.png', type: 'image' },
  { caption: '100 days 2025 Leetcode', url: '/certificates/leetcode-100days-2025.png', type: 'image' },
  { caption: 'OCT 2024 Leetcode', url: '/certificates/leetcode-oct-2024.png', type: 'image' },
  { caption: 'NOV 2024 Leetcode', url: '/certificates/leetcode-nov-2024.png', type: 'image' },
  { caption: 'DEC 2024 Leetcode', url: '/certificates/leetcode-dec-2024.png', type: 'image' },
  { caption: 'JAN 2025 Leetcode', url: '/certificates/leetcode-jan-2025.png', type: 'image' },
  { caption: 'FEB 2025 Leetcode', url: '/certificates/leetcode-feb-2025.png', type: 'image' },
  { caption: 'MAR 2025 Leetcode', url: '/certificates/leetcode-mar-2025.png', type: 'image' },
  { caption: 'APR 2025 Leetcode', url: '/certificates/leetcode-apr-2025.png', type: 'image' },
  { caption: 'MAY 2025 Leetcode', url: '/certificates/leetcode-may-2025.png', type: 'image' },
  { caption: 'JUN 2025 Leetcode', url: '/certificates/leetcode-jun-2025.png', type: 'image' },
  { caption: 'Pandas Leetcode', url: '/certificates/leetcode-pandas.png', type: 'image' },
];

const codechefBadges = [
  { caption: 'Codechef 1', url: '/certificates/CodeChefBadge(2).png', type: 'image' },
  { caption: 'Codechef 2', url: '/certificates/CodeChefBadge(3).png', type: 'image' },
  { caption: 'Codechef 3', url: '/certificates/CodeChefBadge(4).png', type: 'image' },
  { caption: 'Codechef 4', url: '/certificates/coding-contest-2nd.jpeg', type: 'image' },
];

const otherAchievements = [
  { caption: 'Intershala', url: '/certificates/internshala.jpeg', type: 'image' },
  { caption: 'Samsung hackathon', url: '/certificates/samsung-hackathon.jpeg', type: 'image' },
  { caption: 'Hack With Gujrat', url: '/certificates/hack-with-gujrat.jpeg', type: 'image' },
  { caption: 'Cybersecurity Foundation', url: '/certificates/cybersecurity-foundation-certificate.pdf', type: 'pdf' },
  { caption: 'Yashizzer 500 Difficulty Rating', url: '/certificates/yashizzer-500-difficulty-rating.pdf', type: 'pdf' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const renderSlides = (items) =>
  items.map((item, idx) => (
    <div key={idx} className={styles.slide}>
      <div className={styles.slideContent}>
        {item.type === 'image' || item.url.match(/\.(png|jpg|jpeg)$/i) ? (
          <img
            src={item.url}
            alt={item.caption}
            className={styles.certificateFrame}
            loading="lazy"
            onError={(e) => {
              console.error('Image failed to load:', item.url);
              e.target.style.display = 'none';
            }}
          />
        ) : item.type === 'pdf' || item.url.match(/\.pdf$/i) ? (
          <object
            data={item.url}
            type="application/pdf"
            className={styles.certificateFrame}
            aria-label={item.caption}
          >
            <div className={styles.pdfFallback}>
              <p>PDF preview not supported.</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
                Open PDF ↗
              </a>
            </div>
          </object>
        ) : (
          <iframe
            src={item.url}
            title={item.caption}
            className={styles.certificateFrame}
            allow="autoplay"
          />
        )}
        <div className={styles.caption}>{item.caption}</div>
      </div>
    </div>
  ));

const AchievementsCertificates = () => (
  <section className={styles.achievements} id="achievements">
    <h2>Achievements & Certificates</h2>
    <div className={styles.sliderSection}>
      <h3>Leetcode Achievements & Badges</h3>
      <Slider {...settings}>{renderSlides(leetcodeBadges)}</Slider>
    </div>
    <div className={styles.sliderSection}>
      <h3>Codechef Achievements & Badges</h3>
      <Slider {...settings}>{renderSlides(codechefBadges)}</Slider>
    </div>
    <div className={styles.sliderSection}>
      <h3>Other Achievements & Certificates</h3>
      <Slider {...settings}>{renderSlides(otherAchievements)}</Slider>
    </div>
  </section>
);

export default AchievementsCertificates; 