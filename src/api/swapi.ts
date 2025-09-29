import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const API_URL = "https://swapi.py4e.com/api/";

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      CharacterListResponse,
      { page?: number; search?: string }
    >({
      query: ({ page = 1, search = "" }) =>
        `people/?page=${page}${
          search ? `&search=${encodeURIComponent(search)}` : ""
        }`,
    }),

    getCharacterById: builder.query<Character, string | number>({
      query: (id) => `people/${id}/`,
    }),

    getFilm: builder.query<{ title: string }, string>({
      query: (url) => url.replace(API_URL, ""),
    }),

    getPlanet: builder.query<{ name: string }, string>({
      query: (url) => url.replace(API_URL, ""),
    }),

    getSpecies: builder.query<{ name: string }, string>({
      query: (url) => url.replace(API_URL, ""),
    }),

    getStarship: builder.query<{ name: string }, string>({
      query: (url) => url.replace(API_URL, ""),
    }),

    getVehicle: builder.query<{ name: string }, string>({
      query: (url) => url.replace(API_URL, ""),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetFilmQuery,
  useGetPlanetQuery,
  useGetSpeciesQuery,
  useGetStarshipQuery,
  useGetVehicleQuery,
} = swapiApi;
