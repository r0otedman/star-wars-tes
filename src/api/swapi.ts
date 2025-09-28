import {
  createApi,
  fetchBaseQuery,
  EndpointBuilder,
} from "@reduxjs/toolkit/query/react";

// ================== Types ==================
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

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
}

export interface Planet {
  name: string;
  climate: string;
  population: string;
}

// ================== Constants ==================
const API_URL = "https://swapi.py4e.com/api/";
const stripBaseUrl = (url: string) => url.replace(API_URL, "");

// ================== API ==================
export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => {
    const buildNameEndpoint = (
      b: EndpointBuilder<ReturnType<typeof fetchBaseQuery>, never, "swapiApi">
    ) =>
      b.query<{ name: string }, string>({
        query: (url) => stripBaseUrl(url),
        keepUnusedDataFor: 300,
      });

    return {
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

      getFilm: builder.query<Film, string>({
        query: (url) => stripBaseUrl(url),
      }),

      getPlanet: builder.query<Planet, string>({
        query: (url) => stripBaseUrl(url),
      }),

      getSpecies: buildNameEndpoint(builder),
      getStarship: buildNameEndpoint(builder),
      getVehicle: buildNameEndpoint(builder),
    };
  },
});

// ================== Hooks ==================
export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetFilmQuery,
  useGetPlanetQuery,
  useGetSpeciesQuery,
  useGetStarshipQuery,
  useGetVehicleQuery,
} = swapiApi;
