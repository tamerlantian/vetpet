import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/clientsSlice";

const clientsApi = apiSlice.injectEndpoints({
  tagTypes: ["Client"],
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        providesTags: ["Client"],
        query: (page = 1, limit = 5) => {
          return {
            url: `/user?page=${page}&limit=${limit}`,
            method: "GET",
          };
        },
        transformResponse: (result) => {
          return {
            users: result.data.users,
            totalPages: result.totalPages,
            totalUsers: result.totalUsers,
            results: result.results,
          };
        },
        async onQueryStarted(undefined, { queryFulfilled, dispatch }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(
              setPage({
                totalUsers: data.totalUsers,
                totalPages: data.totalPages,
                results: data.results,
              })
            );
          } catch (error) {}
        },
      }),
      editUser: builder.mutation({
        invalidatesTags: ["Client"],
        query: (user) => {
          return {
            url: `/user/${user.id}`,
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: user,
          };
        },
      }),
      deleteUser: builder.mutation({
        // temporal solution
        invalidatesTags: ["Client"],
        query: (id) => {
          return {
            url: `/user/${id}`,
            method: "DELETE",
          };
        },
        // fix error here
        //   async onQueryStarted(id, { dispatch, queryFulfilled }) {
        //     const removeResult = dispatch(
        //       clientsApi.util.updateQueryData(
        //         "fetchUsers",
        //         undefined,
        //         (users) => {
        //           console.log(users);
        //           const idx = users.findIndex((user) => user._id === id);
        //           if (idx !== -1) {
        //             users.splice(idx, 1);
        //           }
        //         }
        //       )
        //     );

        //     try {
        //       await queryFulfilled;
        //     } catch (error) {
        //       removeResult.undo();
        //     }
        //   },
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
