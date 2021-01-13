import { observable, computed, action, makeObservable } from 'mobx'
import ClientStore from './ClientStore'
const axios = require('axios')

export class ClientsManagerStore {
    constructor() {
        this.clients = []

        makeObservable(this, {
            clients: observable,
            addClient: action,
            fetchClientsData: action
        })
    }


    addClient = (id, first, last, email, date, email_type_id, sold, owner, country) => {
        this.clients.push(new ClientStore(id, first, last, email, date, email_type_id, sold, owner, country))
    }

    fetchClientsData = async () => {
        const result = await axios.get('http://localhost:3200/clients')
        for(let i =0; i<result.data.length; i++){
           let client =  new ClientStore(result.data[i].id, result.data[i].first, result.data[i].last, result.data[i].email, result.data[i].date, result.data[i].email_type_id, result.data[i].sold, result.data[i].owner, result.data[i].country)
           this.clients.push(client)
        }
    }


}


export default ClientsManagerStore