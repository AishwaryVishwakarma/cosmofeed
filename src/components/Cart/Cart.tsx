import {Cross, Delete, ShoppingBag} from '@/assets/icons';
import useCart from '@/hooks/useCart';
import useMediaQuery from '@/hooks/useMediaQuery';
import {setCart} from '@/redux/features/cartSlice';
import {useAppDispatch} from '@/redux/store';
import {isArrayEmpty} from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const Cart = () => {
  const isMobile = useMediaQuery('(max-width: 800px)');

  const dispatch = useAppDispatch();

  const {items, open, touched, deleteItem} = useCart();

  const showCart = touched && open;

  return showCart ? (
    <>
      <div
        className={styles.overlayBg}
        onClick={(e) => dispatch(setCart(false))}
      />
      <section
        id='cart'
        className={styles.cart}
        data-open={open.toString()}
        role='region'
      >
        <Cross
          className={styles.crossButton}
          onClick={(e) => dispatch(setCart(false))}
          aria-label='Close Cart'
          role='button'
        />
        <ShoppingBag className={styles.cartIcon} aria-hidden />
        <h3>CART</h3>
        <div className={styles.divider} />
        <ul>
          {items.map((item, idx) => {
            const {id, images, price, title, description} = item ?? {};
            return (
              <>
                <li key={id} className={styles.productDetails}>
                  <Image
                    src={images[0]}
                    alt={`Product${idx + 1}`}
                    height={300}
                    width={300}
                    fetchPriority='auto'
                    className={styles.productImage}
                  />
                  <div className={styles.productInfo}>
                    <p>
                      <span>
                        {title}
                        <Delete
                          height={isMobile ? 18 : 22}
                          width={isMobile ? 18 : 22}
                          aria-label={`delete ${name} from cart`}
                          onClick={(e) => {
                            deleteItem(id);
                          }}
                        />
                      </span>
                    </p>
                    <p>{description}</p>
                    <div className={styles.total}>
                      <p>Item Total:</p>
                      <span>${price}</span>
                    </div>
                  </div>
                </li>
                <div className={styles.divider} />
              </>
            );
          })}
        </ul>
        {!isArrayEmpty(items) && (
          <Link
            href='/checkout'
            className={styles.cta}
            id='checkout'
            title='Checkout'
          >
            Checkout
          </Link>
        )}
      </section>
    </>
  ) : null;
};

export default Cart;
