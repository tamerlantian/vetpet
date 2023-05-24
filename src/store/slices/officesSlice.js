import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalOffices: 0,
  results: 0,
};

const officesSlice = createSlice({
  name: "offices",
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
      state.results = payload.results;
      state.totalOffices = payload.totalOffices;
    },
  },
});

export default officesSlice.reducer;
export const { addPage, subPage, setPage } = officesSlice.actions;
