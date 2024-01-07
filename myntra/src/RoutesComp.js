import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductFolder/ProductsPage.js'
import DisplayProduct from './Pages/ProductFolder/DisplayProduct.js'
import CartView from './Pages/CartView.js'

export default function RoutesComp() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/displayProduct" element={<DisplayProduct/>}/>
            <Route path="/cartView" element={<CartView/>}/>
        </Routes>
    </>
  )
}
