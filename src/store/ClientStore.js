import { makeObservable, observable } from 'mobx'


export class  ClientStore  {
    constructor(id, first, last, email, firstContact, emailType, sold, owner, country) {
        this.id = id
        this.first = first
        this.last =last 
        this.email = email
        this.firstContact = firstContact 
        this.emailType = emailType||null 
        this.sold = sold||0 
        this.owner = owner||null
        this.country = country||null 

        makeObservable(this, {
            first: observable,
            last: observable,
            email: observable,
            firstContact: observable,
            emailType: observable,
            sold: observable,
            owner: observable,
            country: observable
        })
    }
}

export default ClientStore