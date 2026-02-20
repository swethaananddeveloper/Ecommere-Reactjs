import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const {id} = useParams();
      const [ProductDetail, setProd] = useState({});
    //console.log(id)
useEffect(()=>{
fetchProd();
  },[id]);

const fetchProd = async() => {
const {data} = await axios(`https://fakestoreapi.com/products/${id}`)
console.log(data);
  setProd(data);
  };
 return (
    <div className="container mt-5">
   
{/* Page Heading */}

 <h2 className="text-center mb-5 fw-bold">
  ProductDetails
  </h2>
{
  ProductDetail && Object.keys(ProductDetail).length > 0 ? (
     <div className="row align-items-center">
{/* LEFT SIDE IMAGE */}
     <div className="col-md-6 text-center mb-4">
                  <div className="card shadow p-4 border-0">
          <img
            src={ProductDetail.image}
            alt={ProductDetail.title}
            style={{ height: "400px", objectFit: "contain" }}
            className="img-fluid"
          />
        </div>
</div>
{/* RIGHT SIDE DETAILS */}
        <div className="col-md-6">

            <h3>Title : {ProductDetail.title}</h3>
            <p className="text-muted">Category : {ProductDetail.category}</p>
            <h4 className="text-success"> Price : ₹ {ProductDetail.price}</h4>
            <p>Description :{ProductDetail.description}</p>

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-warning flex-fill">
              Add to Cart
            </button>

            <button className="btn btn-success flex-fill">
              Buy Now
            </button>
          </div>
        </div> 
      </div> 
      
    ) : ( 
         <p className= "text-center">Loading...</p>
)
}
</div> 
  ); 
}
export default ProductDetail;