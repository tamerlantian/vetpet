import { apiSlice } from "../slices/apiSlice";
import { setCredentials } from "../slices/authSlice";

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
      transformResponse: (response) => ({
        token: response.token,
        user: response.data.user,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => ({
        token: response.token,
        user: response.data.user,
      }),
      async onQueryStarted(undefined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {}
      },
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/user/forgotPassword",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ data, resetToken }) => ({
        url: `/user/resetPassword/${resetToken}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useSignupMutation,
  useChangePasswordMutation,
} = authApi;
export { authApi };
