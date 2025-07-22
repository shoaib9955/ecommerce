import { useNavigate } from "react-router-dom";

const BuyButton = () => {
  const navigate = useNavigate();

  const handleCOD = () => {
    alert("✅ Order placed successfully! (Cash on Delivery)");
    navigate("/thank-you");
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
