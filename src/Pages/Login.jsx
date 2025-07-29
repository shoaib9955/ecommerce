import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("🎉 Login successful!");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 1500);
    } catch (err) {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-900/60 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white space-y-6"
      >
        <h2 className="text-3xl font-bold text-center drop-shadow-sm">Login</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-emerald-200 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-pink-500 hover:bg-emerald-600 transition font-semibold shadow-lg"
        >
          Login
        </button>

        {error && <p className="text-red-300 text-center text-sm">{error}</p>}
        {success && (
          <p className="text-green-200 text-center text-sm animate-pulse">
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
