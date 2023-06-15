import { apiSlice } from "../slices/apiSlice";

export const plansExtApiSlice = apiSlice.injectEndpoints({
  providesTags: ["Plan"],
  endpoints: (builder) => ({
    fetchPlans: builder.query({
      providesTags: (result, error, arg) =>
        result?.products
          ? result?.products?.map(({ _id }) => ({ type: "Product", id: _id }))
          : ["Product"],
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/plan?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        plans: result.data.plans,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.totalPlans,
        },
      }),
    }),
    editPlan: builder.mutation({
      invalidatesTags: (result, error, arg) => [{ type: "Plan", id: arg.id }],
      query: ({ data, id }) => ({
        url: `/plan/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletePlan: builder.mutation({
      invalidatesTags: (result, error, arg) => [{ type: "Plan", id: arg.id }],
      query: (id) => ({
        url: `/plan/${id}`,
        method: "DELETE",
      }),
    }),
    addPlan: builder.mutation({
      invalidatesTags: ["Plans"],
      query: (plan) => ({
        url: "/plan",
        method: "POST",
        body: plan,
      }),
    }),
  }),
});

export const {
  useFetchPlansQuery,
  useAddPlanMutation,
  useDeletePlanMutation,
  useEditPlanMutation,
} = plansExtApiSlice;
