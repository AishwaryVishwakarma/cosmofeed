'use client';

import {Spinner} from '@/assets/loaders';
import Card from '@/components/Card/Card';
import Layout from '@/components/Layout/Layout';
import useCart from '@/hooks/useCart';
import useProduct from '@/hooks/useProduct';
import {setCart} from '@/redux/features/cartSlice';
import type {ProductCategory} from '@/redux/features/productsSlice';
import {useAppDispatch} from '@/redux/store';
import {isArrayEmpty} from '@/utils';
import React from 'react';

import styles from './styles.module.scss';

const CategoryPage: React.FC<Page> = ({params}) => {
  const dispatch = useAppDispatch();

  const {products, loading, error, fetchMore} = useProduct(
    params.category as ProductCategory
  );

  const {addItem} = useCart();

  const observerRef = React.useRef<HTMLDivElement | null>(null);

  // Mimic infinite scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) fetchMore();
      });
    });
    observer.observe(observerRef.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return (
    <Layout
      navbar={{
        show: true,
        styles: styles.navbar,
      }}
      footer={{
        show: true,
        styles: isArrayEmpty(products) ? styles.footer : '',
      }}
      layouted
      className={styles.categoryPage}
    >
      <div className={styles.content}>
        <h1>{params.category}</h1>

        <section className={styles.productsContainer}>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                onAdd={(): void => {
                  addItem(product);
                  dispatch(setCart(true));
                }}
              />
            );
          })}
        </section>
        {/* Fix height to avoid layout shift */}
        <div className={styles.loadingContainer}>
          {loading && <Spinner className={styles.spinner} />}
        </div>
        <div ref={observerRef} />
      </div>
    </Layout>
  );
};

export default CategoryPage;
