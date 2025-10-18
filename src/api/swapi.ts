import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Token } from "../entities/token/model/types";

const API_URL = "http://localhost:3000";

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTokens: builder.query<Token[], void>({
      query: () => `top-pairs`,
    }),
    getTokensByMint: builder.query<Token, string>({
      query: (baseMint: string) => `pair/${baseMint}`,
    }),
  }),
});

export const { useGetTokensQuery, useGetTokensByMintQuery } = swapiApi;
