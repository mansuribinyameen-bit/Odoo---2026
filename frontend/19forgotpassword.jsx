import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy reset request
    console.log("Password reset request:", email);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">

        <div className="text-center mb-8">

          <FaEnvelopeOpenText
            size={60}
            className="mx-auto text-cyan-600 mb-4"
          />

          <h1 className="text-3xl font-bold">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your email to receive a password reset link.
          </p>

        </div>

        {submitted ? (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-green-700">
            <p className="font-semibold">
              Password reset request submitted.
            </p>

            <p className="mt-2 text-sm">
              (Dummy Mode) In the real application, a reset email would be sent
              to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <label className="font-medium">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 mb-6 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Reset Link
            </button>

          </form>
        )}

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-cyan-600 hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;