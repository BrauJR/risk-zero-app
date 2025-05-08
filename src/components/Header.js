import React, { useState } from 'react';

const Header = ({ onChangeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    onChangeSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-indigo-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="text-2xl font-bold cursor-pointer hover:text-indigo-300 transition-colors"
          onClick={() => handleNavigation('home')}
        >
          CyberGuardian
        </div>
        
        {/* Menú para desktop */}
        <nav className="hidden md:flex space-x-6">
          {['home', 'articles', 'tips', 'contact'].map((item) => (
            <button
              key={item}
              className="capitalize hover:text-indigo-300 transition-colors font-medium"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Botón hamburguesa para mobile */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {['home', 'articles', 'tips', 'contact'].map((item) => (
              <button
                key={item}
                className="capitalize text-left py-2 hover:text-indigo-300 transition-colors font-medium"
                onClick={() => handleNavigation(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;