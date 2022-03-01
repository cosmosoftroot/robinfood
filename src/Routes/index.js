import {BrowserRouter, Routes, Route} from "react-router-dom"

export const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={"/tiendas"}  element={<div>test</div>}/>
        <Route path={"/tienda/:id"}  element={<div>tienda</div>}/>
        <Route path={"/"}  element={<div>login</div>}/>
      </Routes>
    </BrowserRouter>
  )
}