import React from 'react'
import  {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Introduce from "./components/Introduce"

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Navbar/>
        <Introduce />
    </Router>
  )
}

export default App