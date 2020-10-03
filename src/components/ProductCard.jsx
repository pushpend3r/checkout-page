import React from "react";
import QuantityBtn from "./QuantityBtn";

const ProductCard = ({ product, onIncrement, onDecrement }) => {
  const { name, id, value, quantity, image } = product;
  return (
    <div className="product-card">
      <div className="img">
        <img src={image} alt="#" />
      </div>
      <div className="details">
        <p>{name}</p>
        <span className="current">
          ${(value.current * quantity).toFixed(2)}
        </span>
        <span className="previous">
          <s>${(value.previous * quantity).toFixed(2)}</s>
        </span>
        <br />
        <QuantityBtn
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          id={id}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

export default ProductCard;
