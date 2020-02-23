import React, { Component } from 'react';
import { connect } from 'react-redux'
import { correctTotalOnEmpty } from './../actions/cartActions.js'
import Recipe from './Recipe'
import CartItem from './CartItem'
import { Row } from 'reactstrap'
import Footer from './Footer'


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
            <hr/>
        </li>
      )
    })
  )
  :
  (
    <div style={{display: this.state.handleHide}}>
      <p>Your cart is empty!</p>
    </div>
  )

  return (
    <div className='footer-control'>
    <div className="container">
      <Row className="cart mt-2">
        <ul className={this.props.form.addedItems.length > 0 ? "collection w-100 mt-4" : ''}>
          {addedItems}
        </ul>
      </Row>
      <Recipe onClick={this.handleHide} />
    </div>
    <Footer />
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
