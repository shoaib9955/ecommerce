// src/pages/Checkout.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ COD Order Placed!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}`
    );
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Cash on Delivery Checkout</h2>
      <div className="bg-white rounded p-4 shadow mb-6">
        <p className="text-lg font-semibold">{product.title}</p>
        <p>Price: ₹{product.price}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          required
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
