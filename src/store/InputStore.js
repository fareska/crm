import { observable, action, makeAutoObservable } from 'mobx'

export class InputStore {
    constructor() {
        this.first = '';
        this.last = '';
        this.country_id = '';

        makeAutoObservable(this, {
            first: observable,
            last: observable,
            country_id: observable,
            handleClientInput: action
        })
    }

    handleClientInput = (name, value) => {
        this[name] = value
    }
}
