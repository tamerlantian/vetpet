import { apiSlice } from "../slices/apiSlice";
import { updateUser } from "../slices/authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: {
          email: credentials.email,
          password: credentials.password,
        },
      }),
      transformResponse: (response) => {
        return { token: response.token, user: response.data.user };
      },
    }),
    updateMe: builder.mutation({
      query: (data) => ({
        url: "/user/updateMe",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(updateUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation, useUpdateMeMutation } = authApi;
export { authApi };
