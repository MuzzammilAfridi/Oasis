import { FaGoogle, FaApple } from 'react-icons/fa';
import Navbar from './Navbar';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-md bg-white p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="flex flex-col justify-center items-center mb-6">
            <img className="h-[127px] w-[127px]" src="./Plant.png" alt="img" />
            <p className="text-center mt-2">Welcome back</p>
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[353px] h-[64px] px-4 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-[353px] h-[64px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline mt-2 block"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-[56px] bg-[#7c71df] text-white py-2 rounded-3xl hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <div className="my-6 text-center">
            <p className="text-sm text-gray-500 mb-5">Or continue with</p>
            <div className="flex gap-5 justify-center flex-wrap mt-2">
              <button className="flex items-center justify-center w-[353px] bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">
                <FaGoogle />
                <span className="ml-2">Google</span>
              </button>

              <button className="flex items-center justify-center w-[353px] bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200 mt-4">
                <FaApple />
                <span className="ml-2">Apple</span>
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              First time here?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
