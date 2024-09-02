import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "./ProductList.css";  // Add your custom styles here

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="card product-card" key={product.id}>
          <img src={product.thumbnail} className="card-img-top product-image" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price.toFixed(2)}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;