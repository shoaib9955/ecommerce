import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-green-100 via-green-200 to-green-300">
        <div className="max-w-xl mx-auto mt-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-8 text-center">
          <p className="text-2xl font-semibold text-green-900">
            🛒 Your cart is empty.
          </p>
        </div>
      </div>
    );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    alert("✅ Order placed! You selected Cash on Delivery.");
    clearCart();
  };

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-green-100 via-green-200 to-green-300">
      <div className="max-w-4xl mx-auto bg-purple-500/20 backdrop-blur-md border border-purple-400/20 rounded-xl shadow-lg p-6 text-purple-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-md"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-28 h-28 object-contain rounded-lg border border-white/20"
                />
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-lg text-green-700">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right">
          <p className="text-xl font-bold text-green-800 mb-4">
            Total: ₹{total.toLocaleString("en-IN")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={handleBuyNow}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition"
            >
              Buy Now (Cash on Delivery)
            </button>

            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
