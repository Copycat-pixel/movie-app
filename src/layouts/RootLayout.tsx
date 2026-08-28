import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { getPopularMovies } from "../service/api.service";

const RootLayout = () => {
  useEffect(() => {
    const movies = getPopularMovies();
    console.log(movies);
  }, []);
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
