import { apiSlice } from "../slices/apiSlice";
import { current } from "@reduxjs/toolkit";

const clientsApi = apiSlice.injectEndpoints({
  tagTypes: ["Client"],
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        providesTags: ["Client"],
        query: () => {
          return {
            url: "/user",
            method: "GET",
          };
        },
        transformResponse: (result) => result.data.users,
      }),
      editUser: builder.mutation({
        invalidatesTags: ["Client"],
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
        query: (id) => {
          return {
            url: `/user/${id}`,
            method: "DELETE",
          };
        },
        async onQueryStarted(id, { dispatch, queryFulfilled }) {
          const removeResult = dispatch(
            clientsApi.util.updateQueryData(
              "fetchUsers",
              undefined,
              (users) => {
                const idx = users.findIndex((user) => user._id === id);
                if (idx !== -1) {
                  users.splice(idx, 1);
                }
              }
            )
          );

          try {
            await queryFulfilled;
          } catch (error) {
            removeResult.undo();
          }
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: ["Client"],
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
    };
  },
});

export const {
  useEditUserMutation,
  useDeleteUserMutation,
  useFetchUsersQuery,
  useAddUserMutation,
} = clientsApi;
export { clientsApi };
