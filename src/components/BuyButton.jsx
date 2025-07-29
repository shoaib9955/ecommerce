import { useNavigate } from "react-router-dom";
import React from "react";

const BuyButton = () => {
  const navigate = useNavigate();

  const handleCOD = () => {
    alert("✅ Order placed successfully! (Cash on Delivery)");
    navigate("/thank-you");
  };

  return (
    <button
      onClick={handleCOD}
      className="mt-4 bg-pink-100/10 backdrop-blur-md border border-pink-300/30 text-pink-900 px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform"
    >
      Place Order (Cash on Delivery)
    </button>
  );
};

export default BuyButton;
