import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Clients from './components/clients/Clients.jsx'
import Actions from './components/Actions.jsx'
import Analytics from './components/Analytics.jsx'

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