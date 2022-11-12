import {lazy} from 'react';
import { Route, Routes,Navigate } from "react-router-dom";
import { Layout } from './Layout/Layout';


const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage/MoviesPage"))
const MoviedetailsPage = lazy(() => import("../Pages/MovieDetailsPage/MovieDetailsPage"))
const Cast = lazy(() => import("../components/Cast/Cast"))
const Reviews = lazy(() => import("../components/Reviews/Reviews"))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MoviedetailsPage />}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
          <Route path='*' element={<Navigate to={"/"} />} />
          </Route>
      </Routes>
    </>
  );
};
