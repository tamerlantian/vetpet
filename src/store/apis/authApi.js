import { apiSlice } from "../slices/apiSlice";
import { updateUser, setCredentials } from "../slices/authSlice";

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
        } catch (error) {
          console.log(error);
        }
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
    updateMe: builder.mutation({
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
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useUpdateMeMutation,
  useSignupMutation,
  useChangePasswordMutation,
} = authApi;
export { authApi };
