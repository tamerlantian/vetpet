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
    resetState: (state) => {
      state.currentPage = 1;
      state.limit = 5;
      state.totalPages = 0;
      state.totalPets = 0;
      state.results = 0;
    },
  },
});

export default petsSlice.reducer;
export const { addPage, subPage, setPage, resetState } = petsSlice.actions;
