import React, { Component } from "react";
import ProductCard from "./ProductCard";

// Images
import Product1 from "../assets/photo1.png";
import Product2 from "../assets/photo2.png";

class TotalAmount extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Vintage Backbag",
        image: Product1,
        value: { current: 54.99, previous: 94.99 },
        quantity: 1,
      },
      {
        id: 2,
        name: "Levi Shoes",
        image: Product2,
        value: { current: 74.99, previous: 124.99 },
        quantity: 1,
      },
    ],
    shippingCost: 19,
  };

  onDecrement = id => {
    const { newProducts, index } = this.newProductArray(id);
    newProducts[index].quantity--;
    this.setState({ product: newProducts });
  };

  onIncrement = id => {
    const { newProducts, index } = this.newProductArray(id);
    newProducts[index].quantity++;
    this.setState({ product: newProducts });
  };

  newProductArray(id) {
    const newProducts = [...this.state.products];
    const index = this.state.products.findIndex(p => p.id === id);
    return { newProducts, index };
  }

  render() {
    return (
      <div className="card">
        {this.state.products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        <div className="summary">
          <div id="shippingCost">
            <span>Shipping</span>
            <span>${this.state.shippingCost}</span>
          </div>
          <div id="total">
            <span>Total</span>
            <span>
              $
              {this.state.products
                .reduce(
                  (sum, curr) => sum + curr.value.current * curr.quantity,
                  this.state.shippingCost
                )
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalAmount;
