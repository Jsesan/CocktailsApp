import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktail-slice";
import loginSlice from "./login-slice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, cocktail: cocktailSlice.reducer },
});

export default store;
