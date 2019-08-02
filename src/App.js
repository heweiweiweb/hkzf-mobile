import React from 'react'
// import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* 配置路由规则 */}
        <Route path="/home" component={Home} />
        <Route path="/city" component={City} />
        <Route path="/map" component={Map} />
      </Router>
    )
  }
}

export default App
