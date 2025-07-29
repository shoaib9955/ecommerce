import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import logo from "../assets/tshop.png";
import { useAuth } from "../Context/AuthContext";

function Navbar({ onSearch }) {
  const { user } = useAuth();

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-red-100/90 backdrop-blur-md shadow-md rounded-b-xl text-green-800 fixed top-0 left-0 w-full z-50">
      {/* Logo + Brand */}
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
        className="px-4 py-2 w-full max-w-md rounded-lg bg-white/10 text-red-400 placeholder-purple/20 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 shadow-sm hover:shadow-lg"
      />

      {/* Nav Links */}
      <div className="flex gap-4 items-center text-sm md:text-base">
        <Link
          to="/cart"
          className="hover:text-blue-400 hover:scale-105 transition-all duration-200 px-2 py-1 rounded-md hover:bg-white/10"
        >
          Cart
        </Link>

        {user ? (
          <Logout />
        ) : (
          <>
            <Link
              to="/login"
              className="hover:text-blue-400 hover:scale-105 transition-all duration-200 px-2 py-1 rounded-md hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-blue-400 hover:scale-105 transition-all duration-200 px-2 py-1 rounded-md hover:bg-white/10"
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
