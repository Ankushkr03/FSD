import React from "react";

function AddItemButton({ addItem }) {
  return (
    <button onClick={addItem}>
      Add Item
    </button>
  );
}

export default AddItemButton;