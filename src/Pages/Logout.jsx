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
      className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
