import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Cart from './components/Cart'
import CategorySelect from './components/CategorySelect'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                  <Route exact path="/" component={CategorySelect}/>
                  <Route render={props => ( <Home category={props.location.state.category}/>)} path="/shop"/>
                  <Route path="/cart" component={Cart}/>
                </Switch>
           </div>
     </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
