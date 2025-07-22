import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ⬅️ add useNavigate
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate(); // ⬅️ initialize navigate

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setAddedMessage("✅ Item added to cart!");
    setTimeout(() => setAddedMessage(""), 3000);
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`); // ⬅️ redirect to checkout page
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-60 h-60 object-contain border rounded"
        />
        <div>
          <p className="text-gray-800 font-bold mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-2">
            ₹{product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Add to Cart
          </button>

          {addedMessage && (
            <p className="text-green-600 mt-2 font-medium">{addedMessage}</p>
          )}

          <button
            onClick={handleBuyNow}
            className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow ml-4"
          >
            Buy Now (COD)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
