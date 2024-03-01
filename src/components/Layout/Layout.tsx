'use client';

// import {resetCartState} from '@/redux/features/cartSlice';
// import {resetNavbarState} from '@/redux/features/navbarSlice';
// import {useAppDispatch} from '@/redux/store';
// import React from 'react';
// import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import type {LayoutProps} from './types';

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  navbar: {show: showNavbar, styles: navbarStyles} = {
    show: true,
  },
  footer: {show: showFooter, styles: footerStyles} = {
    show: true,
  },
  layouted = false,
}) => {
  // const dispatch = useAppDispatch();

  // Using this to reset the cart and mobile navbar state (show and touched) so that it won't show up when the page is changed
  // React.useEffect(() => {
  //   dispatch(resetCartState());
  //   dispatch(resetNavbarState());
  // }, [dispatch]);

  return (
    <>
      {showNavbar && <Navbar className={navbarStyles} />}
      <main className={`${className} ${layouted && 'layouted'}`}>
        {children}
      </main>
      {/* <Cart /> */}
      {showFooter && <Footer className={footerStyles} />}
    </>
  );
};

export default Layout;
