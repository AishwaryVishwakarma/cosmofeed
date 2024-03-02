'use client';

import {Caret} from '@/assets/icons';
import React, {type HTMLAttributes} from 'react';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  slidesData: JSX.Element[];
}

const Carousel: React.FC<Props> = (data) => {
  const {heading, slidesData = [], className, ...rest} = data ?? {};

  const slidesRef = React.useRef<HTMLUListElement | null>(null);

  const [currentIdx, setCurrentIdx] = React.useState(0);

  const next = (): void => {
    if (currentIdx >= slidesData.length - 1) return;

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
            className={`${styles.rightIcon} ${currentIdx >= slidesData.length - 1 && styles.disabled}`}
            onClick={next}
          />
        </div>
      </div>
      <div className={styles.slidesContainer}>
        <ul ref={slidesRef} className={styles.slides}>
          {slidesData.map((slide) => slide)}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
