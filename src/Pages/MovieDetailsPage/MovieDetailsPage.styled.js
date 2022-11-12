import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Section = styled.section`
text-align: center;
`

export const HeaderText = styled.h3`
font-size: 22px;
text-transform: uppercase;
margin-top: 20px;
margin-bottom: 30px;
font-weight: 500;
`

export const List = styled.ul`
display: flex;
justify-content: center;
margin-bottom: 30px;
`

export const Item = styled.li`
&:not(:last-child){
    margin-right: 30px;
}
`

export const Link = styled(NavLink)`
display: inline-block;
border-radius: 4px;
 border: 1px solid rgba(136, 136, 136, 0.353);
  box-shadow: 
    0px 1px 0px 0px rgba(0, 0, 0, 0.11);
padding: 8px;
width: 80px;
text-decoration: none;
text-align: center;
color: black;

&.active{
    background-color: rgb(255, 94, 0);
    color: white;
    border: 1px solid rgba(136, 136, 136, 0.153);
  box-shadow: 
    0px 1px 0px 0px rgba(0, 0, 0, 0.11);
    
}
:hover:not(.active),
:focus-visible:not(.active){
    background-color: rgb(255, 94, 0);
    color: white;
}
`