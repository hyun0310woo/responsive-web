import React from 'react';
import "./App.css"
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Footer />
    </div>
  )
}

export default App