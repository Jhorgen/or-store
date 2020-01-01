import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData } from './../actions/cartActions.js'
import {Row, Col} from 'reactstrap'
import axios from 'axios'


class CategorySelect extends Component {

  componentDidMount() {

    this.props.loadItemData();

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
          <Link
            to="/grips"
            >
            <div class="text-center category-select">Grips</div>
            <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>

          </Link>
        <Link
          to="/pedals"
          >
          <div class="text-center category-select">Grips</div>
         <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>

        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          <div class="text-center category-select">Grips</div>
             <img style={{height: '13rem'}} src={ require(`./../images/bars.jpg`)} alt={"bars"}/>
        </Link>
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

export default connect(state => state, mapDispatchToProps)(CategorySelect);
