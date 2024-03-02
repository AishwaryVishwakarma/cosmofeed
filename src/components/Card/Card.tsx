import type {Product} from '@/redux/features/productsSlice';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

const Card: React.FC<{
  product: Product;
  onAdd: () => void;
}> = ({product, onAdd}) => {
  const {title, images, price, description} = product ?? {};

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={images[1]}
          alt={`${title} first`}
          height={300}
          width={300}
        />
        <Image
          src={images[0]}
          alt={`${title} second`}
          height={300}
          width={300}
        />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
      <button type='button' className={styles.cta} onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
