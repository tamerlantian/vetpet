import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 5,
  totalPages: 0,
  totalUsers: 0,
  results: 0,
};

const clientsSlice = createSlice({
  name: "clientSlice",
  initialState,
  reducers: {
    addPage: (state, { payload }) => {
      state.page += payload;
    },
    subPage: (state, { payload }) => {
      state.page -= payload;
    },
    setPage: (state, { payload }) => {
      state.totalPages = payload.totalPages;
      state.totalUsers = payload.totalUsers;
      state.results = payload.results;
    }
  },
});

export default clientsSlice.reducer;
export const { addPage, subPage, setPage, removeUser } = clientsSlice.actions;
export const selectCurrentPage = (state) => state.clientsSlice.page;
