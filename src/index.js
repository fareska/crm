import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import {ClientsManagerStore as clientsManagerStore} from './store/ClientsManagerStore'
import {InputStore as inputStore} from './store/InputStore'


let ClientsManagerStore = new clientsManagerStore()
let InputStore = new inputStore()


const stores = {
  ClientsManagerStore,
  InputStore
}

ReactDOM.render(
  <Provider {...stores} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
