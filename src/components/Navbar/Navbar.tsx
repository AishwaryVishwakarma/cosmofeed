'use client';

import {Cart, Cross, HamMenu, Profile} from '@/assets/icons';
import useMediaQuery from '@/hooks/useMediaQuery';
import {setCart} from '@/redux/features/cartSlice';
import {setNavbar} from '@/redux/features/navbarSlice';
import type {ProductCategory} from '@/redux/features/productsSlice';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface Tab {
  name: string;
  to: ProductCategory;
}

const TABS: Tab[] = [
  {
    name: 'Tops',
    to: 'tops',
  },
  {
    name: 'Furniture',
    to: 'furniture',
  },
  {
    name: 'Shoes',
    to: 'mens-shoes',
  },
  {
    name: 'Skincare',
    to: 'skincare',
  },
  {
    name: 'Sunglasses',
    to: 'sunglasses',
  },
];

const Navbar: React.FC<{
  className?: string;
}> = ({className}) => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  const dispatch = useAppDispatch();

  const {isNavbarTouched, navbarOpen} = useAppSelector((state) => state.navbar);

  // Uppermost logo
  const logoContainerRef = React.useRef<HTMLDivElement | null>(null);

  // Logo which is visible on links conainer
  const logoRef = React.useRef<HTMLAnchorElement | null>(null);

  const [hamState, setHamState] = React.useState({
    isOpen: false,
    isClicked: false,
  });

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
      {!isMobile ? (
        <div className={`${styles.tabs} layouted hideOnMobile`}>
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
                  <Link href={'/' + to} id={`Go to ${name} page`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={styles.utilLinks}>
              <li>
                <Profile aria-hidden />
              </li>
              <li
                role='button'
                title='Cart'
                onClick={() => dispatch(setCart(true))}
                style={{
                  cursor: 'pointer',
                }}
              >
                <Cart aria-hidden />
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={`${styles.tabs} hideOnDesktop`}>
          <HamMenu
            id='navigation-menu-button'
            onClick={(e) => dispatch(setNavbar(true))}
            aria-label='Navigation Menu Button'
            role='button'
          />
          <Link
            ref={logoRef}
            href='/'
            className={styles.logoLink}
            data-visible='false'
          >
            urban
          </Link>
          <ul className={styles.utilLinks}>
            <li
              role='button'
              title='Cart'
              onClick={() => dispatch(setCart(true))}
              style={{
                cursor: 'pointer',
              }}
            >
              <Cart aria-hidden />
            </li>
          </ul>
          {isNavbarTouched && navbarOpen && (
            <>
              <div
                className={styles.overlayBg}
                onClick={(e) => dispatch(setNavbar(false))}
              />
              <div
                className={styles.hamMenu}
                id='navigation-menu'
                role='region'
                aria-labelledby='navigation-menu-button'
              >
                <Cross
                  onClick={(e) => dispatch(setNavbar(false))}
                  aria-label='Close Navigation Menu'
                  role='button'
                />
                <ul className={styles.pageLinks}>
                  {TABS.map((tab) => {
                    const {name, to} = tab;
                    return (
                      <li key={name}>
                        <Link href={'/' + to} id={`Go to ${name} page`}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
