import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/MoviesApi"
import {Item,Author,Content} from "./Reviews.styled"


const Reviews = () => {
    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])

     useEffect(() => {
         async function fetchMovieReviews() {
      try {
          const reviews = await getMovieReviews(movieId);
          setReviews(reviews.results)      
       
      } catch (error) {
        console.log(error);
       
      }
    }
    fetchMovieReviews();
     }, [movieId])

    return <div>
        <ul>
            {reviews.length > 0 ? reviews.map(({ author, content,id }) => <Item key={id}><Author>{ author} :</Author><Content>{ content}</Content></Item>) : <Content>We don`t have any reviews for this movie</Content>}
        </ul>
    </div>

}

export default Reviews