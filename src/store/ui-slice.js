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
        return;
      }
      state.favs.push(action.payload);
    },
    removeFav(state, action) {},
    sendData(state, action) {
      return async (dispatch) => {
        const sendRequest = async (user, favs) => {
          const response = await fetch(
            "https://react-http-7db00-default-rtdb.firebaseio.com/users/" +
              user +
              "/favorites.json",
            {
              method: "POST",
              body: JSON.stringify({
                favs: favs,
              }),
            }
          );

          if (!response.ok) {
            console.log("error in sendData");
            throw new Error("Sending cart data failed.");
          }
        };

        try {
          await sendRequest(action.payload.user, state.favs);
          console.log("favs: " + state.favs);
        } catch (e) {
          console.log(e);
        }
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
