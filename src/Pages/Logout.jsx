import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-md font-semibold text-sm sm:text-base
                 bg-gradient-to-r from-red-500 via-pink-600 to-red-700 
                 text-white shadow-md hover:shadow-lg hover:brightness-110 
                 transition-all duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
