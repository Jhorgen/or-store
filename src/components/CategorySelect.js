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

  testthis = () => {
    console.log(this.props.items);
    console.log(this.props.form.addedItems);
  }

  render() {
    return (
      <div>
        <p onClick={() => this.testthis()}>asa</p>
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

export default connect((state) => state, mapDispatchToProps)(CategorySelect);
