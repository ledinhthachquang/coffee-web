import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Gallery/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;