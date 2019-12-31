import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData } from './../actions/cartActions.js'
import axios from 'axios'


class CategorySelect extends Component {

  componentDidMount() {
    this.props.loadItemData();
  }

  callData = () => {

      this.props.loadItemData();

console.log('items:', this.props.items);
  }

  render() {
  return (
    <div>
      <span onClick={() => this.callData()}>testerTest</span>
    <li><Link to="/shop">Shop</Link></li>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItemData: () => {(dispatch(loadItemData()))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
