import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='justify-center'>
      <div className="text-lg font-bold">E-Cell Website</div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/grid" className="hover:text-blue-400">Grid</Link>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </nav>
  );
};

export default Navbar;
