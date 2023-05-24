import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/prospectsSlice";

const prospectsApi = apiSlice.injectEndpoints({
  tagTypes: ["Prospects"],
  endpoints: (builder) => ({
    fetchProspects: builder.query({
      providesTags: ["Prospects"],
      query: (page = 1, limit = 5) => `/prospect?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        prospects: result.data.prospects,
        results: result.results,
        totalPages: result.totalPages,
        totalProspects: result.totalProspects,
      }),
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setPage({
              totalProspects: data.totalProspects,
              totalPages: data.totalPages,
              results: data.results,
            })
          );
        } catch (error) {}
      },
    }),
    deleteProspect: builder.mutation({
      invalidatesTags: ["Prospects"],
      query: (id) => ({
        url: `/prospect/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFetchProspectsQuery, useDeleteProspectMutation } =
  prospectsApi;
export { prospectsApi };
