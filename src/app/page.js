// src/app/page.js
import React from 'react';
import DefaultLayout from './layout';

const LandingPage = () => {
  return (
    <DefaultLayout>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-lg font-bold">College Marketplace</h1>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search items..."
            className="px-2 py-1 border border-gray-300 rounded"
          />
          <button className="text-white">Login</button>
          {/* My Account button */}
          <div className="relative group">
            <button className="bg-blue-500 text-white px-6 py-3 rounded">
              My Account
            </button>
            {/* My Account dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                My Items
              </a>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="p-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to College Marketplace</h1>
        <p className="text-lg mb-4">
          Find and sell items with ease. Explore a variety of items listed by college students.
        </p>
        {/* Central body content */}
        <div className="mt-8">
          {/* My Items section */}
          <h2 className="text-2xl font-semibold mb-4">My Items</h2>
          {/* Display user's items here */}
          <p>No items listed yet.</p>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default LandingPage;
