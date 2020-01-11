import React, { Component } from 'react'
import { injectStripe, CardNumberElement,
  CardExpiryElement,
  CardCVCElement, } from 'react-stripe-elements'
  import { Button } from 'reactstrap'

  class PaymentForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        shippingForm: '',
        paymentForm: 'none'
      }
    }

    async submit(event) {
      let chargeToken = await this.props.stripe.createToken({name: "Name"})

      let charge = {
        token: chargeToken.token.id
      }

      let response = await fetch("http://localhost:3000/api/v1/charges", {
        method: "POST",
        body: JSON.stringify({
          charge: charge
        })
      })

      if (response.ok) console.log('Purchase Complete');

    }

    toggleForm = () => {
      this.setState({shippingForm: 'none', paymentForm: ''})
    }


    render() {
      return (
        <div>
        <div style={{background: "beige"}} className="checkout-form">
        <p style={{display: this.state.paymentForm}}>Amount: ${this.props.total}</p>

        <form>

        <div style={{display: this.state.shippingForm}}>

        <label>
        Address
        <input />
        </label>
        <br/>

        <label>
        Address
        <input />
        </label>
        <br/>

        <label>
        Address
        <input />
        </label>
        <br/>

        <label>
        Address
        <input />
        </label>
        <br/>

        <label>
        Address
        <input />
        </label>
        <br/>
        <span className="btn btn-block btn-info" onClick={() => this.toggleForm()}>Next</span>
        </div>

        <div style={{display: this.state.paymentForm}}>
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
        </div>
        </form>
        </div>
        </div>
      )
    }
  }

  export default injectStripe(PaymentForm);
