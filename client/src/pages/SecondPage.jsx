import React from 'react';

const SecondPage = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <img src="/path-to-your-photo.jpg" alt="Your Photo" className="h-48 w-48 rounded-full border-4 border-pink-500" />
      <h1 className="text-4xl mt-4 font-bold">Your Name</h1>
      <p className="mt-2 text-lg">Registration Number: 2023XXXXX</p>
      <button
        className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg"
        onClick={() => window.open('https://www.instagram.com/your-instagram-handle', '_blank')}
      >
        Visit Instagram
      </button>
    </div>
  );
};

export default SecondPage;
