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
import { StickyContainer, Sticky } from 'react-sticky';



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
  const wheels = "Wheels"

  //Brands
  const colony = "Colony"
  const snafu = "Snafu"
  const fit = "Fit"
  const tlc = "TLC"
  const primo = "Primo"
  const pyc = 'PYC'
  const volume = 'Volume'
  const blackOps = 'Black Ops'
  const tallOrder = 'Tall Order'
  const kmc = 'KMC'
  const odyssey = 'Odyssey'
  const shadowConspiracy = 'Shadow Conspiracy'
  const kool = 'Kool'
  const sandm = 'S&M'
  const total = 'Total'
  const division = 'Division'
  const demolition = 'Demolition'
  const fist = 'Fist'
  const sunday = 'Sunday'
  const odi = 'Odi'
  const bsd = 'BSD'
  const fsa = 'FSA'
  const gsport = 'GSport'
  const kore = 'Kore'
  const federal = 'Federal'
  const stranger = 'Stranger'
  const academy = 'Academy'
  const maxxis = 'Maxxis'

  return (
    <StickyContainer>
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
            <Route render={props => ( <Shop name={wheels}/>)} path="/wheels"/>


            <Route path="/brands" component={BrandSelect}/>
            <Route render={props => ( <ShopByBrand brand={colony} key='1'/>)} path="/colony-all"/>
            <Route render={props => ( <ShopByBrand brand={snafu} key='2'/>)} path="/snafu-all"/>
            <Route render={props => ( <ShopByBrand brand={fit} key='3'/>)} path="/fit-all"/>
            <Route render={props => ( <ShopByBrand brand={tlc} key='4'/>)} path="/tlc-all"/>
            <Route render={props => ( <ShopByBrand brand={primo} key='5'/>)} path="/primo-all"/>
            <Route render={props => ( <ShopByBrand brand={pyc} key='6'/>)} path="/pyc-all"/>
            <Route render={props => ( <ShopByBrand brand={volume} key='7'/>)} path="/volume-all"/>
            <Route render={props => ( <ShopByBrand brand={blackOps} key='8'/>)} path="/blackops-all"/>
            <Route render={props => ( <ShopByBrand brand={tallOrder} key='9'/>)} path="/tallorder-all"/>
            <Route render={props => ( <ShopByBrand brand={kmc} key='10'/>)} path="/kmc-all"/>
            <Route render={props => ( <ShopByBrand brand={odyssey} key='11'/>)} path="/odyssey-all"/>

            <Route render={props => ( <ShopByBrand brand={shadowConspiracy} key='12'/>)} path="/shadowconspiracy-all"/>
            <Route render={props => ( <ShopByBrand brand={sandm} key='13'/>)} path="/s&m-all"/>
            <Route render={props => ( <ShopByBrand brand={total} key='14'/>)} path="/total-all"/>
            <Route render={props => ( <ShopByBrand brand={division} key='15'/>)} path="/division-all"/>
            <Route render={props => ( <ShopByBrand brand={demolition} key='16'/>)} path="/demolition-all"/>
            <Route render={props => ( <ShopByBrand brand={fist} key='17'/>)} path="/fist-all"/>
            <Route render={props => ( <ShopByBrand brand={sunday} key='18'/>)} path="/sunday-all"/>
            <Route render={props => ( <ShopByBrand brand={odi} key='19'/>)} path="/odi-all"/>

            <Route render={props => ( <ShopByBrand brand={bsd} key='20'/>)} path="/bsd-all"/>
            <Route render={props => ( <ShopByBrand brand={fsa} key='21'/>)} path="/fsa-all"/>
            <Route render={props => ( <ShopByBrand brand={gsport} key='22'/>)} path="/gsport-all"/>
            <Route render={props => ( <ShopByBrand brand={kore} key='23'/>)} path="/kore-all"/>
            <Route render={props => ( <ShopByBrand brand={federal} key='24'/>)} path="/federal-all"/>
            <Route render={props => ( <ShopByBrand brand={stranger} key='25'/>)} path="/stranger-all"/>
            <Route render={props => ( <ShopByBrand brand={academy} key='26'/>)} path="/academy-all"/>
            <Route render={props => ( <ShopByBrand brand={maxxis} key='27'/>)} path="/maxxis-all"/>
            <Route render={props => ( <ShopByBrand brand={kool} key='28'/>)} path="/kool-all"/>


            <Route path="/:brand/:title/" component={ItemView}/>
            <Route path="/cart" component={Cart}/>
            <Route path={'/' + `${process.env.REACT_APP_R_API_KEY}`} component={Admin}/>

          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </StickyContainer>
  );
}

export default App;
