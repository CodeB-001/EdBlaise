import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 mt-32 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:ring-4 focus:ring-pink-300"
            >
              Login
            </button>
          </div>
        </form>
        {/* Links */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Link to="/register" className="hover:underline">
            Register
          </Link>
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>


      <Footer/>
    </div>
  );
}

export default Login;
