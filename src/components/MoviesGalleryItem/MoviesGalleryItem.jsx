import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { BASE_URL_IMG } from "../../services/MoviesApi"
import { NavItem, TexTtitle, Item } from "./MoviesGalleryItem.styled"
import defIm from "../../image/commingSoon.jpg"

export const MoviesGalleryItem = ({ id, original_title,poster_path
}) => {
    const location = useLocation();
    return <>
        <Item>
          <NavItem to={`/movies/${id}`} state = {{from: location}}>
                <img src={poster_path ? `${BASE_URL_IMG}${poster_path}`: defIm} alt={original_title } width='300' height='450'/>
                <TexTtitle>{original_title }</TexTtitle>
          </NavItem>
        </Item>
           </>
}


MoviesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  original_title: PropTypes.string,
  poster_path: PropTypes.string
};