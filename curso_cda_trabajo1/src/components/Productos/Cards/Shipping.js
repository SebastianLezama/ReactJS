import React from "react";

const Shipping = ({ priceValue, className }) => {
  const Cuotas = () => {
    if (priceValue >= 4000) {
      return <>6x $ {(priceValue / 6).toFixed(2)}</>;
    }
  };

  const Envios = () => {
    if (priceValue >= 2000) {
      return <>Envío gratis</>;
    }
  };

  return (
    <div className={className}>
      <h6>
        <Cuotas />
      </h6>
      <h6>
        <Envios />
      </h6>
    </div>
  );
};

export default Shipping;
