import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData } from './../actions/cartActions.js'
import { Row, Col } from 'reactstrap'
import axios from 'axios'


class CategorySelect extends Component {

  componentDidMount() {
    console.log(localStorage);
    this.props.loadItemData();


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
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to="/grips"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>

            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to="/pedals"
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>
          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Pedals" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
            <Link
              to={{
                pathname: "/shop",
                state: { category: "Grips" }
              }}
              >
              <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
            </Link>
          </div>

          <div class="test-hover">
            <h4 class="text-center category-select">Grips</h4>
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
    loadItemData: () => {(dispatch(loadItemData()))}
  }
}

export default connect((state) => state, mapDispatchToProps)(CategorySelect);
