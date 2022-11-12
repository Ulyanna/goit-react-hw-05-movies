
import { FiVideo } from "react-icons/fi"
import {Header, LogoText,LogoIcon,NavItem} from "./AppBar.styled"

export const AppBar = () => {
    return (
        <Header>
            <LogoIcon><FiVideo size='24' style={{
        color: "rgb(100, 100, 100)",
      }} /></LogoIcon>
            <LogoText> Movies</LogoText>
            <nav>
                <NavItem to={'/'}>Home</NavItem>
                <NavItem to={'/movies'}>Movies</NavItem>
            </nav>
        </Header>
    )
}
