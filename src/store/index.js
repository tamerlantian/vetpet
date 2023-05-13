import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// reducers
import authSlice from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
// APIs
import { clientsApi } from "./apis/clientsApi";
import { productsApi } from "./apis/productsApi";
import { officesApi } from "./apis/officesApi";
import { prospectsApi } from "./apis/prospectsApi";
import { plansApi } from "./apis/plansApi";
import { authApi } from "./apis/authApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [officesApi.reducerPath]: officesApi.reducer,
    [prospectsApi.reducerPath]: prospectsApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(clientsApi.middleware)
      .concat(productsApi.middleware)
      .concat(officesApi.middleware)
      .concat(prospectsApi.middleware)
      .concat(plansApi.middleware)
      .concat(authApi.middleware);
  },
  devTools: true,
});

setupListeners(store.dispatch);

export * from "./apis/clientsApi";
export * from "./apis/productsApi";
export * from "./apis/officesApi";
export * from "./apis/prospectsApi";
export * from "./apis/plansApi";
export * from "./apis/authApi";
