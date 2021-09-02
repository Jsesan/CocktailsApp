import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktailToFind: "",
    items: [],
  },
  reducers: {
    setCocktailToFind(state, action) {
      state.cocktailToFind = action.payload;
    },
    setCocktailsItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const cocktailAction = cocktailSlice.actions;

export default cocktailSlice;
