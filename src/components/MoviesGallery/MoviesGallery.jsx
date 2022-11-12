import React from 'react';
import PropTypes from 'prop-types';
import { MoviesGalleryItem } from "../MoviesGalleryItem/MoviesGalleryItem"
import {List} from "./MoviesGallery.styled"

export const MoviesGallery = ({movies}) => {
    return (
        <List>
            {movies.map(({id,original_title, poster_path

            }) => {
                return <MoviesGalleryItem id={id} original_title={original_title} key={id} poster_path

={ poster_path

} />
}) }
        </List>
    )
    
}

MoviesGallery.propTypes = {
  movies: PropTypes.array,
};