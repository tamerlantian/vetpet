import { apiSlice } from "../slices/apiSlice";

export const officesExtApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Office"],
  endpoints: (builder) => ({
    fetchOffices: builder.query({
      providesTags: (result, error, arg) =>
        result?.offices
          ? result?.offices?.map(({ _id }) => ({ type: "Office", id: _id }))
          : ["Office"],
      query: ({ page, limit, name }) => {
        const queryName = name ? `&city=${name}` : "";
        return `/office?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        offices: result.data.offices,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
      }),
    }),
    editOffice: builder.mutation({
      invalidatesTags: (result, error, arg) => [{ type: "Office", id: arg.id }],
      query: ({ data, id }) => {
        return {
          url: `/office/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteOffice: builder.mutation({
      invalidatesTags: (result, error, arg) => [{ type: "Office", id: arg.id }],
      query: (id) => {
        return {
          url: `/office/${id}`,
          method: "DELETE",
        };
      },
    }),
    addOffice: builder.mutation({
      invalidatesTags: ["Office"],
      query: (office) => ({
        url: "/office",
        method: "POST",
        body: office,
      }),
    }),
  }),
});

export const {
  useFetchOfficesQuery,
  useAddOfficeMutation,
  useDeleteOfficeMutation,
  useEditOfficeMutation,
} = officesExtApiSlice;
