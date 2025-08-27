import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext"; // import Auth context

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");
  const { addToCart } = useCart();
  const { user } = useAuth(); // get logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage("✅ Item added to cart!");
    setTimeout(() => setAddedMessage(""), 3000);
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-green-200 via-green-300 to-blue-200">
      <div
        className="max-w-6xl mx-auto 
        bg-purple-600/30 backdrop-blur-md 
        border border-purple-900/30 
        rounded-2xl shadow-lg 
        p-6 flex flex-col md:flex-row gap-6 text-white"
      >
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-lg border border-white/10"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-purple-100">
            {product.title}
          </h2>
          <p className="text-gray-200 mb-4 text-sm sm:text-base">
            {product.description}
          </p>

          <p className="text-xl sm:text-2xl font-semibold text-pink-700 mb-6">
            ₹{product.price}
          </p>

          {/* Conditional Buttons */}
          {user ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded shadow transition hover:shadow-purple-500 text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow transition hover:shadow-pink-500 text-sm sm:text-base"
              >
                Buy Now (COD)
              </button>
            </div>
          ) : (
            <p className="text-red-500 text-sm sm:text-base">
              Please login to add items to cart or buy.
            </p>
          )}

          {addedMessage && (
            <p className="text-pink-200 mt-4 font-medium text-sm sm:text-base">
              {addedMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
