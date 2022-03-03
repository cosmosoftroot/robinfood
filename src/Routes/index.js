import React, {useContext} from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Layout from "../components/Layout"
import { AuthContext } from "../context/AuthContext"
import Login from "../pages/Login"
import Stores from "../pages/Stores"
import Store from "../pages/Store" 

export const Router = () => {
  const {isAuth} = useContext(AuthContext)

  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"}  element={<Login />}/>
          {!isAuth && <Route path="*" element={<Navigate to="/" />} />}
          {!isAuth && <Route path="/tiendas" element={<Navigate to="/" />} />}
          {!isAuth && <Route path="/tienda/:id" element={<Navigate to="/" />} />}
          <Route path={"/tiendas"}  element={<Stores />}/>
          <Route path={"/tienda/:id"}  element={<Store />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}