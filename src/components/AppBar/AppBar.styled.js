import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 16px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(136, 136, 136, 0.753);
  box-shadow: 
    0px 1px 0px 0px rgba(0, 0, 0, 0.11);
`

export const LogoText = styled.p`
margin: 0;
margin-right: 140px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 94, 0);
  `

export const LogoIcon = styled.p`
  margin: 0;
  margin-right: 5px;
 
  color: rgb(0, 132, 255);
  `

export const NavItem = styled(NavLink)`
text-align: center;
padding: 15px;
border-radius: 3px;
text-decoration: none;
font-weight: 500;
color: black ;

&:not(:last-child){
margin-right: 20px;

}

&.active{
    color: rgb(255, 94, 0);
}
:hover:not(.active),
:focus-visible:not(.active){
    color: rgb(255, 94, 0);
}
`