import "./Cart.scss";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const { responseId } = useParams();

  function copyCheckoutCode() {
    const copyText = document.getElementById("codigoPedido");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <div className="checkoutContainer">
      <div className="checkout">
        <div>
          <h3>Gracias por tu compra!</h3>
          <h5>Éste es tu código para que puedas seguir el envío:</h5>
        </div>
        <div>
          <input
            type="text"
            defaultValue={responseId}
            id="codigoPedido"
          ></input>
          <button className="copyButton" onClick={() => copyCheckoutCode()}>
            Copiar código
          </button>
        </div>
      </div>
      <Link to="/productos" className="flatButton">
        <h2>Seguir Comprando</h2>
      </Link>
    </div>
  );
};

export default Checkout;
