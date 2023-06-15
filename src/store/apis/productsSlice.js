import { apiSlice } from "../slices/apiSlice";

export const productsExtApiSlice = apiSlice.injectEndpoints({
  providesTags: ["Product"],
  endpoints: (builder) => {
    return {
      fetchProducts: builder.query({
        providesTags: (result, error, arg) =>
          result?.products
            ? result?.products?.map(({ _id }) => ({ type: "Product", id: _id }))
            : ["Product"],
        query: ({ page, limit, name }) => {
          const queryName = name ? `&name=${name}` : "";
          return `/product?page=${page}&limit=${limit}${queryName}`;
        },
        transformResponse: (result) => ({
          products: result.data.products,
          results: result.results,
          paging: {
            totalPages: result.paging.totalPages,
            docs: result.paging.docs,
          },
        }),
      }),
      editProduct: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Product", id: arg.id },
        ],
        query: ({ data, id }) => {
          return {
            url: `/product/${id}`,
            method: "PATCH",
            body: data,
          };
        },
      }),
      deleteProduct: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Product", id: arg.id },
        ],
        query: (id) => {
          return {
            url: `/product/${id}`,
            method: "DELETE",
          };
        },
      }),
      addProduct: builder.mutation({
        invalidatesTags: ["Product"],
        query: (product) => ({
          url: "/product",
          method: "POST",
          body: product,
        }),
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = productsExtApiSlice;
