import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
text-decoration: none;
font-weight: 500;
color: black ;
display: flex;
flex-direction: column;
align-items: center;
:hover,
:focus-visible:not(.active){
    color: rgb(255, 94, 0);
}
`
export const TexTtitle = styled.p`
font-size: 20px;
margin-bottom: 10px;
margin-top: 10px;


`
export const Item = styled.li`
padding: 5px;
flex-basis: calc((100% - 45px) / 5);


border: 1px solid rgb(145, 145, 145);

`