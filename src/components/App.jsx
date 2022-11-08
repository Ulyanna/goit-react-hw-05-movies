import React from 'react';

import { Route, Routes } from "react-router-dom";
import { Layout } from './Layout/Layout';
import { HomePage } from "../Pages/HomePage/HomePage"
import {MoviesPage} from "../Pages/MoviesPage/MoviesPage"
import {NotFound} from "./NotFound/NotFound"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path='*' element={<NotFound />} />
          </Route>
      </Routes>
    </>
  );
};
