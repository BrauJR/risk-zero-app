import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch(currentSection) {
      case 'articles': return <Articles />;
      case 'tips': return <Tips />;
      case 'contact': return <Contact />;
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onChangeSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;