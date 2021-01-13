import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    

    render() {
        return (
            <div id='navBar'>
                <Link to='clients'><div>Clients</div></Link>
                <Link to='actions'><div>Actions</div></Link>
                <Link to='analytics'> <div>Analytics</div></Link>
            </div>
        )
    }
}

export default NavBar 