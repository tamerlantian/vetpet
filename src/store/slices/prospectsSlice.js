import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalProspects: 0,
  totalPages: 0,
  results: 0,
};

const prospectsSlice = createSlice({
  name: "prospects",
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
      state.totalProspects = payload.totalProspects;
      state.results = payload.results;
    },
  },
});

export default prospectsSlice.reducer;
export const { addPage, subPage, setPage } = prospectsSlice.actions;
