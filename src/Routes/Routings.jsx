import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import ProductDetail from '../Pages/ProductDetail'

const Routings = () => {
  return (
    <Routes>
<Route path='/' element ={ <Product />} />
<Route path='/product/:id' element ={<ProductDetail />} />
<Route path='/*' element ={<h2>Page Not Found...</h2>} />

    </Routes>
  ) 
}

export default Routings