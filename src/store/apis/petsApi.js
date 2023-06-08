import { apiSlice } from "../slices/apiSlice";

const petsApi = apiSlice.injectEndpoints({
  tagTypes: ["Pet"],
  endpoints: (builder) => ({
    fetchMyPets: builder.query({
      providesTags: (result, error, arg) =>
        result
          ? result.pets.map(({ _id }) => ({ type: "MyPet", id: _id }))
          : ["Pet"],
      query: (page = 1, limit = 5) => `/pet/mypets?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        totalPages: result.totalPages,
        totalPets: result.totalPets,
      }),
    }),
    fetchPets: builder.query({
      providesTags: (result, error, arg) =>
        result
          ? result.pets.map(({ _id }) => ({ type: "Pet", id: _id }))
          : ["Pet"],
      query: (page = 1, limit = 5) => `/pet?page=${page}&limit=${limit}`,
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        totalPages: result.totalPages,
        totalPets: result.totalPets,
      }),
    }),
    updatePet: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "Pet", id: arg.id },
        { type: "MyPet", id: arg.id },
      ],
      query: ({ id, data }) => {
        return { url: `/pet/${id}`, method: "PATCH", body: data };
      },
    }),
    addPet: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "MyPet", id: result.data.pet._id },
        { type: "Pet", id: result.data.pet._id },
      ],
      query: (data) => ({
        url: "/pet/mypets",
        method: "POST",
        body: data,
      }),
    }),
    deletePet: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "Pet", id: arg.id },
        { type: "MyPet", id: arg.id },
      ],
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
