import { useParams,Outlet,useLocation } from "react-router-dom";
import { useState, useEffect,Suspense } from 'react';
import { getMovieDetails } from "../../services/MoviesApi";
import { MovieDetails } from "../../components/MovieDetails/MovieDetails";
import { Section, HeaderText, List, Item, Link } from "./MovieDetailsPage.styled"
import { BackLink } from "components/BackLink/BackLink";



const MoviedetailsPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const location = useLocation()
  const backLinkHref = location.state?.from ?? "/movies";

     useEffect(() => {
         async function fetchMovieDetails() {
      try {
          const movie = await getMovieDetails(movieId);
        setMovie(movie)
        
       
      } catch (error) {
        console.log(error);
       
      }
    }
    fetchMovieDetails();
     }, [movieId])
  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie && <MovieDetails movie={movie} />}
      <Section>
        <HeaderText>Additional information</HeaderText>
         <List>
            <Item>
                <Link to={"cast"}>Cast</Link>
            </Item>
            <Item>
                <Link to={"reviews"}>Reviews</Link>
            </Item>
        </List>
              <Suspense fallback="">
                <Outlet />
              </Suspense>
             </Section>
     
    </main>
  );
}

export default MoviedetailsPage