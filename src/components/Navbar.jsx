import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import { useAuth } from "../Context/AuthContext";

function Navbar({ onSearch }) {
  const { user } = useAuth();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20 text-red-500 sticky top-0 z-50">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold text-blue-300 hover:text-blue-500 hover:scale-110 transition-all duration-300"
      >
        TS
      </Link>

      {/* Search Bar */}
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
