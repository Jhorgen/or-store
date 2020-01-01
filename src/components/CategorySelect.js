import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData } from './../actions/cartActions.js'
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
        <span onClick={() => this.callData()}>testerTest</span>
        <Link
          to={{
            pathname: "/shop",
            state: { category: "Grips" }
          }}
          >
          grips
        </Link>

        <Link
          to={{
            pathname: "/shop",
            state: { category: "Pedals" }
          }}
          >
          pedals
        </Link>
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
