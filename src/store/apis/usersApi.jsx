import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => {
    return {
      editUser: builder.mutation({
        invalidatesTags: ["User"],
        query: (user) => {
          return {
            url: `/user/${user.id}`,
            method: "PATCH",
            body: {
              cardId: user.cardId,
              name: user.name,
              lastname: user.lastname,
              phone: user.phone,
              email: user.email,
              role: user.role.value,
            },
          };
        },
      }),
      deleteUser: builder.mutation({
        invalidatesTags: ["User"],
        query: (id) => {
          return {
            url: `/user/${id}`,
            method: "DELETE",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: ["User"],
        query: (user) => {
          return {
            url: "/user",
            method: "POST",
            body: {
              cardId: user.cardId,
              name: user.name,
              lastname: user.lastname,
              phone: user.phone,
              email: user.email,
              role: user.role.value,
            },
          };
        },
      }),
      fetchUsers: builder.query({
        providesTags: ["User"],
        query: () => {
          return {
            url: "/user",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useEditUserMutation,
  useDeleteUserMutation,
  useFetchUsersQuery,
  useAddUserMutation,
} = usersApi;
export { usersApi };
