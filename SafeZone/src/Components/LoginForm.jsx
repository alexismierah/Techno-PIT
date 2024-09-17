import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={handleRegisterClick}
            className="mt-2 bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
