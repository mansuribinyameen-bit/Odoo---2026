import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const departments = [
    "IT",
    "Human Resources",
    "Finance",
    "Administration",
    "Transport",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Dummy signup
    const newEmployee = {
      id: Date.now(),
      name: formData.fullName,
      email: formData.email,
      department: formData.department,
      role: "Employee",
      status: "Active",
    };

    console.log("New Employee:", newEmployee);

    alert("Employee account created successfully!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8">

        <div className="text-center mb-8">

          <FaUserPlus
            size={60}
            className="mx-auto text-cyan-600 mb-4"
          />

          <h1 className="text-3xl font-bold">
            Create Employee Account
          </h1>

          <p className="text-gray-500 mt-2">
            Register to access AssetFlow ERP
          </p>

        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-4">

            <label className="font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

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
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div className="mb-4">

            <label className="font-medium">
              Department
            </label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option value="">Select Department</option>

              {departments.map((department) => (
                <option
                  key={department}
                  value={department}
                >
                  {department}
                </option>
              ))}

            </select>

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
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <div className="mb-6">

            <label className="font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-cyan-600 hover:underline"
          >
            Already have an account? Login
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Signup;