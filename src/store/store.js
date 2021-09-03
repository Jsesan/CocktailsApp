import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktail-slice";
import loginSlice from "./login-slice";
import uiSlice from "./ui-slice";
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cocktail: cocktailSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
