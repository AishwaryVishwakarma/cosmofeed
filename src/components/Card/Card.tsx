import type {Product} from '@/redux/features/productsSlice';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

const Card: React.FC<Product> = (data) => {
  const {id, title, images, price, category, description} = data ?? {};

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={images[0]}
          alt={`${title} first`}
          height={300}
          width={300}
        />
        <Image
          src={images[1]}
          alt={`${title} second`}
          height={300}
          width={300}
        />
      </div>
      <p>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <button type='button' className={styles.cta}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
