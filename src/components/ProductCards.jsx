import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext"; // import Auth context
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth(); // get logged-in user
  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage("✅ Item added to cart!");
    setTimeout(() => setAddedMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="bg-pink-200 backdrop-blur-md border border-pink-600/30 p-4 rounded shadow hover:shadow-lg transition flex flex-col">
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

        {/* Only show Add to Cart if user is logged in */}
        {user && (
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded shadow"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Optional message */}
      {addedMessage && (
        <p className="text-green-600 text-sm mt-2">{addedMessage}</p>
      )}

      {/* Optional: show message to non-logged-in users */}
      {!user && (
        <p className="text-red-500 text-sm mt-2">
          Login to add items to your cart
        </p>
      )}
    </div>
  );
};

export default ProductCard;
