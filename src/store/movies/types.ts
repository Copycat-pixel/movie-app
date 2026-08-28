export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  adult: boolean;
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieState {
  popularMovies: IMovie[];
  loading: boolean;
  error: string | null;
}

export interface IMovieActions {
  fetchPopularMovies: () => Promise<void>;
}

export interface IMovieStore extends IMovieState {
  actions: IMovieActions;
}
