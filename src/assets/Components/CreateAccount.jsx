import React, { useState } from "react";
import Navbar from "./Navbar";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      // handle account creation logic here
      console.log("Account created:", { email, password });
    } else {
      alert("Please agree to the terms and conditions");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center max-h-screen">
        <div className="bg-white p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <div className="flex justify-center mb-6"> {/* Updated this div */}
            <img className="h-[127px] w-[127px]" src="./createAcc.png" alt="img" />
          </div>
          <p className="font-medium text-[18px] my-8 leading-[21.78px] text-center">Let's get your account set up</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
             
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-[64px] px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full h-[64px] px-3 py-2 border rounded-3xl mt-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={agree}
                onChange={() => setAgree(!agree)}
                required
              />
              <label htmlFor="terms" className="text-gray-700 my-5">
                I agree to the terms and conditions
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#7c71df] h-[56px] text-white py-2 rounded-3xl hover:bg-blue-600 transition duration-300"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
