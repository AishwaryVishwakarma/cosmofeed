import Carousel from '@/components/Carousel/Carousel';
import Layout from '@/components/Layout/Layout';
import {nanoid} from '@reduxjs/toolkit';
import Image from 'next/image';

import Gel from '../../public/gel.jpg';
import styles from './styles.module.scss';

const slides = [
  <li key={nanoid()} className={styles.slide}>
    <div className={styles.videoContainer}>
      <video autoPlay muted loop playsInline controls={false}>
        <source src='/cup.webm' type='video/webm' />
        <source src='/cup.mp4' type='video/mp4' />
      </video>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Magic Cups</span>
        <br /> Sip & Be Amazed!
      </div>
    </div>
    <div className={`${styles.videoContainer} ${styles.sewing}`}>
      <video autoPlay muted loop playsInline controls={false}>
        <source src='/sewing.webm' type='video/webm' />
        <source src='/sewing.mp4' type='video/mp4' />
      </video>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Revolutionize Your Craft</span> <br /> Sewing Machines Unleashed!
      </div>
    </div>
    <div className={`${styles.imageContainer} ${styles.gel}`}>
      <Image
        src={Gel.src}
        alt='Body refreshing gel'
        height={Gel.height}
        width={Gel.width}
        placeholder='blur'
        blurDataURL={Gel.blurDataURL}
        loading='lazy'
      />
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Revitalize Your Skin</span> <br /> Body Refreshing Gel!
      </div>
    </div>
  </li>,
  <li key={nanoid()} className={styles.slide}>
    <div className={styles.videoContainer}>
      <video autoPlay muted loop playsInline controls={false}>
        <source src='/cup.mp4' type='video/mp4' />
      </video>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Magic Cups</span>
        <br /> Sip & Be Amazed!
      </div>
    </div>
  </li>,
  <li key={nanoid()} className={styles.slide}>
    <div className={styles.videoContainer}>
      <video autoPlay muted loop playsInline controls={false}>
        <source src='/cup.mp4' type='video/mp4' />
      </video>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Magic Cups</span>
        <br /> Sip & Be Amazed!
      </div>
    </div>
    <div className={`${styles.videoContainer} ${styles.sewing}`}>
      <video autoPlay muted loop playsInline controls={false}>
        <source src='/sewing.mp4' type='video/mp4' />
      </video>
      <div className={styles.backdrop} />
      <div className={styles.content}>
        <span>Revolutionize Your Craft</span> <br /> Sewing Machines Unleashed!
      </div>
    </div>
  </li>,
];

const HomePage = () => {
  return (
    <Layout className={styles.homePage}>
      <header className={styles.hero}>
        <video autoPlay muted loop playsInline controls={false}>
          <source src='/hero.webm' type='video/webm' />
          <source src='/hero.mp4' type='video/mp4' />
        </video>
        <div className={styles.backdrop} />
        <div className={styles.content}>
          <h1>Discover Urban: Your Style, Your Way!</h1>
          <div className={styles.divider} />
          <h2>
            Shop the latest trends effortlessly at Urban. From fashion to home
            decor, find everything you need in one place. Explore now!
          </h2>
        </div>
      </header>
      <section className={`${styles.bestseller} layouted`}>
        <Carousel heading='Bestseller' slidesData={slides} />
      </section>
    </Layout>
  );
};

export default HomePage;
