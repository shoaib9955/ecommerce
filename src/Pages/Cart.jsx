import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0)
    return <p className="p-4 text-center text-lg">🛒 Your cart is empty.</p>;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    alert("✅ Order placed! You selected Cash on Delivery.");
    clearCart();
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 border-b pb-2"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>
              ${item.price} × {item.quantity}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <p className="text-lg font-semibold mb-4">Total: ${total.toFixed(2)}</p>

        <button
          onClick={handleBuyNow}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded mr-3"
        >
          Buy Now (Cash on Delivery)
        </button>

        <button
          onClick={clearCart}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
