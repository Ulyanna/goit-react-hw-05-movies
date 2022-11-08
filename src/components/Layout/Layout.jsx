
import{AppBar} from "../AppBar/AppBar"
// import { HomePage } from "../../Pages/HomePage/HomePage"
import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
      <div><AppBar/>
            <Outlet />
            </div>  
)
}