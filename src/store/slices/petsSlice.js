import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  limit: 5,
  totalPages: 0,
  totalPets: 0,
  results: 0,
};

const petsSlice = createSlice({
  name: "pets",
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
      state.totalPets = payload.totalPets;
    },
  },
});

export default petsSlice.reducer;
export const { addPage, subPage, setPage } = petsSlice.actions;
