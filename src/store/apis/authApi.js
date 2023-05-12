import { apiSlice } from "../slices/apiSlice";

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
    getMe: builder.query({
      query: () => ({
        url: "/user/getMe",
        method: "GET",
      }),
      transformResponse: (response) => {
        return { token: response.token, user: response.data.user };
      },
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery, useRefreshTokenMutation } =
  authApi;
export { authApi };
