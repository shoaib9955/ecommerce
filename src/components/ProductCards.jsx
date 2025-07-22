import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage("✅ Item added to cart!");
    setTimeout(() => setAddedMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full h-40 object-contain mb-2 hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-md font-semibold mb-1">
        {product.title.length > 30
          ? product.title.slice(0, 30) + "..."
          : product.title}
      </h3>
      <p className="text-sm text-green-700 mb-3">₹{product.price}</p>

      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-red-400 hover:scale-110 transition-transform"
        >
          View Details
        </Link>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded shadow"
        >
          Add to Cart
        </button>
      </div>

      {addedMessage && (
        <p className="text-green-600 text-sm mt-2">{addedMessage}</p>
      )}
    </div>
  );
};

export default ProductCard;
