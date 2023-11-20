import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const beersApi = createApi({
  reducerPath: 'beersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/' }),
  endpoints: (build) => ({
    getBeers: build.query({
      query: ({
        searchString,
        page,
        value,
      }: {
        searchString: string;
        page: string;
        value: string;
      }) =>
        searchString
          ? `beers?beer_name=${searchString.replace(
              ' ',
              '_'
            )}&page=${page}&per_page=${value}`
          : `beers?page=${page}&per_page=${value}`,
    }),
    checkPage: build.query({
      query: ({
        searchString,
        newPage,
        value,
      }: {
        searchString: string;
        newPage: string;
        value: string;
      }) =>
        searchString
          ? `beers?beer_name=${searchString.replace(
              ' ',
              '_'
            )}&page=${newPage}&per_page=${value}`
          : `beers?page=${newPage}&per_page=${value}`,
    }),
    getBeer: build.query({
      query: (id: string) => `beers/${id}`,
    }),
  }),
});

export const { useGetBeersQuery, useGetBeerQuery, useCheckPageQuery } =
  beersApi;
