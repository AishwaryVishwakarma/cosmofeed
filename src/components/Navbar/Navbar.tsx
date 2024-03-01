'use client';

import {Cart, Profile} from '@/assets/icons';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const TABS = [
  {
    name: 'Tops',
    to: '/tops',
  },
  {
    name: 'Furniture',
    to: '/furniture',
  },
  {
    name: 'Shoes',
    to: '/mens-shoes',
  },
  {
    name: 'Skincare',
    to: '/skincare',
  },
  {
    name: 'Sunglasses',
    to: '/sunglasses',
  },
];

const UTILS = [
  {
    icon: <Profile />,
    to: '/',
  },
  {
    icon: <Cart />,
    to: '/cart',
  },
];

const Navbar: React.FC<{
  className?: string;
}> = ({className}) => {
  const logoContainerRef = React.useRef<HTMLDivElement | null>(null);
  const logoRef = React.useRef<HTMLAnchorElement | null>(null);

  React.useEffect((): (() => void) => {
    const handleScroll = (): void => {
      // Hide the logo bar when the user has scrolled some amount
      if (window.scrollY >= 100) {
        logoContainerRef.current?.setAttribute('data-visible', 'false');
        logoRef.current?.setAttribute('data-visible', 'true');
      } else {
        logoContainerRef.current?.setAttribute('data-visible', 'true');
        logoRef.current?.setAttribute('data-visible', 'false');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id='navbar' className={`${styles.navbar} ${className}`}>
      <div
        ref={logoContainerRef}
        className={styles.logoContainer}
        data-visible='true'
      >
        <Link href='/'>urban</Link>
      </div>
      <div className={`${styles.tabs} layouted`}>
        <div className={styles.links}>
          <Link
            ref={logoRef}
            href='/'
            className={styles.logoLink}
            data-visible='false'
          >
            urban
          </Link>
          <ul className={styles.pageLinks}>
            {TABS.map(({name, to}) => (
              <li key={name}>
                <Link href={to} id={`Go to ${name} page`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.utilLinks}>
            {UTILS.map(({icon, to}, idx) => (
              <li key={idx}>
                <Link href={to}>{icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
