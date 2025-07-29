import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-10 bg-white/10 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email"
        className="border px-3 py-2 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        className="border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Login
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default Login;
