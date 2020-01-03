import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import cartReducer from './reducers/cartReducer.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from "redux-thunk"

const store = createStore(cartReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
