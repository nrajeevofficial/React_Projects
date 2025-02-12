import React, { useState } from "react";
import "../components/itemShuffle.css";

function ItemShuffler() {
  const [items, setItems] = useState([
    "Fruits",
    "Vegetables",
    "Groceries",
    "Stationeries",
    "Utensils",
  ]);

  return (
    <div className="main">
      <h1 className="heading">List of Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => setItems([...items].sort(() => Math.random() - 0.5))}
      >
        Shuffle
      </button>
    </div>
  );
}

export default ItemShuffler;
