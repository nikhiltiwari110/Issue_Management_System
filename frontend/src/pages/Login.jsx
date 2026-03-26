import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      const token = response.data.token;
      const userData = {
        email: email,
        role: "ADMIN"
      };

      login(token, userData);
      navigate("/dashboard");

    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('../images/ims_1.png')" // 👉 Make sure image exists here
      }}
    >

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 💎 Login Card */}
      <div className="relative bg-white/90 backdrop-blur-md w-96 p-8 rounded-2xl shadow-xl transition duration-300 hover:scale-[1.02]">
{/* <div className="relative bg-white/20 backdrop-blur-lg w-96 p-8 rounded-2xl shadow-xl border border-gray-200 transition duration-300 hover:scale-[1.02]"> */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Issue Management System
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            required
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;