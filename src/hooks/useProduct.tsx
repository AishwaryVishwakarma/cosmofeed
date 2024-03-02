import {
  type ProductCategory,
  setProducts,
  updateCursor,
} from '@/redux/features/productsSlice';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import {isArrayEmpty} from '@/utils';
import React from 'react';

import {services} from '../../services';

const delay = () => new Promise((res) => setTimeout(res, 1500));

const useProduct = (category: ProductCategory) => {
  const dispatch = useAppDispatch();

  const {products, cursor} = useAppSelector(
    (state) => state.products[category]
  );

  const [loading, setLoading] = React.useState(isArrayEmpty(products));

  const [error, setError] = React.useState('');

  // Function to mimic infinite scroll
  const fetchMore = React.useCallback((): void => {
    if (cursor >= products.length || loading) return;

    setLoading(true);

    delay()
      .then(() => {
        dispatch(
          updateCursor({
            category,
            by: 12,
          })
        );
      })
      .finally(() => setLoading(false));
  }, [products, cursor, loading, category, dispatch]);

  React.useEffect((): (() => void) | undefined => {
    if (!isArrayEmpty(products)) return;

    const controller = new AbortController();

    setError('');

    services.category.get(category, controller.signal, {
      onSuccess(res) {
        dispatch(
          setProducts({
            category,
            products: Array(10).fill(res.data.products).flat(1),
          })
        );
      },
      onError(err) {
        setError('Something went wrong');
      },
      onFinally() {
        setLoading(false);
      },
    });

    return (): void => {
      controller.abort();
    };
  }, [category, dispatch, products]);

  return {
    products: products.slice(0, cursor),
    loading,
    error,
    fetchMore,
  };
};

export default useProduct;
