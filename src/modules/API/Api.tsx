import axios from 'axios';

const BASE_URL = 'https://api.punkapi.com/v2/beers';

export async function searchItems(
  searchString: string,
  page: string,
  value: string
) {
  const url = searchString
    ? `${BASE_URL}?beer_name=${searchString.replace(
        ' ',
        '_'
      )}&page=${page}&per_page=${value}`
    : `${BASE_URL}?page=${page}&per_page=${value}`;
  const result = await axios.get(url);
  return result;
}

export async function searchPage(
  searchString: string,
  page: string,
  value: string
) {
  const url = searchString
    ? `${BASE_URL}?beer_name=${searchString.replace(
        ' ',
        '_'
      )}&page=${page}&per_page=${value}`
    : `${BASE_URL}?page=${page}&per_page=${value}`;
  const result = await axios.get(url);
  return result;
}

export async function searchItem(id: string) {
  const url = `${BASE_URL}/${id}`;
  const result = await axios.get(url);
  return result;
}
