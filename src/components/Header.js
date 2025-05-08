import React from 'react';

const Header = ({ onChangeSection }) => {
  return (
    <header className="bg-indigo-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer hover:text-emerald-300 transition-colors"
          onClick={() => onChangeSection('home')}
        >
          Risk Zero
        </div>
        <nav className="hidden md:flex space-x-6">
          {['home', 'articles', 'tips', 'contact'].map((item) => (
            <button
              key={item}
              className="capitalize hover:text-emerald-300 transition-colors font-medium"
              onClick={() => onChangeSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;