import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6 pl-4">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            JankBenchX
          </span>
        </Link>
      </div>
      <div className="block lg:hidden px-4">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => toggleHidden(!hidden)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          hidden ? 'hidden' : 'block'
        } flex-grow lg:flex lg:items-center lg:w-auto px-2`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/about"
            className="block mt-3 lg:inline-block lg:mt-0 text-gray-200 mr-4 px-2 py-1 rounded hover:bg-gray-800"
          >
            About
          </Link>
        </div>
        <div className="px-2 py-2">
          <a
            href="https://github.com/joshuous/JankBenchX/releases"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};