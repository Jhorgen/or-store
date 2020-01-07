import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
