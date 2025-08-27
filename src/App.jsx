import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ Added Navigate
import SplashScreen from "./components/SplashScreen";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import { useAuth } from "./Context/AuthContext";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Checkout";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // splash loading state
  const { user } = useAuth();

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar onSearch={setSearchTerm} user={user} />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/checkout/:id"
            element={user ? <Checkout /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
