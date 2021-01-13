import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'

class Client extends Component {


    render() {

        let client = this.props.client
        // console.log(client);

        return (
            <div id={client._id}>
                <div>{client.first}</div>
                <div>{client.last}  </div>
                <div>{client.country}</div>
                <div>{client.email}</div>
                <div>{client.firstContact}</div>
                <div>{client.emailType === null ? '-' : client.emailType}</div>
                <div>{client.sold}</div>
                <div>{client.owner}</div>
                {/* <div>{id, first, last, email, firstContact, emailType, sold, owner, country} </div> */}
            </div>
        )
    }
}

// export default Client
// export default observer(Client)
export default inject('ClientsManagerStore')(observer(Client)) 

