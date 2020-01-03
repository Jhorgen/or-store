import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'
import { Row } from 'reactstrap'


class CategorySelect extends Component {

  componentDidMount() {
    if(this.props.addedItems.length > 0) {
      let check = this.props.addedItems;
    this.props.loadItemDataCheck(check);
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

  callData = () => {
    console.log('items:', this.props.items);
  }

  render() {
    return (
      <div>
        <span onClick={() => this.callData()}>.</span>
        <Row className="justify-content-around m-3">
          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to="/grips"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>

            </Link>
          </div>

          <div className="test-hover">
            <h4 className="text-center category-select">Grips</h4>
            <Link
              to="/pedals"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
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
    loadItemDataCheck: (check) => {(dispatch(loadItemDataCheck(check)))}
  }
}

export default connect((state) => state, mapDispatchToProps)(CategorySelect);
