import baseApi from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/users/student",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false, // Ensure new endpoints are added without overwriting existing ones
});

export const { useLoginMutation, useRegisterMutation } = authApi;
