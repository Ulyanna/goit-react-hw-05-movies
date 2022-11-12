import { Suspense } from 'react';
import{AppBar} from "../AppBar/AppBar"
import { Outlet } from "react-router-dom"
import {Container} from "./Layout.styled"


export const Layout = () => {
    return (
      <Container>
        <AppBar />
          <Suspense fallback="">
            <Outlet />
          </Suspense>
      </Container>  
)
}