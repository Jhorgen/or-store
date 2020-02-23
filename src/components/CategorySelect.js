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
        console.log('category:', this.props.form.addedItems[0].checkoutquantity);
      this.props.loadItemDataCheck(check, saveTotal);
      console.log('length');
      console.log(this.props.form.addedItems);
    } else {
      this.props.loadItemData();
      console.log('no length');
    }

      console.log('check new action:', this.props.form.addedItems);

      setTimeout( () => {
        this.handleLoad()
      }, 300);
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
        <Row style={{display: this.state.itemDisplay}} className="justify-content-around m-3">

          <Row className='m-3 cat-row justify-content-center'>

            <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Bars</h4>
            <Link
              to="/bars"
              >
              <img className='cat-img' style={{height: '13rem', width: '100%'}} src={ require(`./../images/colony-bio-mech-bars-black.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col xs='2' style={{padding: '0'}}>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Stems</h4>
            <Link
              to='/stems'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/colony-squareback-rainbow.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Frames</h4>
            <Link
              to="/frames"
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/testframe.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>


        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Tires</h4>
            <Link
              to='/tires'
              >
              <img style={{height: '12rem',  width: '100%'}} src={ require(`./../images/tires.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row justify-content-center'>
          <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Rims</h4>
            <Link to='/rims'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/division-city-wide-rim-black.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Hubs</h4>
            <Link
              to='/hubs'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/bsd-swerve-cassette-hub-black.jpg`)} alt="hubs" title="hubs"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Cranks</h4>
            <Link
              to='/cranks'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/fit-indent-crank-black.jpg`)} alt="Cranks" title="Cranks"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Forks</h4>
            <Link
              to='/forks'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/colony-sweet-tooth-fork-black.jpg`)} alt="Forks" title="Forks"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row justify-content-center'>
          <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Seats</h4>
            <Link
              to='/seats'
              >
              <img className='cat-img' style={{height: '13rem', width: '100%'}} src={ require(`./../images/fit-stitch-pivotal-seat-blackdenim.jpg`)} alt="Seats" title="Seats"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Pedals</h4>
            <Link
              to='/pedals'
              >
              <img className='cat-img' style={{height: '13rem', width: '100%'}} src={ require(`./../images/fit-mack-alloy-pedal-oilslick.jpg`)} alt="Pedals" title="Pedals"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Sprockets</h4>
            <Link
              to='/sprockets'
              >
              <img className='cat-img' style={{height: '13rem',  width: '100%'}} src={ require(`./../images/colony-blaster-sprocket-black.jpg`)} alt="Sprockets" title="Sprockets"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Chains</h4>
            <Link
              to='/chains'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/kmc-z410-chain-gold.jpg`)} alt="kmc-z410-chain-gold" title="Chains"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row justify-content-center'>
          <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Pegs</h4>
            <Link
              to='/pegs'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/colony-anyway-peg-black3.jpg`)} alt="Pegs" title="Pegs"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Titanium hardware</h4>
            <Link
              to='/titanium'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/titanium.jpg`)} alt="Titanium hardware" title="Titanium hardware"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Gloves</h4>
            <Link
              to='/gloves'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/fist-miami-glove.jpg`)} alt="Gloves" title="Gloves"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Headsets</h4>
            <Link
              to='/Headsets'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/primo-integrated-headset-turquoise.jpg`)} alt="Headsets" title="Headsets"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row justify-content-center'>
        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to='/grips'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/odi-longneck-soft-grip-black.jpg`)} alt="Grips" title="Grips"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Brakes</h4>
            <Link
              to='/grips'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/odi-longneck-soft-grip-black.jpg`)} alt="Grips" title="Grips"/>
            </Link>
          </div>
        </Col>

        <Col xs='2'>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Complete Wheels</h4>
            <Link
              to='/grips'
              >
              <img style={{height: '13rem',  width: '100%'}} src={ require(`./../images/odi-longneck-soft-grip-black.jpg`)} alt="Grips" title="Grips"/>
            </Link>
          </div>
        </Col>
      </Row>

        </Row>
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
