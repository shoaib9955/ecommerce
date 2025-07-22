import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Checkout";

// Components
import Navbar from "./components/Navbar";

// Context
import { useAuth } from "./Context/AuthContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth(); // ✅ get user from context

  return (
    <>
      {/* ✅ Navbar gets searchTerm handler and user */}
      <Navbar onSearch={setSearchTerm} user={user} />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
