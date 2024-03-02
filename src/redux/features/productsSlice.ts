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

const initialState = [] as Product[];

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
  },
});

export const {setProducts} = products.actions;

export default products.reducer;
