import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
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
  },
});

export default clientsSlice.reducer;
export const { addPage, subPage } = clientsSlice.actions;
export const selectCurrentPage = (state) => state.clientsSlice.page;
