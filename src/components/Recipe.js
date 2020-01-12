import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements, StripeProvider } from 'react-stripe-elements'
import PaymentForm from './PaymentForm'
import { Row } from 'reactstrap'
import { sk } from './../exfiles.js'



class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkout: '',
      paymentInfo: "none"
    }
  }

  componentWillMount = () => {
    console.log('mount:', this.props.form.total + 20.15 + .15 + .15);

    console.log("result:", );

    let x = (this.props.form.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    console.log(x);

  }


  componentWillUnmount = () => {
    if(this.refs.shipping.checked)
    this.props.substractShipping()
  }

  handleChecked = (e) => {
    if(e.target.checked) {
      this.props.addShipping();
    }
    else {
      this.props.substractShipping();
    }
  }

  checkout = () => {
    this.setState({checkout: "none", paymentInfo: ''})
    this.props.onClick()
  }



  render() {
    return (
    <StripeProvider apiKey={`${process.env.REACT_APP_API_KEY}`}>
      <Elements>
      <div className="container">
        <button className="btn btn-info" style={{display: this.state.paymentInfo}} onClick={() => {window.location.reload()}}>Back to cart</button>
        <Row className="justify-content-center" style={{display: this.state.paymentInfo}}>
        <PaymentForm total={this.props.form.total} />
        </Row>

        <div className="collection" style={{display: this.state.checkout}}>
          <li className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span>Shipping(+5$)</span>
            </label>
          </li>
          <li className="collection-item"><b>Total: ${this.props.form.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b></li>
        </div>
        <div className="checkout">
          <button style={{display: this.state.checkout}} onClick={() => this.checkout()} className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
    </Elements>
    </StripeProvider>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    addShipping: () => {dispatch({type: 'ADD_SHIPPING'})},
    substractShipping: () => {dispatch({type: 'SUB_SHIPPING'})}
  }
}

export default connect((state) => state, mapDispatchToProps)(Recipe)
