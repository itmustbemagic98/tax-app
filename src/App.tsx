import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import NewsPaper from './pages/NewsPaper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavBar}>
          <NavBar>
            <Home />
          </NavBar>
        </Route>
        <Route path="/newspaper" component={NavBar}>
          <NavBar>
            <NewsPaper />
          </NavBar>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
