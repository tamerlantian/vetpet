import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      state.user = Object.assign(state.user, payload);
    },
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
export const { setCredentials, logOut, setAuth, updateUser } = authSlice.actions;
export const selectCurrentUser = (state) => state.authSlice.user;
export const selectCurrentToken = (state) => state.authSlice.token;
