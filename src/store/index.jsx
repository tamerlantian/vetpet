import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// reducers
// import { usersReducer } from "./slices/usersSlice";
// APIs
import { usersApi } from "./apis/usersApi";
import { productsApi } from "./apis/productsApi";
import { officesApi } from "./apis/officesApi";
import { prospectsApi } from "./apis/prospectsApi";
import { plansApi } from "./apis/plansApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [officesApi.reducerPath]: officesApi.reducer,
    [prospectsApi.reducerPath]: prospectsApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(productsApi.middleware)
      .concat(officesApi.middleware)
      .concat(prospectsApi.middleware)
      .concat(plansApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./apis/usersApi";
export * from "./apis/productsApi";
export * from "./apis/officesApi";
export * from "./apis/prospectsApi";
export * from "./apis/plansApi";
