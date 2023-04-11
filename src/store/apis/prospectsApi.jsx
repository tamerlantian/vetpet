import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const prospectsApi = createApi({
  reducerPath: "prospects",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      deleteProspect: builder.mutation({
        invalidatesTags: ["Prospect"],
        query: (id) => {
          return {
            url: `/prospects/${id}`,
            method: "DELETE",
          };
        },
      }),
      fetchProspects: builder.query({
        providesTags: ["Prospect"],
        query: () => {
          return {
            url: "/prospects",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchProspectsQuery, useDeleteProspectMutation } =
  prospectsApi;
export { prospectsApi };
