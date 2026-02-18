import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading products...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">

              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "220px", objectFit: "contain" }}
              />
               <p className="text-muted mb-1">
                  <strong>Category:</strong> {item.category}
                </p>

              <div className="card-body d-flex flex-column">


                <p className="fw-bold text-success">
                  ₹ {item.price}
                </p>

               

                {/* 
              
              <h6 className="card-title">{item.title}</h6>

                
                <p style={{ fontSize: "14px" }}>
                  {item.description.substring(0, 90)}...
                </p>

               <p className="mb-2">
                  ⭐ {item.rating?.rate} 
                  <small className="text-muted">
                    {" "}({item.rating?.count} reviews)
                  </small>
                </p>

                <span className="badge bg-success mb-3">
                  In Stock
                </span>*/}

                <div className="d-flex justify-content-between mt-auto">

            <button className="btn btn-outline-dark w-50 me-2">
            <FaCartPlus />
             </button>

           <button className="btn btn-primary w-50"   onClick={() => navigate(`/product/${item.id}`)}>
           More Details
        </button>

           </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;





