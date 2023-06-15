import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import authSlice from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import { authApi } from "./apis/authApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      apiSlice.middleware,
      authApi.middleware,
    ]);
  },
});

setupListeners(store.dispatch);

export * from "./apis/authApi";
