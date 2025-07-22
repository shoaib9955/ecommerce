import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Logout from "../Pages/Logout";

function Navbar({ onSearch }) {
  const { user } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-600 text-white">
      <Link
        to="/"
        className="text-2xl font-bold text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        TS
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 py-2 rounded text-white"
      />

      <div className="flex gap-4 items-center ">
        <Link className="hover:scale-110" to="/cart">
          Cart
        </Link>
        {user ? (
          <Logout />
        ) : (
          <>
            <Link className="hover:scale-110" to="/login">
              Login
            </Link>
            <Link className="hover:scale-110" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
