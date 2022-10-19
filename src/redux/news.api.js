import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const newsApi = createApi({
  reducerPath: "news/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://unified-api.capital-system.com",
  }),
  endpoints: (build) => ({
    getNews: build.query({
      query: () => ({
        url: "/news/main",
        params: {
          offset: 0,
          limit: 10,
        },
        headers: {
          Authorization: "Bearer H4TNnYslx082e1KpHZJkpgzPzAVSNYEu",
          "instance-token": "beOYHnJwB7mjZ94NJo4lmu-yM1PEcUY5",
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
