import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row, Col, Spinner } from 'reactstrap'
import Footer from './Footer'


class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: '',
      itemDisplay: 'none',
      frameDisplay: 'none',
      footerDisplay: ''
    }
  }


  componentDidMount = () => {
    if(this.props.form.addedItems.length > 0) {
      let saveTotal = this.props.form.total;
      let check = this.props.form.addedItems;
      this.props.loadItemDataCheck(check, saveTotal);
    } else {
      this.props.loadItemData();
    }
    setTimeout( () => {
      this.handleLoad()
    }, 500);
  }

  handleLoad = () => {
    this.setState({spinner: 'none', itemDisplay: '', footerDisplay: <Footer/>})
  }

  render() {
    return (
      <div className='text-center footer-control'>
        <br/>
        <div style={{display: this.state.spinner}} className='text-center mt-2 mb-5'>
          <Spinner color="info" />
        </div>
        <div className='d-flex justify-content-center' style={{position: 'relative', marginTop: '-19px'}}>
            <h5 className='banner-text-position-2 add-font' style={{background: '#0000009e', padding: '10px', borderRadius: '5px', color: '#ffffff91', textShadow: '.5px .5px .5px white', display: this.state.itemDisplay}}>The Outer Rim Bicycles</h5>
          <h5 className='banner-text-position add-font' style={{background: '#0000009e', padding: '10px', borderRadius: '5px', color: '#ffffff91', textShadow: '.5px .5px .5px white', display: this.state.itemDisplay}}>Shipped from the USA</h5>
          <img style={{width: '80%', height: '20rem', display: this.state.itemDisplay}} src={ require(`./../images/flag-banner.jpg`)} alt="Banner" title="Shipped from the USA."/>
        </div>
        <div className='container'>
          <Row style={{display: this.state.itemDisplay}} className="justify-content-center m-3">

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Bars</h4>
                <Link
                  to="/bars"
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-bio-mech-bars-black.jpg`)} alt="Bars" title="Bars"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Stems</h4>
                <Link
                  to='/stems'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-squareback-rainbow.jpg`)} alt="Bars" title="Bars"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Frames</h4>
                <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/testframe.jpg`)} alt="Bars" title="Bars"/>
              </div>
            </div>


            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Tires</h4>
                <img style={{height: '12rem', width: '100%', opacity: '.75'}} src={ require(`./../images/tires.jpg`)} alt="Bars" title="Bars"/>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Rims</h4>
                <Link to='/rims'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/division-city-wide-rim-black.jpg`)} alt="Bars" title="Bars"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Hubs</h4>
                <Link
                  to='/hubs'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/bsd-swerve-cassette-hub-black.jpg`)} alt="hubs" title="hubs"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Cranks</h4>
                <Link
                  to='/cranks'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/fit-indent-crank-black.jpg`)} alt="Cranks" title="Cranks"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Forks</h4>
                <Link
                  to='/forks'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-sweet-tooth-fork-black.jpg`)} alt="Forks" title="Forks"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Seats</h4>
                <Link
                  to='/seats'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/fit-stitch-pivotal-seat-blackdenim.jpg`)} alt="Seats" title="Seats"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Pedals</h4>
                <Link
                  to='/pedals'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/fit-mack-alloy-pedal-oilslick.jpg`)} alt="Pedals" title="Pedals"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Sprockets</h4>
                <Link
                  to='/sprockets'
                  >
                  <img className='cat-img' style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-blaster-sprocket-black.jpg`)} alt="Sprockets" title="Sprockets"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Chains</h4>
                <Link
                  to='/chains'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/kmc-z410-chain-gold.jpg`)} alt="kmc-z410-chain-gold" title="Chains"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Pegs</h4>
                <Link
                  to='/pegs'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-anyway-peg-black3.jpg`)} alt="Pegs" title="Pegs"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Titanium hardware</h4>
                <Link
                  to='/titanium'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/titanium.jpg`)} alt="Titanium hardware" title="Titanium hardware"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Gloves</h4>
                <Link
                  to='/gloves'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/fist-miami-glove.jpg`)} alt="Gloves" title="Gloves"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Headsets</h4>
                <Link
                  to='/Headsets'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/primo-integrated-headset-turquoise.jpg`)} alt="Headsets" title="Headsets"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Grips</h4>
                <Link
                  to='/grips'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/odi-longneck-soft-grip-black.jpg`)} alt="Grips" title="Grips"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Brakes</h4>
                <Link
                  to='/brakes'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-brethren-brake-set-black.jpg`)} alt="Grips" title="Grips"/>
                </Link>
              </div>
            </div>

            <div className='card m-3' style={{border: 'none'}}>
              <div className='test-hover'>
                <h4 className="text-center cat-test category-select add-font" style={{textShadow: "1px 1px 1px #495057", fontSize: "35px", color: 'black'}}>Complete Wheels</h4>
                <Link
                  to='/wheels'
                  >
                  <img style={{height: '13rem', width: '100%', opacity: '.75'}} src={ require(`./../images/colony-pintour-freecoaster-wheel-black.jpg`)} alt="Grips" title="Grips"/>
                </Link>
              </div>
            </div>

          </Row>
        </div>
        {this.state.footerDisplay}
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    loadItemData: () => {(dispatch(loadItemData()))},
    loadItemDataCheck: (check, saveTotal) => {(dispatch(loadItemDataCheck(check, saveTotal)))}
  }
}

export default connect((state) => state, mapDispatchToProps)(CategorySelect);
