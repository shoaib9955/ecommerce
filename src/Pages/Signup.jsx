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
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold">Signup</h2>
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
      <button type="submit" className="bg-green-600 text-white py-2 rounded">
        Sign Up
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default Signup;
