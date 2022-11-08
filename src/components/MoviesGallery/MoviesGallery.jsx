import React from 'react';
import {MoviesGalleryItem} from "../MoviesGalleryItem/MoviesGalleryItem"
export const MoviesGallery = ({movies}) => {
    return (
        <ul>
            {movies.map(({id,original_title
            }) => {
                return <MoviesGalleryItem id={id} original_title={original_title} key={id } />
}) }
        </ul>
    )
    
}

