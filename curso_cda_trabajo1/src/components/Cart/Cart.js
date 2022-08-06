import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import Form from "./Form";

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const Subtotal = () => {
    return cart.map((item) => (
      <div key={item.id} className="subTotal">
        <h6>{item.name}</h6>
        <h6>${item.price * item.quantity}</h6>
      </div>
    ));
  };

  if (cart.length === 0) {
    return (
      <div>
        <div className="cartDisplay">
          <div className="cartContainer">
            <h2>No hay productos</h2>
          </div>
          <div className="cartTotalContainer">
            <Form totalPrice={total} cart={cart} clearCart={clearCart} />
            <ul>
              <li key="button">
                <button className="vaciar" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </li>
              <li key="subtotal" className="subTotalContainer">
                <Subtotal />
              </li>
              <li key="total" className="total">
                <h2>Total: </h2>
                <h2>${total}</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="cartDisplay">
        <div className="cartContainer">
          {cart.map((p) => (
            <CartDetail key={p.id} prod={p} />
          ))}
        </div>
        <div className="cartTotalContainer">
          <Form totalPrice={total} cart={cart} clearCart={clearCart} />
          <ul>
            <li key="button">
              <button className="vaciar" onClick={clearCart}>
                Vaciar carrito
              </button>
            </li>
            <li key="subtotal" className="subTotalContainer">
              <Subtotal />
            </li>
            <li key="total" className="total">
              <h2>Total: </h2>
              <h2>${total}</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
