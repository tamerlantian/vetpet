import { apiSlice } from "../slices/apiSlice";
import { setPage } from "../slices/customersSlice";
import { updateUser } from "../slices/authSlice";

const usersApi = apiSlice.injectEndpoints({
  tagTypes: ["User", "Employees"],
  endpoints: (builder) => {
    return {
      fetchEmployees: builder.query({
        providesTags: (result, error, arg) =>
          result
            ? result.employees.map(({ id }) => ({ type: "User", id }))
            : ["User"],
        query: (page = 1, limit = 5) =>
          `user/employees?page=${page}&limit=${limit}`,
        transformResponse: (result) => {
          return {
            employees: result.data.employees,
            results: result.results,
            totalPages: result.totalPages,
            totalEmployees: result.totalEmployees,
          };
        },
        async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(
              setPage({
                totalPages: data.totalPages,
                results: data.results,
                totalEmployees: data.totalEmployees,
              })
            );
          } catch (error) {}
        },
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
      fetchUsers: builder.query({
        providesTags: (result, error, arg) =>
          result
            ? result.users.map(({ id }) => ({ type: "User", id }))
            : ["User"],
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
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
        query: ({ data, id }) => {
          return {
            url: `/user/${id}`,
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: data,
          };
        },
      }),
      deleteUser: builder.mutation({
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
        query: (id) => {
          return {
            url: `/user/${id}`,
            method: "DELETE",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: [{ type: "User" }],
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
  useFetchEmployeesQuery,
  useUpdateMeMutation,
} = usersApi;
export { usersApi };
