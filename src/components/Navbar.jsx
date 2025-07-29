import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import logo from "../assets/tshop.png"; // Your image
import { useAuth } from "../Context/AuthContext";

function Navbar({ onSearch }) {
  const { user } = useAuth();

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-red-100/90 backdrop-blur-md shadow-md rounded-b-xl text-green-800 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
      >
        <img src={logo} alt="TShop Logo" className="h-10 w-auto rounded-2xl" />
      </Link>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 min-w-[200px] max-w-md px-4 py-2 rounded-md bg-white/60 text-green-800 placeholder-green-500 focus:outline-none"
      />

      {/* Nav Links */}
      <div className="flex items-center gap-4 flex-wrap font-semibold text-green-700">
        <Link
          to="/cart"
          className="hover:underline hover:text-green-900 transition duration-200"
        >
          Cart
        </Link>

        {user ? (
          <Logout />
        ) : (
          <>
            <Link
              to="/login"
              className="hover:underline hover:text-green-900 transition duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:underline hover:text-green-900 transition duration-200"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
