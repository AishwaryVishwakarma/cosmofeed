'use client';

import {updateCartItems} from '@/redux/features/cartSlice';
import {Product} from '@/redux/features/productsSlice';
import {useAppDispatch, useAppSelector} from '@/redux/store';

/**
 * This hook is handling all the cart related functions
 */

const useCart = () => {
  const dispatch = useAppDispatch();

  const {items, open, touched} = useAppSelector((state) => state.cart);

  // Add item handler
  const addItem = (item: Product): void => {
    dispatch(
      updateCartItems({
        items: [...items, item],
      })
    );
  };

  // Delete item handler
  function deleteItem(id: number): void {
    dispatch(
      updateCartItems({
        items: items.filter((item): boolean => item.id != id),
      })
    );
  }

  return {
    items,
    open,
    touched,
    addItem,
    deleteItem,
  };
};

export default useCart;
