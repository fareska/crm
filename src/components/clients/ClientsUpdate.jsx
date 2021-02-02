import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'

import Modal from 'react-modal';

Modal.setAppElement('#root')
class ClientsUpdate extends Component {
    constructor(){
        super()
        this.state = {
            isOpen :false
        }

    }
    handleClientInput = (e) => this.props.InputStore.handleClientInput(e.target.name, e.target.value)

    updateClient = () =>{
        let mStore = this.props.ClientsManagerStore
        mStore.updateClientVal('first', this.props.InputStore.first ,this.props.clientId)
        mStore.updateClientVal('last', this.props.InputStore.last ,this.props.clientId)
        mStore.updateClientVal( 'country_id', this.props.InputStore.country_id ,this.props.clientId)

        this.setState({ isOpen : true })
    } 

    isOpen = () => this.setState ({isOpen: !this.state.isOpen})

    render() {
        return (
            <div id='modal'>
                <button onClick={this.isOpen} >Open modal</button>
                <Modal isOpen={this.state.isOpen}>
                            {/* {console.log(this.props.ClientsManagerStore.countries)} */}

                    <div>
                        <span>Name : </span>
                        <input name='first' type='text' value={this.props.InputStore.first} onChange={this.handleClientInput} />
                    </div>
                    <div>
                        <span>Surname : </span>
                        <input name='last' type='text' value={this.props.InputStore.last} onChange={this.handleClientInput} />
                    </div>
                    <div>
                        <span>Country :  </span>
                        <select name="country_id"  value={this.props.InputStore.country_id} onChange={this.handleClientInput}  >
                            {this.props.ClientsManagerStore.countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <button onClick={this.updateClient}>Update</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

// export default inject("InputStore", "ClientsManagerStore")(observer(ClientsUpdate)) 
export default inject("InputStore", "ClientsManagerStore")(observer(ClientsUpdate)) 
// export default inject("ClientsManagerStore")(observer(ClientsUpdate)) 