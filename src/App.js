import React, { useState, useEffect } from 'react';
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


const App = () => {
  return (
    
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App