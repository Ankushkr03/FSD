import React from "react";

function CartDisplay({ count }) {
  return (
    <div>
      <h2>Total Items in Cart: {count}</h2>
    </div>
  );
}

export default CartDisplay;