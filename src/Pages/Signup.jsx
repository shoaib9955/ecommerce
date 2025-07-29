import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Keep this to reset error state before signup
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-teal-500 to-cyan-600 text-white px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm bg-gradient-to-br from-pink-500 via-pink-700 to-rose-800/60 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Create a password"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-semibold shadow-lg"
        >
          Sign Up
        </button>

        {error && <p className="text-red-200 text-center text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
