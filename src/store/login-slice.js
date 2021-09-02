import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: false,
    usernameIsValid: false,
    passwordIsValid: false,
  },
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    usernameInputIsValid(state, action) {
      state.usernameIsValid = action.payload;
    },
    passInputIsValid(state, action) {
      state.passwordIsValid = action.payload;
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice;
