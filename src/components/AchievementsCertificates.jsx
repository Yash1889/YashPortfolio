import React from 'react';
import Slider from 'react-slick';
import styles from './AchievementsCertificates.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const leetcodeBadges = [
  { caption: '50 days 2024 Leetcode', url: '/certificates/leetcode-50days-2024.png', type: 'image' },
  { caption: '50 days 2025 Leetcode', url: 'https://drive.google.com/file/d/1lIm6A0heXE9gs_LaxIfEyX8pNw_UKYBD/preview' },
  { caption: '100 days 2024 Leetcode', url: 'https://drive.google.com/file/d/1PwnYLlPE1O5scUKnZj9laieIi5R9O7UJ/preview' },
  { caption: '100 days 2025 Leetcode', url: 'https://drive.google.com/file/d/1O2ip6D20bBLhQSaD5avSZF0XcQjPTRGz/preview' },
  { caption: 'OCT 2024 Leetcode', url: 'https://drive.google.com/file/d/1u4MKG8iLH0yKxr3VfkkmLNa47JiHFSw6/preview' },
  { caption: 'NOV 2024 Leetcode', url: 'https://drive.google.com/file/d/1sIQP8SPlg078-ItLkAqDsUyFNYIDAyAB/preview' },
  { caption: 'DEC 2024 Leetcode', url: 'https://drive.google.com/file/d/1Jue1h8auWij8Lv3X9gcHz3mu8jU7nmWG/preview' },
  { caption: 'JAN 2025 Leetcode', url: 'https://drive.google.com/file/d/1tf8NF6NQRutm61BAuKIf8otBYZYlzTEr/preview' },
  { caption: 'FEB 2025 Leetcode', url: 'https://drive.google.com/file/d/12Ry3Y3wSqthZphKeu24eo_snhSHX01CG/preview' },
  { caption: 'MAR 2025 Leetcode', url: 'https://drive.google.com/file/d/1kSGEGkJMOBgK8YRZxnfJl0F6QAdiicET/preview' },
  { caption: 'APR 2025 Leetcode', url: 'https://drive.google.com/file/d/1Hh49vR9wr4nhlBbYZQ9gH8iZ1T40ck7n/preview' },
  { caption: 'MAY 2025 Leetcode', url: 'https://drive.google.com/file/d/1APBLa0kaKW_GBaFiag69pxdgIH9kgrHf/preview' },
  { caption: 'JUN 2025 Leetcode', url: 'https://drive.google.com/file/d/1SxBjEFtxKHzw1_-Acm5qORl_fxEZaC2x/preview' },
  { caption: 'Pandas Leetcode', url: 'https://drive.google.com/file/d/1kb4q-cMVzgQ8f4CdG2bgLG0tABiR0CDw/preview' },
];

const codechefBadges = [
  { caption: 'Codechef 1', url: 'https://drive.google.com/file/d/1WOw8DSkfi3yMe2OZxOzR7qXnKofyeBlF/preview' },
  { caption: 'Codechef 2', url: 'https://drive.google.com/file/d/1S9jDF5hFRgBD2h3iRVW5leh3p1FVEJSp/preview' },
  { caption: 'Codechef 3', url: 'https://drive.google.com/file/d/1eisH3ic-7YFrTUfIQRyOa6m-jCihWMz8/preview' },
  { caption: 'Codechef 4', url: 'https://drive.google.com/file/d/1q3IK5sdRQzgY1AGYIKb9FI2FUCRJ6zkw/preview' },
];

const otherAchievements = [
  { caption: 'Intershala', url: 'https://drive.google.com/file/d/1dNHtiplDnqypYcds6eM4NaCgABDCb9PW/preview' },
  { caption: 'Palo Alto', url: 'https://drive.google.com/file/d/1dB_W6eFBjyE0iSc9pgGnvKqjESja2Cvd/preview' },
  { caption: 'GFG 160', url: 'https://drive.google.com/file/d/1dMAaflyZytMm2bV8WYhCP7X5QsnyrqBp/preview' },
  { caption: 'Samsung hackathon', url: 'https://drive.google.com/file/d/1dbIUFl_AKWkIqNFUZTiMTsnZz4tSM7aI/preview' },
  { caption: 'Hack With Gujrat', url: 'https://drive.google.com/file/d/1dOL4UI3bDY-QGhZgTZ8MNF4ukNozezub/preview' },
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
        {item.type === 'image' || item.url.endsWith('.png') || item.url.endsWith('.jpg') || item.url.endsWith('.jpeg') ? (
          <img
            src={item.url}
            alt={item.caption}
            className={styles.certificateFrame}
          />
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