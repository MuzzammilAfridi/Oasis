import React, { useState } from "react";
import Navbar from "./Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle forgot password logic here
    console.log("Forgot password for:", email);
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Forgot Password
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Remember your password?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
