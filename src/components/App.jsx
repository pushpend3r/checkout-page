import React from "react";
import CheckoutFoam from "./CheckoutFoam";
import TotalAmount from "./TotalAmount";

const App = props => {
  return (
    <>
      <h1>Checkout</h1>
      <div className="main">
        <TotalAmount />
        <CheckoutFoam />
      </div>
      <footer>
        Pushpender Singh @
        <a href="https://devchallenges.io">DevChallenges.io</a>
      </footer>
    </>
  );
};

export default App;
