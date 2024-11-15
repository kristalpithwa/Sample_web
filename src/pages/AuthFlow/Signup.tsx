import React from "react";
import { Link } from "react-router-dom";

const SignupPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Signup</h2>
      <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Signup
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
