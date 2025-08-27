import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import logo from "../assets/tshop.png";
import { useAuth } from "../Context/AuthContext";

function Navbar({ onSearch }) {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-2 sm:px-4 sm:py-3 bg-red-100/90 backdrop-blur-md shadow-md rounded-b-xl text-green-800 fixed top-0 left-0 w-full z-50 text-sm sm:text-base">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
      >
        <img
          src={logo}
          alt="TShop Logo"
          className="h-8 sm:h-10 w-auto rounded-xl"
        />
      </Link>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className="px-2 py-1 w-32 sm:w-48 md:w-64 lg:w-80 rounded-lg bg-white/10 text-red-400 placeholder-purple/20 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 shadow-sm hover:shadow-lg text-xs sm:text-sm"
      />

      {/* Hamburger Icon (Mobile) */}
      <button
        className="sm:hidden p-2 text-green-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Desktop Nav Links */}
      <div className="hidden sm:flex gap-3 items-center">
        <Link
          to="/cart"
          className="hover:text-blue-400 hover:scale-105 transition duration-200 px-2 py-1 rounded-md hover:bg-white/10"
        >
          Cart
        </Link>
        {user ? (
          <Logout />
        ) : (
          <>
            <Link
              to="/login"
              className="hover:text-blue-400 hover:scale-105 transition duration-200 px-2 py-1 rounded-md hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:text-blue-400 hover:scale-105 transition duration-200 px-2 py-1 rounded-md hover:bg-white/10"
            >
              Signup
            </Link>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden w-full mt-2 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-4 flex flex-col gap-3 text-center text-sm animate-fadeIn">
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-medium shadow-sm"
          >
            🛒 Cart
          </Link>

          {user ? (
            <Logout className="py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm" />
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 font-medium shadow-sm"
              >
                🔑 Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium shadow-sm"
              >
                📝 Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
