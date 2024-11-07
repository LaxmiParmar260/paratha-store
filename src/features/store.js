import { configureStore } from "@reduxjs/toolkit";
import darkModereducer from "../features/theme/ThemeSlice";
import cartReducer from "../features/cart/CartSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModereducer,
    cart: cartReducer,
  },
});

export default store;
