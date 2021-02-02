import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import Client from './Client'
import ClientsHeaders from './ClientsHeaders'
import ClientsInput from './ClientsInput'

class Clients extends Component {


    fetchClientsData = () =>  this.props.ClientsManagerStore.fetchClientsData()
    
    componentDidMount =  () => {
        this.fetchClientsData()
    }

    render() {
        let clients = this.props.ClientsManagerStore.clients

        return (
            <div id='clients'>
                
                <ClientsInput  />
                <ClientsHeaders  />
                {clients.map((c, i) => <Client key={i} client={c} /> )}
            </div>
        )
    }
}

export default inject('ClientsManagerStore')(observer(Clients)) 

