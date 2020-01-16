import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectStripe, CardNumberElement,
  CardExpiryElement,
  CardCVCElement, CardElement } from 'react-stripe-elements'
  import { Button, Row } from 'reactstrap'

  class PaymentForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        shippingForm: '',
        paymentForm: 'none',
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        zip: '',
        address: '',
        token: '',
        description: ''
      }
    }

    ComponentDidMount = () => {
      console.log('test');
      console.log('cart items:', this.props.form.addedItems);
    }


    async submit(e) {
      e.preventDefault()
      let chargeToken = await this.props.stripe.createToken({name: "Name"}).then(({token, error}) => {
        this.setState({token: token.id})
  if (error) {
    console.log('error:', error);
  } else {
    console.log('no error:', token);
  }
});

      let charge = {
        customer: null,
        city: this.state.city,
        country: "usa",
        line1: this.state.address,
        line2: null,
        postal_code: this.state.zip,
        state: this.state.state,
        email: this.state.email,
        name: this.state.firstName + ' ' + this.state.lastName,
        phone: null,
        amount: Math.round(this.props.total.toFixed(2)*100),
        currency: "usd",
        token: this.state.token,
        description: this.state.description
        }

        let response = await fetch("http://localhost:3000/api/v1/charges", {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            charge: charge,
          })
        })

        if (response.ok) console.log('Purchase Complete');

      }

      toggleForm = () => {
        this.setState({shippingForm: 'none', paymentForm: ''})
        console.log('test');
        console.log('cart items:', this.props.form.addedItems);
        console.log(this.props.cartItems);
      }

      handleChange(e, name) {
        this.setState({ [name]: e.target.value });
        console.log(this.state.firstName);
        console.log(this.state.city);
      };

      render() {
        return (
          <div>
            <div style={{background: "beige"}} className="checkout-form">
              <p style={{display: this.state.paymentForm}}>Amount: ${this.props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>

              <form onSubmit={(e) => this.submit(e)}>

                <Row className="flex-column" style={{display: this.state.shippingForm}}>


                    <input onChange={(e) => this.handleChange(e, 'email')} placeholder="Email" />
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'firstName')} placeholder="First name" />
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'lastName')} placeholder="Last name" />
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'city')} placeholder="City" />
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'state')} placeholder="State"/>
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'zip')} placeholder="Zip" />
                  <br/>

                    <input onChange={(e) => this.handleChange(e, 'address')} placeholder="Address" />
                  <br/>

                    <textarea onChange={(e) => this.handleChange(e, 'discription')} placeholder="Comments or feedback? Write them here!"></textarea>

                  <br/>
                  <span className="btn btn-block btn-info" onClick={() => this.toggleForm()}>Next</span>
                </Row>

                <Row className="flex-column" style={{display: this.state.paymentForm}}>

                  <label className="pr-4 pb-2">
                    <b>Card details</b>
                    <CardNumberElement />
                  </label>
                  <br/>

                  <label className="pr-3 pb-2">
                    <b>Expiration date</b>
                    <CardExpiryElement />
                  </label>
                  <br/>

                  <label>
                    <b>CVC</b>
                    <CardCVCElement />
                  </label>
                  <br/>

                  <Button className="btn btn-block"><b>Pay now</b></Button>
                </Row>
              </form>
            </div>
          </div>
        )
      }
    }

    export default connect ((state) => state)(injectStripe(PaymentForm));
