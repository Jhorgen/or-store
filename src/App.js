import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import CategorySelect from './components/CategorySelect'
import ItemView from './components/ItemView'
import ShopByBrand from './components/ShopByBrand'
import BrandSelect from './components/BrandSelect'
import Admin from './components/Admin'


function App() {

  //Categories
  const bars = 'Bars'
  const frames = 'Frames'
  const stems = 'Stems'
  const tires = 'Tires'
  const rims = 'Rims'
  const hubs = 'Hubs'
  const cranks = 'Cranks'
  const forks = 'Forks'
  const seats = 'Seats'
  const pedals = "Pedals"
  const sprockets = 'Sprockets'
  const chains = 'Chains'
  const pegs = 'Pegs'
  const titanium = 'Titanium Hardware'
  const gloves = 'Gloves'
  const headsets = 'Headsets'
  const grips = "Grips"
  const brakes = "Brakes"

  //Brands
  const colony = "Colony"
  const snafu = "Snafu"
  const fit = "Fit"
  const tlc = "TLC"
  const primo = "Primo"

  const wheels = "Wheels"



  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CategorySelect}/>
            <Route render={props => ( <Shop name={bars}/>)} path="/bars"/>
            <Route render={props => ( <Shop name={frames}/>)} path="/frames"/>
            <Route render={props => ( <Shop name={stems}/>)} path="/stems"/>
            <Route render={props => ( <Shop name={tires}/>)} path="/tires"/>
            <Route render={props => ( <Shop name={rims}/>)} path="/rims"/>
            <Route render={props => ( <Shop name={hubs}/>)} path="/hubs"/>
            <Route render={props => ( <Shop name={cranks}/>)} path="/cranks"/>
            <Route render={props => ( <Shop name={forks}/>)} path="/forks"/>
            <Route render={props => ( <Shop name={seats}/>)} path="/seats"/>
            <Route render={props => ( <Shop name={pedals}/>)} path="/pedals"/>
            <Route render={props => ( <Shop name={sprockets}/>)} path="/sprockets"/>
            <Route render={props => ( <Shop name={chains}/>)} path="/chains"/>
            <Route render={props => ( <Shop name={pegs}/>)} path="/pegs"/>
            <Route render={props => ( <Shop name={titanium}/>)} path="/titanium"/>
            <Route render={props => ( <Shop name={gloves}/>)} path="/gloves"/>
            <Route render={props => ( <Shop name={headsets}/>)} path="/headsets"/>
            <Route render={props => ( <Shop name={grips}/>)} path="/grips"/>
            <Route render={props => ( <Shop name={brakes}/>)} path="/brakes"/>


            <Route path="/brands" component={BrandSelect}/>
            <Route render={props => ( <ShopByBrand brand={colony}/>)} path="/colony"/>
            <Route render={props => ( <ShopByBrand brand={snafu}/>)} path="/snafu"/>
            <Route render={props => ( <ShopByBrand brand={fit}/>)} path="/fit"/>
            <Route render={props => ( <ShopByBrand brand={tlc}/>)} path="/tlc"/>
            <Route render={props => ( <ShopByBrand brand={primo}/>)} path="/primo"/>




            <Route path="/item/:title/" component={ItemView}/>

            <Route path="/cart" component={Cart}/>

            <Route path={'/' + `${process.env.REACT_APP_R_API_KEY}`} component={Admin}/>


          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
