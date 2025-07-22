// src/components/BuyButton.jsx
import React from "react";

const BuyButton = () => {
  const handleCOD = () => {
    alert("✅ Order placed successfully! (Cash on Delivery)");
    // You can add Firestore logic or redirect logic here if needed
  };

  return (
    <button
      onClick={handleCOD}
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Place Order (Cash on Delivery)
    </button>
  );
};

export default BuyButton;
