import { apiSlice } from "../slices/apiSlice";

export const prospectsExtApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Prospects"],
  endpoints: (builder) => ({
    fetchProspects: builder.query({
      providesTags: (result, error, arg) =>
        result?.prospects
          ? result.prospects.map(({ _id }) => ({ type: "Prospect", id: _id }))
          : ["Prospect"],
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/prospect?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        prospects: result.data.prospects,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
      }),
    }),
    addProspect: builder.mutation({
      invalidatesTags: ["Prospect"],
      query: (data) => ({
        url: "/prospect",
        method: "POST",
        body: data,
      }),
    }),
    deleteProspect: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "Prospect", id: arg.id },
      ],
      query: (id) => ({
        url: `/prospect/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchProspectsQuery,
  useDeleteProspectMutation,
  useAddProspectMutation,
} = prospectsExtApiSlice;
