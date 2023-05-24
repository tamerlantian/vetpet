import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalProducts: 0,
  results: 0,
};

const productsSlice = createSlice({
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
      state.totalProducts = payload.totalProducts;
      state.results = payload.results;
    },
  },
});

export default productsSlice.reducer;
export const { addPage, subPage, setPage } = productsSlice.actions;
export const selectCurrentPage = (state) => state.customersSlice.page;
