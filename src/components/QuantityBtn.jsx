import React, { Component } from "react";

class QuantityBtn extends Component {
  render() {
    const { id, quantity } = this.props;
    return (
      <div className="quantity-btn">
        <button
          type="button"
          onClick={() => this.props.onDecrement(id)}
          disabled={quantity === 1 ? true : false}
        >
          -
        </button>
        <span className="noOfitems">{quantity}</span>
        <button type="button" onClick={() => this.props.onIncrement(id)}>
          +
        </button>
      </div>
    );
  }
}

export default QuantityBtn;
