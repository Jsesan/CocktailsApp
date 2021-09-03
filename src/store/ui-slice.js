import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    openItemList: false,
    itemList: {},
    showFinder: false,
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
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
