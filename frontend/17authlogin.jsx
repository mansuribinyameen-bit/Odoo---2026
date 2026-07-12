import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { loginSuccess } from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login
    const dummyUser = {
      id: 1,
      name: "Admin User",
      email: formData.email,
      role: "Admin",
      department: "IT",
    };

    dispatch(
      loginSuccess({
        user: dummyUser,
        token: "dummy-jwt-token",
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <div className="flex flex-col items-center mb-8">
          <FaUserCircle
            className="text-cyan-600 mb-3"
            size={70}
          />

          <h1 className="text-3xl font-bold">
            AssetFlow ERP
          </h1>

          <p className="text-gray-500 mt-2">
            Enterprise Asset Management
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-6">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="/forgot-password"
              className="text-cyan-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        <div className="mt-8 border-t pt-5">

          <h3 className="font-semibold mb-3">
            Demo Accounts
          </h3>

          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Admin:</strong> admin@assetflow.com</p>
            <p><strong>Manager:</strong> manager@assetflow.com</p>
            <p><strong>Employee:</strong> employee@assetflow.com</p>
            <p>Password: <strong>123456</strong></p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;