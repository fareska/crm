import React, { Component } from 'react'

class ClientsHeaders extends Component {

    render() {

        let headers = ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']

        return (
            <div id='clientsHeaClientsHeaders'>
                {headers.map((h, i)=>{
                    return(
                        <div key={i} className='header' >{h}</div>
                    )
                })}
            </div>
        )
    }
}

export default ClientsHeaders 