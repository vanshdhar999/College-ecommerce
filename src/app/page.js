// src/app/page.js
import React from 'react';
import DefaultLayout from './layout';

const LandingPage = () => {
  return (
    <DefaultLayout>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          {/* Increase size of the logo */}
          <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
          {/* Increase font size and add shadow to the website name */}
          <h1 className="text-2xl font-bold text-shadow-md">CollegeBay</h1>
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
        {/* Centered and styled heading */}
        <h1 className="text-4xl font-bold text-center bg-yellow-400 text-gray-800 p-4 rounded-md shadow-md mb-8">
          Welcome to CollegeBay
        </h1>
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
      <footer className="p-4 bg-gray-800 text-white text-center">
        {/* FAQ section in the footer */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">FAQ</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">
              <span className="font-bold text-yellow-300">Q:</span> How do I list an item for sale?
            </li>
            <p className="text-gray-400 ml-6">A: To list an item, log in to your account and go to "My Account" to add a new item.</p>

            <li className="mb-2 mt-4">
              <span className="font-bold text-yellow-300">Q:</span> Is there a fee for using College Marketplace?
            </li>
            <p className="text-gray-400 ml-6">A: No, using College Marketplace for buying and selling is completely free.</p>
          </ul>
        </div>

        {/* Additional content in the footer */}
      </footer>
    </DefaultLayout>
  );
};

export default LandingPage;
