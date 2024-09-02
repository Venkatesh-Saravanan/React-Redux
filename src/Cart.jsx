import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./cartSlice";
import "./Cart.css";  // Add your custom styles here

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item d-flex align-items-center" key={item.id}>
          <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h5>{item.title}</h5>
            <p>${item.price.toFixed(2)} x {item.quantity}</p>
            <div className="btn-group">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                -
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-summary mt-3">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;