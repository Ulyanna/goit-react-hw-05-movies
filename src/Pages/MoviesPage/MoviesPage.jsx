import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrSearch } from "react-icons/gr";
import { getMovieSearch } from "../../services/MoviesApi"
import { MoviesGallery } from "../../components/MoviesGallery/MoviesGallery"
import {Wrapper,Button,Input} from "./MoviesPage.styled"

const MoviesPage = () => {
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
        if (moviesForSearch.total_results === 0) {
          toast.error("Sorry, nothing found!", {
        position: toast.POSITION.TOP_CENTER
      })
        }
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
    if (query.trim() === '') {
      toast.info("Please enter something !", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }
  setSearchParams({query})
    setQuery("");
  };
  return (
      <>
        <Wrapper>
        <form onSubmit={handlerOnSubmit}>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={query}
            onChange={handlerChange}
          />
 <Button type="submit"><GrSearch /> Search
          </Button>
     </form>
      </Wrapper>
      {movies && <MoviesGallery movies={movies} />}
      <ToastContainer/>
      </>
    )
}

export default MoviesPage