import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalEmployees: 0,
  results: 0,
};

const employeesSlice = createSlice({
  name: "employees",
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
      state.totalEmployees = payload.totalEmployees;
    },
  },
});

export default employeesSlice.reducer;
export const { addPage, subPage, setPage } = employeesSlice.actions;