import { Language } from "@mui/icons-material";
import axios from "axios";
import type { IMovieResponse } from "../store/movies/types";

const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "ru-RU",
  },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get<IMovieResponse>("/movie/popular", {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error("Ошибка при получении популярных фильмов:", error);
    // Пробрасываем ошибку дальше, чтобы компонент UI мог показать обработчик (например, toast или баннер)
    throw error;
  }
};
