import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleBuyNow = () => {
    const options = {
      key: "rzp_test_YourKeyHere", // 🔁 Replace this with your Razorpay Test Key
      amount: product.price * 100, // Razorpay uses paise
      currency: "INR",
      name: "TS Store",
      description: product.title,
      image: "https://your-logo-url.com/logo.png", // Optional: add your logo URL
      handler: function (response) {
        alert(
          "✅ Payment Successful!\nPayment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0d9488", // teal-600
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mb-2">
            ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow ml-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
