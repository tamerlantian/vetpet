import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/productsSlice";

const productsApi = apiSlice.injectEndpoints({
  providesTags: "Products",
  endpoints: (builder) => {
    return {
      fetchProducts: builder.query({
        providesTags: ["Product"],
        query: (page = 1, limit = 5) => `/product?page=${page}&limit=${limit}`,
        transformResponse: (result) => ({
          products: result.data.products,
          results: result.results,
          totalPages: result.totalPages,
          totalProducts: result.totalProducts,
        }),
        async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(
              setPage({
                totalPages: data.totalPages,
                results: data.results,
                totalProducts: data.totalProducts,
              })
            );
          } catch (error) {}
        },
      }),
      editProduct: builder.mutation({
        invalidatesTags: ["Product"],
        query: ({ data, id }) => {
          return {
            url: `/product/${id}`,
            method: "PATCH",
            body: data,
          };
        },
      }),
      deleteProduct: builder.mutation({
        invalidatesTags: ["Product"],
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
          body: {
            kind: product.kind,
            name: product.name,
            description: product.description,
            price: product.price,
          },
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
} = productsApi;
export { productsApi };
