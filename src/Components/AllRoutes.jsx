import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from './ADDCitites/Products'
import Home from "../Pages/Home"
import Nailpolish from './Nail/Nailpolish'
import LoginSignUp from './Auth/LoginSingUp'
import Register from './Auth/Register'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Products/>}></Route>
        <Route path='/nail' element={<Nailpolish/>}></Route>
        <Route path='/log' element={<LoginSignUp/>}></Route>
        <Route path='/register' element={<Register/>}></Route>

    </Routes>
  )
}

export default AllRoutes