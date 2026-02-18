import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
const [products, setProducts] = useState([])
  useEffect(()=>{
fetchProduct()
  },[])
const fetchProduct = async() => {
const {data} = await axios("https://fakestoreapi.com/products")
  console.log(data);
  setProducts(data)
  }
return (
<div>
<h2>Product</h2>
</div>
  )
}

export default Product 



