import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/plansSlice";

const plansApi = apiSlice.injectEndpoints({
  providesTags: "Plans",
  endpoints: (builder) => ({
    fetchPlans: builder.query({
      providesTags: ["Plans"],
      query: (page = 1, limit = 5) => `/plan?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        plans: result.data.plans,
        results: result.results,
        totalPages: result.totalPages,
        totalPlans: result.totalPlans,
      }),
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setPage({
              totalPages: data.totalPages,
              results: data.results,
              totalPlans: data.totalPlans,
            })
          );
        } catch (error) {}
      },
    }),
    editPlan: builder.mutation({
      invalidatesTags: ["Plans"],
      query: ({ data, id }) => ({
        url: `/plan/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deletePlan: builder.mutation({
      invalidatesTags: ["Plans"],
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
        body: {
          name: plan.name,
          description: plan.description,
          price: plan.price,
        },
      }),
    }),
  }),
});

export const {
  useFetchPlansQuery,
  useAddPlanMutation,
  useDeletePlanMutation,
  useEditPlanMutation,
} = plansApi;
export { plansApi };
