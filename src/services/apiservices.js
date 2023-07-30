import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '444ce9bebe0009743abec909748a2f37';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const TRENDING_DAY_ENDPOINT = '/trending/movie/day';

//  пошук фільму за ключовим словом на сторінці фільмів.
const SEARCH_QUERY_ENDPOINT = '/search/movie';

//  запит повної інформації про фільм для сторінки кінофільму.
const BY_ID_ENDPOINT = '/movie/';

//за жанрами
const GENRE_ENDPOINT = '/genre/movie/list';

const LANGUAGE = 'en-US';
const ADULT = 'false';

//запит на трендові фільми дня
export async function getDayTrendingMovie(page = 1) {
  const resp = await axios.get(
    `${BASE_URL}${TRENDING_DAY_ENDPOINT}?api_key=${API_KEY}&page=${page}&language=${LANGUAGE}`
  );
  return resp.data;
}

//пошук фільму за ключовим словом

export async function getSearchQueryMovie(searchQuery, page = 1) {
  const resp = await axios.get(
    `${BASE_URL}${SEARCH_QUERY_ENDPOINT}?query=${searchQuery}&api_key=${API_KEY}&page=${page}&language=${LANGUAGE}&include_adult=${ADULT}`
  );
  return resp.data;
}

//запит за ID
export async function getSearchByIdMovie(movie_id) {
  const resp = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}${movie_id}?api_key=${API_KEY}&language=${LANGUAGE}&include_adult=${ADULT}`
  );
  return resp.data;
}

//запит інформації про акторський склад
export async function getCreditMovie(id) {
  const resp = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}${id}/credits?api_key=${API_KEY}`
  );
  return resp.data;
}

//запит оглядів
export async function getReviewsMovie(id) {
  const resp = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}${id}/reviews?api_key=${API_KEY}`
  );
  return resp.data;
}

//Отримує відео до фільму за ID

export async function getVideoMovie(id) {
  const resp = await axios.get(
    `${BASE_URL}${BY_ID_ENDPOINT}${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return resp.data;
}

//за жанрами
export async function getGenresMovie() {
  const resp = await axios.get(
    `${BASE_URL}${GENRE_ENDPOINT}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return resp.data;
}

export async function fetchMovieCastById(id) {
  const { data } = await axios({
    url: `${BY_ID_ENDPOINT}${id}/credits`,
  });
  return data;
}
