'use client';

import {Caret} from '@/assets/icons';
import Image from 'next/image';
import React, {type HTMLAttributes} from 'react';

import Gel from '../../../public/gel.jpg';
import styles from './styles.module.scss';

// NOTE: This compnent can become moree simplified and reusable by passing the whole slides
// as a content thrugh props and rendering them, but for the time being I'm hardcoding the data

interface Props extends HTMLAttributes<HTMLDivElement> {
  heading: string;
}

const Carousel: React.FC<Props> = (data) => {
  const {heading, className, ...rest} = data ?? {};

  const slidesRef = React.useRef<HTMLUListElement | null>(null);

  const [currentIdx, setCurrentIdx] = React.useState(0);

  const next = (): void => {
    if (currentIdx >= 2) return;

    setCurrentIdx((prev): typeof prev => prev + 1);
  };

  const previous = (): void => {
    if (currentIdx <= 0) return;

    setCurrentIdx((prev): typeof prev => prev - 1);
  };

  React.useEffect((): void => {
    // Carousel sliding logic
    const totalWidth = slidesRef.current?.clientWidth as number;

    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(${(totalWidth + 30) * -currentIdx}px)`;
    }
  }, [currentIdx]);

  return (
    <div className={`${styles.carousel} ${className}`} {...rest}>
      <div className={styles.header}>
        <p>{heading}</p>
        <div className={styles.controls}>
          <Caret
            onClick={previous}
            className={currentIdx <= 0 ? styles.disabled : ''}
          />
          <Caret
            className={`${styles.rightIcon} ${currentIdx >= 2 && styles.disabled}`}
            onClick={next}
          />
        </div>
      </div>
      <div className={styles.slidesContainer}>
        <ul ref={slidesRef} className={styles.slides}>
          <li className={styles.slide} data-item='3'>
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
                <span>Revolutionize Your Craft</span> <br /> Sewing Machines
                Unleashed!
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
          </li>
          <li className={styles.slide} data-item='1'>
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
          </li>
          <li className={styles.slide} data-item='2'>
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
                <span>Revolutionize Your Craft</span> <br /> Sewing Machines
                Unleashed!
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
