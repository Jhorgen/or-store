import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row, Col, Spinner } from 'reactstrap'



class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: '',
      itemDisplay: 'none'
    }
  }


    componentDidMount() {
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
      this.setState({spinner: 'none', itemDisplay: ''})
    }

  render() {
    return (
      <div className='text-center'>
        <br/>
          <div style={{display: this.state.spinner}} className='text-center mt-2 mb-5'>
            <Spinner color="info" />
          </div>
        <Row style={{display: this.state.itemDisplay}} className="justify-content-around m-3">

          <Row className='m-3 cat-row'>

            <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Bars</h4>
            <Link
              to="/bars"
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Frames</h4>
            <Link
              to="/frames"
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/testframe.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Stems</h4>
            <Link
              to='/stems'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/stems.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Tires</h4>
            <Link
              to='/tires'
              >
              <img style={{height: '12rem', margin: '1rem', width: '60%'}} src={ require(`./../images/tires.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row'>
          <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Rims</h4>
            <Link to='/rims'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/rims.webp`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Hubs</h4>
            <Link
              to='/hubs'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/hubs.jpg`)} alt="hubs" title="hubs"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Cranks</h4>
            <Link
              to='/cranks'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/cranks.jpg`)} alt="Cranks" title="Cranks"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Forks</h4>
            <Link
              to='/forks'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/forks.jpg`)} alt="Forks" title="Forks"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row'>
          <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Seats</h4>
            <Link
              to='/seats'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/seats.jpeg`)} alt="Seats" title="Seats"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Pedals</h4>
            <Link
              to='/pedals'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/pedals.jpg`)} alt="Pedals" title="Pedals"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Sprockets</h4>
            <Link
              to='/sprockets'
              >
              <img className='cat-img' style={{height: '13rem', margin: '1rem', width: '60%'}} src={ require(`./../images/sprockets.jpg`)} alt="Sprockets" title="Sprockets"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Chains</h4>
            <Link
              to='/chains'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/chains.jpg`)} alt="Chains" title="Chains"/>
            </Link>
          </div>
        </Col>
        </Row>

        <Row className='m-3 cat-row'>
          <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Pegs</h4>
            <Link
              to='/pegs'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/pegs.jpg`)} alt="Pegs" title="Pegs"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Titanium hardware</h4>
            <Link
              to='/titanium'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/titanium.jpg`)} alt="Titanium hardware" title="Titanium hardware"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Gloves</h4>
            <Link
              to='/gloves'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/gloves.jpg`)} alt="Gloves" title="Gloves"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Headsets</h4>
            <Link
              to='/Headsets'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/headsets.jpg`)} alt="Headsets" title="Headsets"/>
            </Link>
          </div>
        </Col>

        <Col>
          <div className='test-hover' style={{border: '1px solid beige'}}>
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to='/grips'
              >
              <img style={{height: '13rem', margin: '1rem', width: '70%'}} src={ require(`./../images/grips.jpg`)} alt="Grips" title="Grips"/>
            </Link>
          </div>
        </Col>
        </Row>

        </Row>
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
