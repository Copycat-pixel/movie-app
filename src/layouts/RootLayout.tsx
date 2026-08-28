import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useMoviesStore } from "../store/movies/useMovieStore";
import { useEffect } from "react";

const RootLayout = () => {
  const movies = useMoviesStore((state) => state.popularMovies);
  const fetchPopularMovies = useMoviesStore(
    (state) => state.actions.fetchPopularMovies,
  );

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  console.log(movies);

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
