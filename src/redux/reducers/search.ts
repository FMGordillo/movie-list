import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = process.env.REACT_APP_IMDB_API_KEY || "k_et6cunyh";
const imdbURL = "https://imdb-api.com";
const imdbSearchURL = "/en" + "/API/Search/" + apiKey;

export type Result = {
  id: string;
  resultType: "Title" | "Name";
  description: string;
  image: string;
  title: string;
};

const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: imdbURL }),
  endpoints: (builder) => ({
    getBySearch: builder.query<{ results: Result[] }, string>({
      query: (search) => `${imdbSearchURL}/${search}`,
    }),
  }),
});

export const { useLazyGetBySearchQuery } = searchApi;

export default searchApi;
