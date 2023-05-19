import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalUsers: 0,
  results: 0,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addPage: (state, { payload }) => {
      state.currentPage += payload;
    },
    subPage: (state, { payload }) => {
      state.currentPage -= payload;
    },
    setPage: (state, { payload }) => {
      state.totalPages = payload.totalPages;
      state.totalUsers = payload.totalUsers;
      state.results = payload.results;
    },
  },
});

export default customersSlice.reducer;
export const { addPage, subPage, setPage } = customersSlice.actions;
export const selectCurrentPage = (state) => state.customersSlice.page;
