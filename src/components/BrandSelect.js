import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row } from 'reactstrap'


class BrandSelect extends Component {

  componentDidMount() {
    if(this.props.addedItems.length > 0) {
      let saveTotal = Math.floor(this.props.total);
      let check = this.props.addedItems;
    this.props.loadItemDataCheck(check, saveTotal);
    console.log('length');
    console.log(this.props.addedItems);
  } else {
    this.props.loadItemData();
    console.log('no length');
  }

    console.log('check new action:', this.props.addedItems);

    setTimeout( () => {
      console.log(this.props.items);
    }, 300);
  }

  render() {
    return (
      <div>
        <br/>
        <Row className="justify-content-around m-3">
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to="/grips"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to="/pedals"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>
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
