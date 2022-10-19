import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const newsApi = createApi({
  reducerPath: "news/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.capital-system.com/news",
  }),
  endpoints: (build) => ({
    getNews: build.query({
      query: () => ({
        url: "/index",
        method: 'GET',
        params: {
          offset: 0,
          limit: 10,
        },
        headers: {
          "authorization": "Bearer H4TNnYslx082e1KpHZJkpgzPzAVSNYEu",
          "instance-token": "beOYHnJwB7mjZ94NJo4lmu-yM1PEcUY5",
        },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
