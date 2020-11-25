import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Home />
      <Navbar/>
    </Router>
  )
}

export default App