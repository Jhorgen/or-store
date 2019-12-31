import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import CategorySelect from './components/CategorySelect'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="App">

            <Navbar/>
              <Switch>
                  <Route exact path="/" component={CategorySelect}/>
                  <Route path="/shop" component={Home}/>
                  <Route path="/cart" component={Cart}/>
                </Switch>
           </div>
     </BrowserRouter>
      <p>test</p>
    </div>
  );
}

export default App;
