import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

const [products, setProducts] = useState([])

  useEffect(()=>{
fetchProducts()
  },[])
const fetchProducts = async() => {
const {data} = await axios("https://fakestoreapi.com/products")
  console.log(data);
  setProducts(data)
  };

return (
<div className="container mt-4">
   <h2 className="text-center mb-4">Product</h2>
   <div className="row">
  {
    products && products.length > 0 ? (
      products.map((prod, _i)=>(
        <div className="col-md-4 mb-4" key={_i}>
          <Link to={`/product/${prod.id}`}>
           <div className="card p-3 m-2 h-100 shadow-sm">
            <img
                src={prod.image} 
                className="card-img-top p-3"
                alt={prod.title}
                style={{ height: "220px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
              <h6 className="card-title">{prod.title}</h6>
              <button className="btn btn-primary w-50"> 
                More details  
        </button>
        </div>
        </div>
          </Link>
       </div>
        ))
      )  :  (
      <h6 className="text-center">Loading...</h6>
    )
    }
    </div>
    </div>
)
}

export default Product 



