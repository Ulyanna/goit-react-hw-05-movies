import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import React from 'react';
import { getMovieSearch } from "../../services/MoviesApi"
import {MoviesGallery} from "../../components/MoviesGallery/MoviesGallery"

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
   const searchQuery = searchParams.get('query');
  const [movies,setMovies] = useState(null)

    
  useEffect(() => {
       if (!searchQuery) {
      return;
    }
         async function fetchSearchMovies() {
      try {
          const moviesForSearch = await getMovieSearch(searchQuery);
        console.log(moviesForSearch)
        setMovies(moviesForSearch.results)
       
      } catch (error) {
        console.log(error);
       
      }
    }
    fetchSearchMovies();
    }, [searchQuery])

const handlerChange = event => {
    setQuery(event.currentTarget.value)
    };
    const handlerOnSubmit = event => {
    event.preventDefault();
    // if (value.trim() === '') {
    //   toast.info("Please enter something !", {
    //     position: toast.POSITION.TOP_CENTER
    //   });
    //   return;
    // }
      if (query.trim() === '') {
      alert("Please enter something !")
      return;
    }
  setSearchParams({query})
    setQuery("");
    console.log(query)
  };
  return (
      <>
        <header>
        <form onSubmit={handlerOnSubmit}>
          <button type="submit">
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={query}
            onChange={handlerChange}
          />
     </form>
      </header>
      {movies && <MoviesGallery movies={ movies} />}
      </>
    )
}