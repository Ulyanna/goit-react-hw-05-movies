import { NavLink } from "react-router-dom";
// import { HomePage } from "Pages/HomePage/HomePage";

export const AppBar = () => {
    return (
        <header>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
            </nav>
        </header>
    )
}
