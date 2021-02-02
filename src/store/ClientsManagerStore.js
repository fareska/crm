import { observable, computed, action, makeObservable, runInAction } from 'mobx'
import Client from './ClientStore'
import Country from './CountriesStore'
const axios = require('axios')

export class ClientsManagerStore {
    constructor() {
        this.clients = []
        this.countries = []

        makeObservable(this, {
            clients: observable,
            countries: observable,
            fetchClientsData: action,
            updateClientVal: action
        })
    }

    fetchClientsData = async () => {
        const result = await axios.get('http://localhost:3200/clients')
        // for(let i =0; i<result.data.length; i++){
        //     let client =  new Client(result.data[i].id, result.data[i].first, result.data[i].last, result.data[i].email, result.data[i].date, result.data[i].email_type_id, result.data[i].sold, result.data[i].owner, result.data[i].country)
        //     this.clients.push(client)
        // }
        runInAction(()=>{
            result.data.forEach(d=>{
                let client = new Client(d.id, d.first, d.last, d.email, d.date, d.email_type_id, d.sold, d.owner, d.country)
                this.clients.push(client)
            })
        })

        const resultTwo = await axios.get('http://localhost:3200/countries')
        console.log(resultTwo);
        for(let i =0; i<resultTwo.data.length; i++){
           let country =  new Country(resultTwo.data[i].country)
           this.countries.push(country)
        }
    }

    updateClientVal = async ( key, val, id) => {
        let data ={ key, val, id }
        const result = await axios.put('http://localhost:3200/clients', data)
        console.log('updateRes', result);
    }


}


export default ClientsManagerStore