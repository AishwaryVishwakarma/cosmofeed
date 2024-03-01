import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC<{
  className?: string;
}> = ({className}) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      © 2024 URBAN E-RETAIL LIMITED All Rights Reserved.
    </footer>
  );
};

export default Footer;
