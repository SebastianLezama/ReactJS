import React, { useCallback, useEffect, useState } from "react";

const Shipping = ({ priceValue, className, grow, onProd }) => {
  const [width, setWidth] = useState(false);
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

  const checkWidth = useCallback(() => {
    const updatedWidth = window.innerWidth;
    setWidth(updatedWidth);
  });

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [width, checkWidth]);

  const CuotasEnvios = () => {
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

  if (width < 960 || onProd) {
    return <CuotasEnvios />;
  }
  if (grow) {
    return <CuotasEnvios />;
  }
};

export default Shipping;
