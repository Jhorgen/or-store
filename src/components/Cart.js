import React, { Component } from 'react';
import { connect } from 'react-redux'
import { correctTotalOnEmpty } from './../actions/cartActions.js'
import Recipe from './Recipe'
import CartItem from './CartItem'
import { Row } from 'reactstrap'


class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleHide: ''
    }
  }

  componentDidMount = () => {
console.log(this.props.form.addedItems);
    if(this.props.form.addedItems.length <= 0) {
      console.log('cart checkout:');
      this.props.correctTotalOnEmpty();
    } else {
      console.log('nada');
    }
  }


  checkThis = (item, indexx) => {
    console.log(item);
    console.log(indexx);
  }

  handleHide = () => {
    this.setState({handleHide: "none"})
  }


  render() {

    let addedItems = this.props.form.addedItems.length ?
    (
      this.props.form.addedItems.map((item, indexx) => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <CartItem item={item} itemid={indexx} onClick={() => this.checkThis(item, indexx)} />
        </li>
      )
    })
  )
  :
  (
    <div style={{display: this.state.handleHide}}>
      <p>Nothing.</p>
    </div>
  )

  return (
    <div className="container">
      <Row className="cart mt-2">
        <ul className="collection">
          {addedItems}
        </ul>
      </Row>
      <Recipe onClick={this.handleHide} />
    </div>
  )
}
}


const mapDispatchToProps = (dispatch) => {
  return{
    correctTotalOnEmpty: () => {dispatch(correctTotalOnEmpty())},
  }
}

export default connect((state) => state, mapDispatchToProps)(Cart)
