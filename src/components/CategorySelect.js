import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row } from 'reactstrap'



class CategorySelect extends Component {

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
        console.log(this.props.form.items);
      }, 300);
    }


  componentWillReceiveProps(nextProps) {
    console.log('updated props: ', nextProps)
}

  render() {
    return (
      <div>
        <br/>
        <Row className="justify-content-around m-3">
          <div className="test-hover">
            <h4 className="text-center category-select">Bars</h4>
            <Link
              to="/grips"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Frames</h4>
            <Link
              to="/pedals"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/testframe.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Stems</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Stems" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/stems.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Tires</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Tires" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/tires.jpg`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Rims</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Rims" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/rims.webp`)} alt="Bars" title="Bars"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Hubs</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Hubs" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/hubs.jpg`)} alt="hubs" title="hubs"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Cranks</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Cranks" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/cranks.jpg`)} alt="Cranks" title="Cranks"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Forks</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Forks" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/forks.jpg`)} alt="Forks" title="Forks"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Seats</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Seats" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/seats.jpeg`)} alt="Seats" title="Seats"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Pedals</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/pedals.jpg`)} alt="Pedals" title="Pedals"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Sprockets</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Sprockets" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/sprockets.jpg`)} alt="Sprockets" title="Sprockets"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Chains</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Chains" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/chains.jpg`)} alt="Chains" title="Chains"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Pegs</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pegs" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/pegs.jpg`)} alt="Pegs" title="Pegs"/>
            </Link>
          </div>
          <div className="test-hover">
            <h4 className="text-center category-select">Titanium hardware</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Titanium" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/titanium.jpg`)} alt="Titanium hardware" title="Titanium hardware"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Gloves</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Gloves" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/gloves.jpg`)} alt="Gloves" title="Gloves"/>
            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Headsets</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Headsets" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/headsets.jpg`)} alt="Headsets" title="Headsets"/>
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

export default connect((state) => state, mapDispatchToProps)(CategorySelect);
