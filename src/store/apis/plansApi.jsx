import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const plansApi = createApi({
  reducerPath: "Plan",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      editPlan: builder.mutation({
        invalidatesTags: ["Plans"],
        query: (plan) => {
          return {
            url: `/plans/${plan.id}`,
            method: "PATCH",
            body: {
              name: plan.name,
              description: plan.description,
              price: plan.price,
            },
          };
        },
      }),
      deletePlan: builder.mutation({
        invalidatesTags: ["Plans"],
        query: (id) => {
          return {
            url: `/plans/${id}`,
            method: "DELETE",
          };
        },
      }),
      addPlan: builder.mutation({
        invalidatesTags: ["Plans"],
        query: (plan) => {
          return {
            url: "/plans",
            method: "POST",
            body: {
              name: plan.name,
              description: plan.description,
              price: plan.price,
            },
          };
        },
      }),
      fetchPlans: builder.query({
        providesTags: ["Plans"],
        query: () => {
          return {
            url: "/plans",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchPlansQuery,
  useAddPlanMutation,
  useDeletePlanMutation,
  useEditPlanMutation,
} = plansApi;
export { plansApi };
