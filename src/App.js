import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Team from './components/Team'
import Footer from './components/Footer';
import Bookinfo from './components/Bookinfo';

function App() {
  return (
    <>
      <Navbar />
      <Bookinfo />
      <Team/>
      <Footer/>
    </>
    
  );
}

export default App;
