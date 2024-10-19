// src/ErrorBoundary.js
import React, { Component } from 'react';

 class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render a custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 text-white p-6">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
          <p className="mb-6 text-gray-400">
            We're sorry, but an unexpected error has occurred. Please try refreshing the page or contact support if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition"
          >
            Refresh Page
          </button>
          <img
            src="https://source.unsplash.com/500x300/?error"
            alt="Error illustration"
            className="mt-8 rounded-lg shadow-md"
          />
        </div>
      );
    }

    // When there's no error, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;