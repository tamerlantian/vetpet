import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/user/`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => {
    return {
        getMe: builder.query({
            query: () => {
                return {
                    url
                }
            }
        })
    }
  }
});

export { userApi };
