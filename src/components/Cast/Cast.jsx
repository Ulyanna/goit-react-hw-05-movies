import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/MoviesApi"
import { BASE_URL_IMG } from "../../services/MoviesApi"
import {CastList,Item,Name,Character} from "./Cast.styled"
import defIm from "../../image/unKnown.jpg"


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null)
 useEffect(() => {
         async function fetchMovieCast() {
      try {
          const castlist = await getMovieCast(movieId);
          setCast(castlist.cast)

      } catch (error) {
        console.log(error);
       
      }
    }
    fetchMovieCast();
     }, [movieId])
    return <>
        {cast && (<CastList>
            {cast.map(({ cast_id, character, original_name, profile_path }) => (<Item key={cast_id}> <img src={ profile_path ?`${BASE_URL_IMG}${profile_path}` :defIm
} alt={original_name} width="200" height="300"/> <Name>{original_name }</Name><Character>{character }</Character></Item>))}
        </CastList>)}
    </>
}

export default Cast