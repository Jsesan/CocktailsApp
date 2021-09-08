import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openItemList: false,
    itemList: {},
    showFinder: false,
    showFavs: false,
    favs: [],
    favsChange: false,
  },
  reducers: {
    clickItemList(state) {
      state.openItemList = !state.openItemList;
    },
    selectItemList(state, action) {
      state.itemList = action.payload;
    },
    showFinder(state) {
      state.showFinder = true;
    },
    showFavs(state) {
      state.showFavs = !state.showFavs;
    },
    addFavList(state, action) {
      console.log("holaa");
      console.log(action.payload);
      const existingItem = state.favs.find(
        (item) => item.id === action.payload.id
      );
      state.favsChange = true;
      if (existingItem) {
        console.log("existing item");
        return;
      }
      state.favs.push(action.payload);
    },
    removeFav(state, action) {
      console.log("chauu");
      const id = action.payload;
      state.favs = state.favs.filter((item) => item.id !== id);
      state.favsChange = true;
    },
    setFavsChangeToFalse(state) {
      state.favsChange = false;
    },
    replaceFav(state, action) {
      state.favs = action.payload.favs;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
