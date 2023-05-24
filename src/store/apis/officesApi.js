import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/officesSlice";

const officesApi = apiSlice.injectEndpoints({
  providesTags: "Offices",
  endpoints: (builder) => ({
    fetchOffices: builder.query({
      providesTags: ["Office"],
      query: (page = 1, limit = 5) => `/office?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        offices: result.data.offices,
        results: result.results,
        totalPages: result.totalPages,
        totalOffices: result.totalOffices,
      }),
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setPage({
              totalPages: data.totalPages,
              results: data.results,
              totalOffices: data.totalOffices,
            })
          );
        } catch (error) {}
      },
    }),
    editOffice: builder.mutation({
      invalidatesTags: ["Office"],
      query: ({ data, id }) => {
        return {
          url: `/office/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteOffice: builder.mutation({
      invalidatesTags: ["Office"],
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
        body: {
          department: office.department,
          city: office.city,
          address: office.address,
          phone: office.phone,
        },
      }),
    }),
  }),
});

export const {
  useFetchOfficesQuery,
  useAddOfficeMutation,
  useDeleteOfficeMutation,
  useEditOfficeMutation,
} = officesApi;
export { officesApi };
