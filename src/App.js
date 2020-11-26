import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Introduce from "./components/Introduce"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="App">
      <Home />
      <Navbar/>
      <Introduce />
      <Skills />
    </div>
  )
}

export default App