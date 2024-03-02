import {type Product, setProducts} from '@/redux/features/productsSlice';
import {useAppDispatch, useAppSelector} from '@/redux/store';
import React from 'react';

import {services} from '../../services';

const delay = () => new Promise((res) => setTimeout(res, 1500));

const useProduct = (query: string) => {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector((state): Product[] => state.products);

  // Using the cursor to slice the products array in order too mock infinite scroll
  const [cursor, setCursor] = React.useState(12);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  const fetchMore = React.useCallback((): void => {
    if (cursor >= allProducts.length || loading) return;

    setLoading(true);

    delay()
      .then(() => {
        if (cursor >= allProducts.length) return;
        setCursor((prev): typeof prev => prev + 12);
      })
      .finally(() => setLoading(false));
  }, [allProducts, cursor, loading]);

  React.useEffect((): (() => void) | undefined => {
    const controller = new AbortController();

    setError('');

    dispatch(setProducts([]));

    services.category.get(query, controller.signal, {
      onSuccess(res) {
        dispatch(setProducts(Array(10).fill(res.data.products).flat(1)));
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
  }, [query, dispatch]);

  return {
    products: allProducts.slice(0, cursor),
    loading,
    error,
    fetchMore,
  };
};

export default useProduct;
