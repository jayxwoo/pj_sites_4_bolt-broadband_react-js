import { createSlice } from "@reduxjs/toolkit";

export const menuBtnSlice = createSlice({
  name: "menuBtn",
  initialState: {
    menuBtnStatus: null,
  },
  reducers: {
    handleMenuBtn: (state) => {
      state.menuBtnStatus = !state.menuBtnStatus;
    },
    closeMenuBtn: (state) => {
        state.menuBtnStatus = false;
    },
  },
});

export const { handleMenuBtn, closeMenuBtn } = menuBtnSlice.actions;

export default menuBtnSlice.reducer;