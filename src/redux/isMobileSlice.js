import { createSlice } from "@reduxjs/toolkit";

export const isMobileSlice = createSlice({
  name: "isMobile",
  initialState: {
    mobile: null,
  },
  reducers: {
    checkIsMobile: (state) => {
      if (window.innerWidth <= 750) {
        state.mobile = true;
      } else {
        state.mobile = false;
      }
    },
  },
});

export const { checkIsMobile } = isMobileSlice.actions;

export default isMobileSlice.reducer;
