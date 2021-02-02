import { makeObservable, observable } from 'mobx'


export class  CountriesStore  {
    constructor(name) {
        this.name = name 

        makeObservable(this, {
            name: observable
        })
    }
}

export default CountriesStore