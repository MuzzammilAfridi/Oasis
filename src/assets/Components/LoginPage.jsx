import { FaGoogle, FaApple } from 'react-icons/fa';
import Navbar from './Navbar';

function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <a href="#" className="text-sm text-blue-500 hover:underline mt-2 block">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <div className="my-6 text-center">
          <p className="text-sm text-gray-500">Or continue with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 py-2 px-4 rounded-lg hover:bg-gray-200">
              <FaApple />
              <span>Apple</span>
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

    </>
  );
}

export default LoginPage;
