import React, { Component } from 'react';
import { connect } from 'react-redux'
import { correctTotalOnEmpty } from './../actions/cartActions.js'
import Recipe from './Recipe'
import CartItem from './CartItem'
import { Row } from 'reactstrap'
import Footer from './Footer'
import {ScrollToTopOnMount} from './ScrollFix'


class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      handleHide: '',
      total: '',
      emailMessage: '',
      checked: ''
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

    if(this.props.form.checkout) {
      this.setState({emailMessage: <h4>An email receipt is on its way. Thank you for your purchase!</h4>, checked: 'none'})
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
    let total
    this.props.form.addedItems.length ? total = <Recipe onClick={this.handleHide} /> : total = ''
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
          <h4 style={{display: this.state.checked}}>Your cart is empty!</h4>
          {this.state.emailMessage}
        </div>
      )

      return (
        <div className='footer-control'>
          <ScrollToTopOnMount/>
          <div className="container">
            <Row className="cart mt-2">
              <ul style={{display: this.state.handleHide}} className={this.props.form.addedItems.length > 0 ? "collection w-100 mt-4" : ''}>
                {addedItems}
              </ul>
            </Row>
            {total}
          </div>
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
