import React from 'react';
import { useRouteError } from "react-router-dom";

// Error Page Component
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Error Illustration"
          className="w-64 h-64 mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          It looks like the page you're looking for doesn't exist.
        </p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-slate-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
