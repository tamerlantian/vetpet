import { apiSlice } from "../slices/apiSlice";

const petsApi = apiSlice.injectEndpoints({
  tagTypes: "Pets",
  endpoints: (builder) => ({
    fetchMyPets: builder.query({
      providesTags: ["MyPets", "Pets"],
      query: (page = 1, limit = 5) => `/pet/mypets?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        totalPages: result.totalPages,
        totalPets: result.totalPets,
      }),
    }),
    fetchPets: builder.query({
      providesTags: ["Pets"],
      query: (page = 1, limit = 5) => `/pet?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        totalPages: result.totalPages,
        totalPets: result.totalPets,
      }),
    }),
    updatePet: builder.mutation({
      invalidatesTags: ["Pets"],
      query: ({ id, data }) => {
        console.log(id, data);
        return { url: `/pet/${id}`, method: "PATCH", body: data };
      },
    }),
    addPet: builder.mutation({
      invalidatesTags: ["Pets"],
      query: (data) => ({
        url: "/pet/mypets",
        method: "POST",
        body: data,
      }),
    }),
    deletePet: builder.mutation({
      invalidatesTags: ["MyPets"],
      query: (id) => ({
        url: `/pet/mypets/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchMyPetsQuery,
  useAddPetMutation,
  useDeletePetMutation,
  useFetchPetsQuery,
  useUpdatePetMutation,
} = petsApi;
export { petsApi };
