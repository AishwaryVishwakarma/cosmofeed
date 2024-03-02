import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

// Key names should be similar to the navbar links
interface InitialState {
  tops: {
    cursor: number;
    products: Product[];
  };
  furniture: {
    cursor: number;
    products: Product[];
  };
  'mens-shoes': {
    cursor: number;
    products: Product[];
  };
  skincare: {
    cursor: number;
    products: Product[];
  };
  sunglasses: {
    cursor: number;
    products: Product[];
  };
}

export type ProductCategory = keyof InitialState;

const initialState = {
  tops: {
    cursor: 12,
    products: [],
  },
  furniture: {
    cursor: 12,
    products: [],
  },
  'mens-shoes': {
    cursor: 12,
    products: [],
  },
  skincare: {
    cursor: 12,
    products: [],
  },
  sunglasses: {
    cursor: 12,
    products: [],
  },
} as InitialState;

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<{
        category: ProductCategory;
        products: Product[];
      }>
    ): void => {
      const {category, products} = action.payload;
      state[category].products = products;
    },

    updateCursor: (
      state,
      action: PayloadAction<{
        category: ProductCategory;
        by: number;
      }>
    ): void => {
      const {category, by} = action.payload;
      state[category].cursor += by;
    },
  },
});

export const {setProducts, updateCursor} = products.actions;

export default products.reducer;
