import { NavLink, Outlet } from "react-router-dom";

export const MoviesGalleryItem = ({ id, original_title }) => {
    return <>
        <NavLink>
            <p>{original_title }</p>
        </NavLink>
    </>
}