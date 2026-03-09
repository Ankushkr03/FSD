import React, { useState } from "react";
import CartDisplay from "./components/CartDisplay";
import AddItemButton from "./components/AddItemButton";
import "./App.css";


function App() {
  const [cartCount, setCartCount] = useState(0);

  const addItem = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <h1>Shopping Cart Indicator</h1>


      <AddItemButton addItem={addItem} />

      <CartDisplay count={cartCount} />
    </div>
  );
}

export default App;