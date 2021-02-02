import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import ClientsUpdate from './ClientsUpdate'

class Client extends Component {


    render() {

        let client = this.props.client
        // console.log(client);

        return (
            <div id={client._id}>
                <ClientsUpdate clientId={client._id} />
                <div>
                <span>----------  {client.first}      </span>
                <span>----------  {client.last}        </span>
                <span>----------  {client.country}      </span>
                <span>----------  {client.email}      </span>
                <span>----------  {client.firstContact}      </span>
                <span>----------  {client.emailType === null ? '-' : client.emailType}      </span>
                <span>----------  {client.sold}      </span>
                <span>----------  {client.owner}      </span>
                </div>
                {/* <div>{id, first, last, email, firstContact, emailType, sold, owner, country} </div> */}
            
            </div>
        )
    }
}

// export default Client
// export default observer(Client)
export default inject('ClientsManagerStore')(observer(Client)) 

