import { apiSlice } from "../slices/apiSlice";
import { updateUser } from "../slices/authSlice";

export const usersExtApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/user?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        users: result.data.users,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
      }),
      providesTags: (result, error, arg) =>
        result?.users
          ? result?.users?.map(({ id }) => ({ type: "User", id }))
          : ["User"],
    }),
    getEmployees: builder.query({
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/user/employees?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        employees: result.data.employees,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
      }),
      providesTags: (result, error, arg) =>
        result?.employees
          ? result.employees.map(({ id }) => ({ type: "Employee", id }))
          : ["Employee"],
    }),
    updateMe: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: result.data.user.id },
      ],
      query: (data) => {
        return {
          url: "/user/updateMe",
          method: "PATCH",
          body: data,
        };
      },
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUser(data.data.user));
        } catch (error) {}
      },
    }),
    editUser: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg.id },
        { type: "Employee", id: arg.id },
      ],
      query: ({ data, id }) => {
        return {
          url: `/user/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteUser: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "User", id: arg.id },
        { type: "Employee", id: arg.id },
      ],
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
    }),
    addUser: builder.mutation({
      invalidatesTags: [{ type: "User" }, { type: "Employee" }],
      query: (user) => {
        console.log(user);
        return {
          url: "/user",
          method: "POST",
          body: user,
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetEmployeesQuery,
  useEditUserMutation,
  useUpdateMeMutation,
  useDeleteUserMutation,
  useAddUserMutation,
} = usersExtApiSlice;

// // returns the query result object
// export const selectUsersResult = usersExtApiSlice.endpoints.getUsers.select();

// // creates memoized selector
// const selectUsersData = createSelector(
//   selectUsersResult,
//   (usersResult) => usersResult.data
//   // normalized state object with ids & entities
// );

// // getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//   selectAll: selectAllUsers,
//   selectById: selectUserById,
//   selectIds: selectUsersIds,
//   // pass in a selector that returns the users slice of state
// } = usersAdapter.getSelectors(
//   (state) => selectUsersData(state) ?? initialState
// );
