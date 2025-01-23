import React from 'react';
import profile from "../assets/profile.png";

const SecondPage = () => {
  return (
    <div className="relative p-6 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Animated Guard Masks on the Sides */}
      <div className="absolute top-12 left-8 text-pink-500 text-5xl font-bold animate-bounce">
        🔺
      </div>
      <div className="absolute top-12 right-8 text-pink-500 text-5xl font-bold animate-bounce">
        ⭕
      </div>

      {/* Glowing Profile Image */}
      <div className="relative">
        <img
          src={profile}
          alt="Your Photo"
          className="h-48 w-48 rounded-full border-4 border-pink-500 shadow-[0_0_30px_#ff0080] animate-pulse"
        />
        <div className="absolute inset-0 rounded-full border-4 border-pink-500 animate-spin-slow"></div>
      </div>

      {/* Squid Game Korean-Styled Name */}
      <h1 className="text-4xl mt-4 font-bold tracking-wider text-pink-500 uppercase">
        
라훌 쿠마르 싱  (Rahul Kumar Singh)
      </h1>

      {/* Registration Number in a Squid Game Card Style */}
      <p className="mt-2 text-lg bg-gray-800 px-4 py-2 rounded-lg shadow-md border border-pink-500">
        Registration Number: 20233228
      </p>

      {/* Squid Game Styled "Join the Game" Button */}
      <button
        className="mt-6 px-6 py-3 bg-pink-500 hover:bg-red-700 text-black font-bold rounded-lg shadow-lg border border-black transform transition hover:scale-110 hover:shadow-[0_0_30px_#ff0000]"
        onClick={() => window.open('https://www.instagram.com/rahulksingh333/', '_blank')}
      >
        🎟 Join the Game
      </button>

      {/* Bottom Guard Symbols */}
      <div className="absolute bottom-12 left-8 text-pink-500 text-5xl font-bold animate-bounce">
        ◼️
      </div>
      <div className="absolute bottom-12 right-8 text-pink-500 text-5xl font-bold animate-bounce">
        ⭕
      </div>
    </div>
  );
};

export default SecondPage;
