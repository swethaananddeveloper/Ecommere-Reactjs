import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="row">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ height: "400px", objectFit: "contain" }}
            className="img-fluid"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="col-md-6">

          <h3>{product.title}</h3>

          <p className="text-muted">{product.category}</p>

          <h4 className="text-success">₹ {product.price}</h4>

          {/*<p>
            {product.rating?.rate} 
            ({product.rating?.count} reviews)
          </p>*/}

          <p>{product.description}</p>

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
    </div>
  );
}

export default ProductDetails;
