import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../config/config";


const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      editProduct: builder.mutation({
        invalidatesTags: ["Product"],
        query: (product) => {
          return {
            url: `/products/${product.id}`,
            method: "PATCH",
            body: {
              type: product.type.value,
              name: product.name,
              description: product.description,
              price: product.price,
            },
          };
        },
      }),
      deleteProduct: builder.mutation({
        invalidatesTags: ["Product"],
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: "DELETE",
          };
        },
      }),
      addProduct: builder.mutation({
        invalidatesTags: ["Product"],
        query: (product) => {
          return {
            url: "/products",
            method: "POST",
            body: {
              type: product.type.value,
              name: product.name,
              description: product.description,
              price: product.price,
            },
          };
        },
      }),
      fetchProducts: builder.query({
        providesTags: ["Product"],
        query: () => {
          return {
            url: "/products",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productsApi;
export { productsApi };
