import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent!");
    } catch (err) {
      setError("❌ Failed to send reset email. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-emerald-400 to-teal-500 text-white px-4">
      <form
        onSubmit={handleReset}
        className="w-full max-w-sm bg-gradient-to-br from-pink-400 via-pink-500 to-rose-800/60 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white drop-shadow">
          Forgot Password
        </h2>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition font-semibold shadow-lg"
        >
          Send Reset Email
        </button>

        {message && (
          <p className="text-green-200 text-center text-sm">{message}</p>
        )}
        {error && <p className="text-red-200 text-center text-sm">{error}</p>}

        <div className="text-center pt-2">
          <Link to="/login" className="text-lg text-pink-100 hover:underline">
            🔙 Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
