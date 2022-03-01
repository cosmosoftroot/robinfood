import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "../components/Layout"
import Login from "../pages/Login"

export const Router = () => {
  return(
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={"/tiendas"}  element={<div>test</div>}/>
        <Route path={"/tienda/:id"}  element={<div>tienda</div>}/>
        <Route path={"/"}  element={<Login />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}