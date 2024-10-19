// src/About.js
import React from 'react';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our company! We are committed to delivering top-notch services and products that meet the needs of our customers. Our team of experts is passionate about what we do and strives for excellence in every project.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We specialize in web development, mobile app development, and digital marketing. With years of experience, we have built a reputation for delivering high-quality solutions that drive results.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to help businesses grow and succeed in the digital world. Whether you're a small startup or a large enterprise, we're here to support you every step of the way.
        </p>
      </div>
    </div>
  );
};

