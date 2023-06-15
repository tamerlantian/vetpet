import { apiSlice } from "../slices/apiSlice";

export const petsExtApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Pet", "MyPet"],
  endpoints: (builder) => ({
    fetchMyPets: builder.query({
      providesTags: (result, error, arg) =>
        result
          ? result.pets.map(({ _id }) => ({ type: "MyPet", id: _id }))
          : ["MyPet"],
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/pet/mypets?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
      }),
    }),
    fetchPets: builder.query({
      providesTags: (result, error, arg) =>
        result
          ? result.pets.map(({ _id }) => ({ type: "Pet", id: _id }))
          : ["Pet"],
      query: ({ page, limit, name }) => {
        const queryName = name ? `&name=${name}` : "";
        return `/pet?page=${page}&limit=${limit}${queryName}`;
      },
      transformResponse: (result) => ({
        pets: result.data.pets,
        results: result.results,
        paging: {
          totalPages: result.paging.totalPages,
          docs: result.paging.docs,
        },
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
        { type: "MyPet" },
        { type: "Pet" },
      ],
      query: (data) => ({
        url: "/pet/mypets",
        method: "POST",
        body: data,
      }),
    }),
    deleteMyPet: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "Pet", id: arg.id },
        { type: "MyPet", id: arg.id },
      ],
      query: (id) => ({
        url: `/pet/mypets/${id}`,
        method: "DELETE",
      }),
    }),
    deletePet: builder.mutation({
      invalidatesTags: (result, error, arg) => [
        { type: "Pet", id: arg.id },
        { type: "MyPet", id: arg.id },
      ],
      query: (id) => ({
        url: `/pet/${id}`,
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
  useDeleteMyPetMutation,
} = petsExtApiSlice;
