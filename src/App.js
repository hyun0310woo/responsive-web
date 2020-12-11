import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Router>
          <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
        </Switch>
      </Router>
    </div>
  )
}

export default App