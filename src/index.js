import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import cartReducer from './reducers/cartReducer.js'
import { itemsReducer } from './reducers/itemsReducer.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import thunk from "redux-thunk"

const rootReducer = combineReducers(itemsReducer, cartReducer)

const store = createStore(cartReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
