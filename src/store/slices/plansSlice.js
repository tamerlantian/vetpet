import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalPlans: 0,
  results: 0,
};

const plansSlice = createSlice({
  name: "plans",
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
      state.totalPlans = payload.totalPlans;
    },
  },
});

export default plansSlice.reducer;
export const { addPage, subPage, setPage } = plansSlice.actions;
