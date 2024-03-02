import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface FormData {
  country: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  mobile: string;
}

const initialState = {
  country: '0',
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  pincode: '',
  mobile: '',
} as FormData;

export interface InputDetails {
  name: keyof FormData;
  value: string;
}

export const cart = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateFormDetails: (state, action: PayloadAction<InputDetails>) => {
      const {name, value} = action.payload ?? {};
      state[name] = value;
    },
  },
});

export const {updateFormDetails} = cart.actions;

export default cart.reducer;
