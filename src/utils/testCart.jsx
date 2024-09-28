import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testSlice";

const testCartStore = configureStore({
  reducer: {
    cart: testReducer,
  },
});

export default testCartStore;
