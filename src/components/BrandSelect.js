import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row, Col } from 'reactstrap'


class BrandSelect extends Component {

  componentDidMount() {
    if(this.props.form.addedItems.length > 0) {
      let saveTotal = Math.floor(this.props.form.total);
      let check = this.props.form.addedItems;
    this.props.loadItemDataCheck(check, saveTotal);
    console.log('length');
    console.log(this.props.form.addedItems);
  } else {
    this.props.loadItemData();
    console.log('no length');
  }

    console.log('check new action:', this.props.form.addedItems);

    setTimeout( () => {
      console.log(this.props.form.items);
    }, 300);
  }

  render() {
    return (
      <div className='text-center'>
        <br/>
        <Row className="justify-content-around m-3">

          <Row>
          <Col>
          <div className="test-hover">
            <Link
              to="/grips"
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/primo.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to="/pedals"
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/snafu.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/odyssey.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/fit.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/fist.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/bsd.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/odi.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/tlcbikes.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/maxxis.png`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
        </Col>

          <Col>
          <div className="test-hover">
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '10rem', width: '10rem', margin: '1rem'}} src={ require(`./../images/federal.jpeg`)} alt="Federal" title="Federal"/>
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

export default connect((state) => state, mapDispatchToProps)(BrandSelect);
