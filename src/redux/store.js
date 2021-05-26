import { configureStore } from '@reduxjs/toolkit';
import isMobileSliceReducer from "./isMobileSlice";
import menuBtnSliceReducer from "./menuBtnSlice";

export default configureStore({
  reducer: {
    isMobileSlice: isMobileSliceReducer,
    menuBtnSlice: menuBtnSliceReducer,
  },
})