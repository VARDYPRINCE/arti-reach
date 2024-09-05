import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setToken, logoutUser } = userSlice.actions;
export const getUser = (state) => state.user.user;
export default userSlice.reducer;