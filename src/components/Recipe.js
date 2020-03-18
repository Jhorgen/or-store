import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements, StripeProvider } from 'react-stripe-elements'
import PaymentForm from './PaymentForm'
import { Row } from 'reactstrap'


class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: '',
      paymentInfo: "none"
    }
  }

  componentDidMount = () => {
    let x = (this.props.form.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    console.log(x);
  }

  checkout = () => {
    this.setState({checkout: "none", paymentInfo: ''})
    this.props.onClick()
  }


  render() {
    return (
      <StripeProvider apiKey={`${process.env.REACT_APP_FIRST}`}>
        <Elements>
          <div className="container">
            <button className="btn btn-info" style={{display: this.state.paymentInfo}} onClick={() => {window.location.reload()}}>Back to cart</button>
            <Row className="justify-content-center" style={{display: this.state.paymentInfo}}>
              <PaymentForm total={this.props.form.total} cartItems={this.props.form.addedItems} />
            </Row>
            <Row className="align-items-center float-right" style={{display: this.state.checkout}}>
              <div className='d-flex flex-column' style={{display: this.state.checkout}}>
                <span className="mr-2"><b>Total: ${this.props.form.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></span>
                <button onClick={() => this.checkout()} className="btn btn-info mt-1">Checkout</button>
              </div>
            </Row>
          </div>
        </Elements>
      </StripeProvider>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {dispatch({type: 'ADD_SHIPPING'})},
    substractShipping: () => {dispatch({type: 'SUB_SHIPPING'})}
  }
}

export default connect((state) => state, mapDispatchToProps)(Recipe)
