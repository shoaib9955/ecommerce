<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const BuyButton = () => {
  const navigate = useNavigate();

  const handleCOD = () => {
    alert("✅ Order placed successfully! (Cash on Delivery)");
    navigate("/thank-you");
=======
// src/components/BuyButton.jsx
import React from "react";

const BuyButton = () => {
  const handleCOD = () => {
    alert("✅ Order placed successfully! (Cash on Delivery)");
    // You can add Firestore logic or redirect logic here if needed
>>>>>>> a3face3 (🚀 Initial commit with updated ecommerce project)
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
<<<<<<< HEAD
=======

export default BuyButton;
>>>>>>> a3face3 (🚀 Initial commit with updated ecommerce project)
