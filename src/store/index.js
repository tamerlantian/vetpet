import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// slices
import authSlice from "./slices/authSlice";
import customersSlice from "./slices/customersSlice";
import employeesSlice from "./slices/employeesSlice";
import prospectsSlice from "./slices/prospectsSlice";
import productsSlice from "./slices/productsSlice";
import officesSlice from "./slices/officesSlice";
import plansSlice from "./slices/plansSlice";
import petsSlice from "./slices/petsSlice";
import { apiSlice } from "./slices/apiSlice";
// APIs
import { usersApi } from "./apis/usersApi";
import { productsApi } from "./apis/productsApi";
import { officesApi } from "./apis/officesApi";
import { prospectsApi } from "./apis/prospectsApi";
import { plansApi } from "./apis/plansApi";
import { authApi } from "./apis/authApi";
import { petsApi } from "./apis/petsApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [officesApi.reducerPath]: officesApi.reducer,
    [prospectsApi.reducerPath]: prospectsApi.reducer,
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
      usersApi.middleware,
      productsApi.middleware,
      officesApi.middleware,
      prospectsApi.middleware,
      plansApi.middleware,
      authApi.middleware,
      petsApi.middleware,
    ]);
  },
  devTools: true,
});

setupListeners(store.dispatch);

// export * from "./apis/employeesApi";
export * from "./apis/usersApi";
export * from "./apis/productsApi";
export * from "./apis/officesApi";
export * from "./apis/prospectsApi";
export * from "./apis/plansApi";
export * from "./apis/authApi";
export * from "./apis/petsApi";
