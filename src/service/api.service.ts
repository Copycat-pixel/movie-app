import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular");

    return response.data.result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
