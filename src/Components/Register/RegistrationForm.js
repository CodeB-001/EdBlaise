import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const RegistrationForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <form className="w-full max-w-md p-8 mt-20 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h1>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
            placeholder="name@example.com"
            required
          />
        </div>

        {/* Username Field */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Choose a username"
            required
          />
        </div>

        {/* Repeat Password Field */}
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter a strong password"
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="repeat-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Repeat your password"
            required
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="flex items-start mb-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 mt-1 border border-gray-300 rounded bg-gray-50 focus:ring-pink-500"
            required
          />
          <label
            htmlFor="terms"
            className="ml-2 text-sm text-gray-600"
          >
            I agree to the{" "}
            <a
              href="/terms"
              className="text-pink-600 hover:underline"
            >
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Submit and Login Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-pink-600 rounded-md hover:bg-pink-700 focus:ring-4 focus:ring-pink-300"
          >
            Register
          </button>
          <Link
            to="/login"
            className="px-6 py-2 text-pink-600 border border-pink-500 rounded-md hover:bg-pink-100"
          >
            Login
          </Link>
        </div>
      </form>

      <Footer/>
    </div>
  );
};

export default RegistrationForm;
