import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// slices
import authSlice from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

import customersSlice from "./slices/customersSlice";
import employeesSlice from "./slices/employeesSlice";
import prospectsSlice from "./slices/prospectsSlice";
import productsSlice from "./slices/productsSlice";
import officesSlice from "./slices/officesSlice";
import plansSlice from "./slices/plansSlice";
import petsSlice from "./slices/petsSlice";
// APIs
import { officesApi } from "./apis/officesApi";
import { plansApi } from "./apis/plansApi";
import { authApi } from "./apis/authApi";
import { petsApi } from "./apis/petsApi";



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [officesApi.reducerPath]: officesApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [petsApi.reducerPath]: petsApi.reducer,
    authSlice,
    customersSlice,
    employeesSlice,
    prospectsSlice,
    productsSlice,
    officesSlice,
    plansSlice,
    petsSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      apiSlice.middleware,
      officesApi.middleware,
      plansApi.middleware,
      authApi.middleware,
      petsApi.middleware,
    ]);
  },
});

setupListeners(store.dispatch);

export * from "./apis/officesApi";
export * from "./apis/prospectsSlice";
export * from "./apis/plansApi";
export * from "./apis/authApi";
export * from "./apis/petsApi";
