import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import NewsPaper from './pages/NewsPaper'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <NavBar>
        <Route exact path="/" component={Home} />
        <Route path="/newspaper" component={NewsPaper} />
      </NavBar>
    </Router>
  )
}

export default App
