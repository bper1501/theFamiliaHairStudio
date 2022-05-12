import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Bookinfo from './components/Bookinfo';
import Team from './components/Team'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Slide/>
      <Bookinfo />
      <Team/>
      <Footer/>
    </>
    
  );
}

export default App;
