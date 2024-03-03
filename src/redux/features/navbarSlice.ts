import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

interface InitialState {
  isNavbarTouched: boolean;
  navbarOpen: boolean;
}

const initialState = {
  isNavbarTouched: false,
  navbarOpen: false,
} as InitialState;

export const navbar = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbar: (state, action: PayloadAction<boolean>) => {
      if (!state.isNavbarTouched) state.isNavbarTouched = true;

      state.navbarOpen = action.payload;
    },

    resetNavbarState: (state) => {
      state.navbarOpen = false;
      state.isNavbarTouched = false;
    },
  },
});

export const {setNavbar, resetNavbarState} = navbar.actions;

export default navbar.reducer;
