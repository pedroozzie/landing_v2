import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey,
    language: "es-ES",
  },
});

export const getPopularSeries = async () => {
  const response = await tmdb.get("/tv/popular");
  return response.data.results;
};

/*export const getPopularMovies = async () => {
  const response = await tmdb.get("/movie/popular");
  return response.data.results;
};*/

export const searchSeries = async (query: string) => {
  const response = await tmdb.get("/search/tv", {
    params: { query },
  });
  return response.data.results;
};
