import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setCredentials: (state, actions) => {
      const { user, token } = actions.payload;
      state.user = user;
      state.token = token;
    },
    setAuth: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setCredentials, logOut, setAuth } = authSlice.actions;
export const selectCurrentUser = (state) => state.authSlice.user;
export const selectCurrentToken = (state) => state.authSlice.token;
