import { useState, useEffect } from 'react';
import React from 'react';
import { getTrending } from "../../services/MoviesApi"
import {MoviesGallery} from "../../components/MoviesGallery/MoviesGallery"

export const HomePage = () =>{
    const [movies, setMovies] = useState(null);


    useEffect(() => {
         async function fetchTrendingMovies() {
      try {
          const moviesArr = await getTrending();
          console.log(moviesArr.data.results)
        setMovies(moviesArr.data.results);
       
      } catch (error) {
        console.log(error);
       
      }
    }
    fetchTrendingMovies();
    }, [])
  

    
    return (<>{movies && <MoviesGallery movies={movies } />}</>)

}