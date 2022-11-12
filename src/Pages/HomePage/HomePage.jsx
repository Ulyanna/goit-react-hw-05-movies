import { useState, useEffect } from 'react';
import React from 'react';
import { getTrending } from "../../services/MoviesApi"
import {MoviesGallery} from "../../components/MoviesGallery/MoviesGallery"
import { Container, Headtext } from "./HomePage.styled"

 const HomePage = () =>{
    const [movies, setMovies] = useState(null);


    useEffect(() => {
         async function fetchTrendingMovies() {
      try {
          const moviesArr = await getTrending();
        setMovies(moviesArr.data.results);
       
      } catch (error) {
        console.log(error);
       
      }
    }
    fetchTrendingMovies();
    }, [])
  

    
    return (<>{movies && <Container><Headtext>Trending today:</Headtext><MoviesGallery movies={movies } /></Container> }</>)

}
export default HomePage