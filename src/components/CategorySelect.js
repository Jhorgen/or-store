import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadItemData } from './../actions/cartActions.js'
import axios from 'axios'


class CategorySelect extends Component {

  componentDidMount() {
    axios.get('https://murmuring-shore-14390.herokuapp.com/api/v1/ideas')
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))
  }

  callData = () => {
    this.props.loadItemData();
  }

  render() {
  return (
    <div>
    <li onClick={() => {this.callData()}}><Link to="/shop">Shop</Link></li>
    </div>
  )
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadItemData: () => {(dispatch(loadItemData()))}
  }
}

export default connect(null, mapDispatchToProps)(CategorySelect);
