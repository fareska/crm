import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
    render() {

      return (
        <Router>
          <div className="App">

            <div id='linksBar'>
              <NavBar />
            </div>
            
          </div>
          <Route path='/clients' exact render={() => <Clients/>} />
          <Route path='/Actions' exact render={() => <Actions/>} />
          <Route path='/Analytics' exact render={() => <Analytics/>} />
        </Router>
      )
    }
  
}
export default App;