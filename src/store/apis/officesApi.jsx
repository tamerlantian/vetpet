import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const officesApi = createApi({
  reducerPath: "offices",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => {
    return {
      editOffice: builder.mutation({
        invalidatesTags: ["Office"],
        query: (office) => {
          return {
            url: `/offices/${office.id}`,
            method: "PATCH",
            body: {
              department: office.department,
              city: office.city,
              address: office.address,
              phone: office.phone,
            },
          };
        },
      }),
      deleteOffice: builder.mutation({
        invalidatesTags: ["Office"],
        query: (id) => {
          return {
            url: `/offices/${id}`,
            method: "DELETE",
          };
        },
      }),
      addOffice: builder.mutation({
        invalidatesTags: ["Office"],
        query: (office) => {
          return {
            url: "/offices",
            method: "POST",
            body: {
              department: office.department,
              city: office.city,
              address: office.address,
              phone: office.phone,
            },
          };
        },
      }),
      fetchOffices: builder.query({
        providesTags: ["Office"],
        query: () => {
          return {
            url: "/offices",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchOfficesQuery,
  useAddOfficeMutation,
  useDeleteOfficeMutation,
  useEditOfficeMutation,
} = officesApi;
export { officesApi };
