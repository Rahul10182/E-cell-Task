import React, { useState } from 'react';

const FirstPage = () => {
  const [gridColors, setGridColors] = useState(Array(9).fill('bg-blue-500'));

  const handleSquareClick = (index) => {
    if (index === 8) {
      setGridColors(Array(9).fill('bg-blue-500'));
    } else {
      const updatedColors = [...gridColors];
      updatedColors[index] = 'bg-red-500';
      setGridColors(updatedColors);
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      {/* Header Section */}
      <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 h-48 shadow-lg flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Welcome to E-Cell</h1>
      </div>

      {/* Logo Section */}
      <div className="rounded-lg bg-white h-48 flex items-center justify-center shadow-lg border border-gray-300">
        <img
          src="https://s3-alpha-sig.figma.com/img/f451/3151/c543be76d658fa7cf401125e9cef6f94?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umhrmf3ve5VwHjU9x-4lqn9VoteG~xmqFFAJ1NFlSAPT2F1K~eCqdTncMldvRuSwe7MGXpMkWCK9BVDlwoLxeKQ8MOk22FzwjwYl~dXpuh2U35tx1RvrkuHzRks0J7qpvRw~3LguA3Xi4mQjmUtCMqf9V7DbbaYO38HIqgj4iJ1JJ6u05G6GZZI5IqORNTSqkpUoRjfh1YuRICXgk79qz0718w~phQ2SE3Bmh1NCvyTjFecnU6ajWd6Bjj-mQ0gqKBCsaTsYA-X9YzyKyRkyCY6r8bDTCU43ejpA3U6bhERIx1CEgfUCQwTsnlKkwvdY0R56TLm38CkTc38cvbgyqQ__"
          alt="E-Cell Logo"
          className="h-32 w-32 object-contain"
        />
      </div>

      {/* Interactive Grid */}
      <div className="rounded-lg bg-gray-100 shadow-inner p-6 grid grid-cols-3 gap-4">
        {gridColors.map((color, index) => (
          <div
            key={index}
            className={`h-20 w-20 ${color} cursor-pointer transform transition duration-200 hover:scale-110`}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>

      {/* Reset Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setGridColors(Array(9).fill('bg-blue-500'))}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Reset Grid
        </button>
      </div>
    </div>
  );
};

export default FirstPage;