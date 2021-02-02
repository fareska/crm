import React, { Component } from 'react'

class ClientsHeaders extends Component {

    render() {

        let headers = ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']

        return (
            <div id='clientsHeaClientsHeaders'>
                {headers.map((h, i)=>{
                    return(

                        <span key={i} className='header'  >
                           <span>
                               {h}----------
                               </span> 
                            </span>
                    )
                })}
            </div>
        )
    }
}

export default ClientsHeaders 