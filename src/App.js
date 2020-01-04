import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import CategorySelect from './components/CategorySelect'
import ItemView from './components/ItemView'

function App() {

  const grips = "Grips";
  const pedals = "Pedals";

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={CategorySelect}/>
            <Route render={props => ( <Shop name={grips}/>)} path="/grips"/>
            <Route render={props => ( <Shop name={pedals}/>)} path="/pedals"/>
            <Route path="/item" component={ItemView}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
