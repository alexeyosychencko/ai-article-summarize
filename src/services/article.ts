import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Summary } from "../types/article";

const REACT_APP_RAPID_API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", REACT_APP_RAPID_API_KEY || "");
      headers.set(
        "x-rapidapi-host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query<Summary, string>({
      query: (articleUrl) =>
        `/summarize?url=${encodeURIComponent(articleUrl)}&length=3`
    })
  })
});

export const { useLazyGetSummaryQuery } = articleApi;
