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
    <div>
      <Navbar />
      <div className="flex justify-center items-center max-h-screen pt-10"> {/* Added pt-16 to add space below the navbar */}
        <div className="bg-white p-6 max-w-md w-full h-full">
          <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
          <div className="max-w-screen flex justify-center flex-col items-center">
            <img className="h-[127px] w-[127px]" src=".\forgot.png" alt="img" />
            <p className="text-[18px] font-medium leading-[21.78px] text-center text-[#2e2f33] my-8">
              Enter your email and we'll send a link to reset your password
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-[64px] rounded-3xl px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-[64px] rounded-3xl bg-[#7c71df] font-semibold text-white py-2 hover:bg-blue-600 transition duration-300 my-5"
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
    </div>
  );
};

export default ForgotPassword;
