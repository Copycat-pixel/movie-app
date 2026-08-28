import { create } from "zustand";
import { getPopularMovies } from "../../service/api.service";
import type { IMovieStore } from "./types";

export const useMoviesStore = create<IMovieStore>((set) => ({
  popularMovies: [],
  loading: false,
  error: null,

  actions: {
    fetchPopularMovies: async () => {
      try {
        const movies = await getPopularMovies();
        set({ popularMovies: movies });
      } catch (error) {}
    },
  },
}));
