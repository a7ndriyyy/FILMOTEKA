import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '22ba7957556991080b2d9f0336ac306f';
axios.defaults.params = {
  api_key: API_KEY,
};

export async function getMovies() {
  return (await axios.get(`${BASE_URL}/trending/all/day`)).data;
}

export async function getMoveDetails(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
}


export async function getCastMovie(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/credits`)).data;
}


export async function getReviewMovie(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/reviews`)).data;
}



export async function getSearchMovies(queryText, page = 1) {
  return (
    await axios.get(`${BASE_URL}/search/movie?query=${queryText}&page=${page}`)
  ).data;
}