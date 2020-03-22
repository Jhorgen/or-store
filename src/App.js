import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OrbNavbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import CategorySelect from './components/CategorySelect'
import ItemView from './components/ItemView'
import ShopByBrand from './components/ShopByBrand'
import BrandSelect from './components/BrandSelect'
import Check from './components/Check'
import SearchResults from './components/SearchResults'
import { StickyContainer, Sticky } from 'react-sticky';
import About from './components/About'
import Contact from './components/Contact'


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
          <OrbNavbar />
          <Switch>
            <Route exact path="/" component={CategorySelect}/>
            <Route render={props => ( <Shop name={bars} key='1'/>)} path="/bars"/>
            <Route render={props => ( <Shop name={frames} key='2'/>)} path="/frames"/>
            <Route render={props => ( <Shop name={stems} key='3'/>)} path="/stems"/>
            <Route render={props => ( <Shop name={tires} key='4'/>)} path="/tires"/>
            <Route render={props => ( <Shop name={rims} key='5'/>)} path="/rims"/>
            <Route render={props => ( <Shop name={hubs} key='6'/>)} path="/hubs"/>
            <Route render={props => ( <Shop name={cranks} key='7'/>)} path="/cranks"/>
            <Route render={props => ( <Shop name={forks} key='8'/>)} path="/forks"/>
            <Route render={props => ( <Shop name={seats} key='9'/>)} path="/seats"/>
            <Route render={props => ( <Shop name={pedals} key='10'/>)} path="/pedals"/>
            <Route render={props => ( <Shop name={sprockets} key='11'/>)} path="/sprockets"/>
            <Route render={props => ( <Shop name={chains} key='12'/>)} path="/chains"/>
            <Route render={props => ( <Shop name={pegs} key='13'/>)} path="/pegs"/>
            <Route render={props => ( <Shop name={titanium} key='14'/>)} path="/titanium"/>
            <Route render={props => ( <Shop name={gloves} key='15'/>)} path="/gloves"/>
            <Route render={props => ( <Shop name={headsets} key='16'/>)} path="/headsets"/>
            <Route render={props => ( <Shop name={grips} key='17'/>)} path="/grips"/>
            <Route render={props => ( <Shop name={brakes} key='18'/>)} path="/brakes"/>
            <Route render={props => ( <Shop name={wheels} key='19'/>)} path="/wheels"/>


            <Route path="/brands" component={BrandSelect}/>
            <Route render={props => ( <ShopByBrand brand={colony} key='20'/>)} path="/colony-all"/>
            <Route render={props => ( <ShopByBrand brand={snafu} key='21'/>)} path="/snafu-all"/>
            <Route render={props => ( <ShopByBrand brand={fit} key='22'/>)} path="/fit-all"/>
            <Route render={props => ( <ShopByBrand brand={tlc} key='23'/>)} path="/tlc-all"/>
            <Route render={props => ( <ShopByBrand brand={primo} key='24'/>)} path="/primo-all"/>
            <Route render={props => ( <ShopByBrand brand={pyc} key='25'/>)} path="/pyc-all"/>
            <Route render={props => ( <ShopByBrand brand={volume} key='26'/>)} path="/volume-all"/>
            <Route render={props => ( <ShopByBrand brand={blackOps} key='27'/>)} path="/blackops-all"/>
            <Route render={props => ( <ShopByBrand brand={tallOrder} key='28'/>)} path="/tallorder-all"/>
            <Route render={props => ( <ShopByBrand brand={kmc} key='29'/>)} path="/kmc-all"/>
            <Route render={props => ( <ShopByBrand brand={odyssey} key='30'/>)} path="/odyssey-all"/>

            <Route render={props => ( <ShopByBrand brand={shadowConspiracy} key='31'/>)} path="/shadowconspiracy-all"/>
            <Route render={props => ( <ShopByBrand brand={sandm} key='32'/>)} path="/s&m-all"/>
            <Route render={props => ( <ShopByBrand brand={total} key='33'/>)} path="/total-all"/>
            <Route render={props => ( <ShopByBrand brand={division} key='34'/>)} path="/division-all"/>
            <Route render={props => ( <ShopByBrand brand={demolition} key='35'/>)} path="/demolition-all"/>
            <Route render={props => ( <ShopByBrand brand={fist} key='36'/>)} path="/fist-all"/>
            <Route render={props => ( <ShopByBrand brand={sunday} key='37'/>)} path="/sunday-all"/>
            <Route render={props => ( <ShopByBrand brand={odi} key='38'/>)} path="/odi-all"/>

            <Route render={props => ( <ShopByBrand brand={bsd} key='39'/>)} path="/bsd-all"/>
            <Route render={props => ( <ShopByBrand brand={fsa} key='40'/>)} path="/fsa-all"/>
            <Route render={props => ( <ShopByBrand brand={gsport} key='41'/>)} path="/gsport-all"/>
            <Route render={props => ( <ShopByBrand brand={kore} key='42'/>)} path="/kore-all"/>
            <Route render={props => ( <ShopByBrand brand={federal} key='43'/>)} path="/federal-all"/>
            <Route render={props => ( <ShopByBrand brand={stranger} key='44'/>)} path="/stranger-all"/>
            <Route render={props => ( <ShopByBrand brand={academy} key='45'/>)} path="/academy-all"/>
            <Route render={props => ( <ShopByBrand brand={maxxis} key='46'/>)} path="/maxxis-all"/>
            <Route render={props => ( <ShopByBrand brand={kool} key='47'/>)} path="/kool-all"/>

            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/search" component={SearchResults} />
            <Route path="/:brand/:title/" component={ItemView} />
            <Route path="/cart" component={Cart}/>
            <Route path={'/' + `${process.env.REACT_APP_GO}`} component={Check}/>

          </Switch>
        </div>
      </BrowserRouter>
    </StickyContainer>
  );
}

export default App;
