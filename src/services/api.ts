import axios from "axios";
import type { Movie } from "./movie";
import type { MovieDetails } from "./movie/type";

let bearerToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2Y3YzMxMmVhYzRjMTE4NzFmOGY0N2NmN2JjOWRmNSIsIm5iZiI6MTU3OTAwODU3MC41NTksInN1YiI6IjVlMWRjMjNhYTI0YzUwMDAxMzBiZTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23p3_LsFv9KwwKKgSvw0oGzJSTFrhSpgwtL6Q13U9P8";

const API_KEY = import.meta.env.VITE_API_KEY;

const API = axios.create({
  params: {
    api_key: API_KEY,
    languege: "en-US",
  }
});

export const getImageUrl = (path: string) => 
  path ? `https://image.tmdb.org/t/p/original${path}` : undefined;

/**
 * Mengambil daftar film dari endpoint API yang ditentukan.
 *
 * @param endpoint - Endpoint API untuk mengambil data film.
 * @returns Promise yang menghasilkan array objek `Movie`.
 *          Mengembalikan array kosong jika terjadi error saat pengambilan data.
 */
export const fetchMovies = async (endpoint: string): Promise<Movie[]> => {
  try {
    const response = await API.get(endpoint);
    return response.data.results as Movie[];
  } catch (error) {
    console.error(`Error fetching movies from ${endpoint}:`, error);
    return []; // Return an empty array in case of error
  }
};

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  try {
    const response = await API.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "videos,credits",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movies from ${movieId}:`, error);
    throw error;
  }
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await API.get("/search/movie", {
      params: {
        query,
      }
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error searching movies for "${query}":`, error)
    return[];
  }
}

export async function fetchSimilarMovies(id: string): Promise<Movie[]> {
  try {
    const response = await API.get(`/movie/${id}/similar`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching similar movies for ${id}:`, error);
    return [];
  }
}


/**
 * Mengatur bearer token yang akan digunakan untuk permintaan Axios.
 *
 * @param token - String bearer token yang akan digunakan untuk autentikasi.
 */
export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

API.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = import.meta.env.VITE_BASE_URL;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default API;
