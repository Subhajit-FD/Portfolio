import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
};
  return(
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <Header isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle}/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
    </main>

    <Footer />
    </div>
  )
}

export default App;
