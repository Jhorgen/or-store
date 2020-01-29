import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectStripe, CardNumberElement,
  CardExpiryElement,
  CardCVCElement } from 'react-stripe-elements'
  import { Button, Row } from 'reactstrap'
  import axios from 'axios'

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
        description: '',
        addressSame: 'none',
        checked: 'checked',
        city2: '',
        state2: '',
        zip2: '',
        address2: ''
      }
    }

    ComponentDidMount = () => {
      console.log(this.props.form.total);
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

        if (response.ok) {
          console.log('Purchase Complete')
          for(var i = 0; i < this.props.form.addedItems.length; i++) {
            console.log(this.props.form.addedItems[i].id);
            let quantity = 'option' + this.props.form.addedItems[i].selectedOptionIndex + 'quantity';
            let selectedOptionQuantity
            this.props.form.addedItems[i].selectedOptionIndex == 10 ? selectedOptionQuantity = this.props.form.addedItems[i].option10quantity : this.props.form.addedItems[i].selectedOptionIndex == 9 ? selectedOptionQuantity = this.props.form.addedItems[i].option9quantity : this.props.form.addedItems[i].selectedOptionIndex == 8 ? selectedOptionQuantity = this.props.form.addedItems[i].option8quantity : this.props.form.addedItems[i].selectedOptionIndex == 7 ? selectedOptionQuantity = this.props.form.addedItems[i].option7quantity : this.props.form.addedItems[i].selectedOptionIndex == 6 ? selectedOptionQuantity = this.props.form.addedItems[i].option6quantity :
            this.props.form.addedItems[i].selectedOptionIndex == 5 ? selectedOptionQuantity = this.props.form.addedItems[i].option5quantity :
            this.props.form.addedItems[i].selectedOptionIndex == 4 ? selectedOptionQuantity = this.props.form.addedItems[i].option4quantity :
            this.props.form.addedItems[i].selectedOptionIndex == 3 ? selectedOptionQuantity = this.props.form.addedItems[i].option3quantity :
            this.props.form.addedItems[i].selectedOptionIndex == 2 ? selectedOptionQuantity = this.props.form.addedItems[i].option2quantity :
            this.props.form.addedItems[i].selectedOptionIndex == 1 ? selectedOptionQuantity = this.props.form.addedItems[i].option1quantity :

            console.log('option', selectedOptionQuantity);
              const item = {
                [quantity]: selectedOptionQuantity - this.props.form.addedItems[i].checkoutquantity,
              }
              axios.put (
                `http://localhost:3000/api/v1/products/${this.props.form.addedItems[i].id}`,
                {
                  product: item
                })
                .then(response => {
                  console.log('response:', response);
                  this.testPost()

                })
                .catch(error => {
                  console.log('error:', error);
                })
          }
        }

      }

      toggleForm = () => {
        this.setState({shippingForm: 'none', paymentForm: ''})
        console.log('test');
        console.log('state:', this.props.form.addedItems);
        console.log('props:', this.props.cartItems);

      }

      handleChange(e, name) {
        this.setState({ [name]: e.target.value });
        console.log(this.state.firstName);
        console.log(this.state.city);
      };

      testPost() {
        axios.post(
          'http://localhost:3000/api/v1/purchases/',
          { purchase:
            {
              amount: this.props.form.total,
              email: this.state.email,
              firstname: this.state.firstName,
              lastname: this.state.lastName,
              address: this.state.address + ' ' + this.state.city + ' ' + this.state.state + ' ' + this.state.zip,

              brand1: this.props.form.addedItems[0].brand,
              title1: this.props.form.addedItems[0].title,
              selectedoption1: this.props.form.addedItems[0].selectedoption1,
              price1: this.props.form.addedItems[0].price1,
              quantity1: this.props.form.addedItems[0].checkoutquantity,

              brand2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].brand : undefined,
              title2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].title : undefined,
              quantity2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].checkoutquantity : undefined,

              brand3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].brand : undefined,
              title3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].title : undefined,
              quantity3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].checkoutquantity : undefined,

              brand4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].brand : undefined,
              title4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].title : undefined,
              quantity4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].checkoutquantity : undefined,

              brand5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].brand : undefined,
              title5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].title : undefined,
              quantity5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].checkoutquantity : undefined,

              brand6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].brand : undefined,
              title6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].title : undefined,
              quantity6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].checkoutquantity : undefined,

              brand7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].brand : undefined,
              title7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].title : undefined,
              quantity7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].checkoutquantity : undefined,

              brand8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].brand : undefined,
              title8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].title : undefined,
              quantity8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].checkoutquantity : undefined,

              brand9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].brand : undefined,
              title9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].title : undefined,
              quantity9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].checkoutquantity : undefined,

              brand10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].brand : undefined,
              title10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].title : undefined,
              quantity10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].checkoutquantity : undefined,

              brand11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].brand : undefined,
              title11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].title : undefined,
              quantity11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].checkoutquantity : undefined,

              brand12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].brand : undefined,
              title12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].title : undefined,
              quantity12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].checkoutquantity : undefined,

              brand13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].brand : undefined,
              title13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].title : undefined,
              quantity13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].checkoutquantity : undefined,

              brand14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].brand : undefined,
              title14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].title : undefined,
              quantity14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].checkoutquantity : undefined,

              brand15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].brand : undefined,
              title15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].title : undefined,
              quantity15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].checkoutquantity : undefined,

              brand16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].brand : undefined,
              title16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].title : undefined,
              quantity16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].checkoutquantity : undefined,

              brand17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].brand : undefined,
              title17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].title : undefined,
              quantity17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].checkoutquantity : undefined,

              brand18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].brand : undefined,
              title18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].title : undefined,
              quantity18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].checkoutquantity : undefined,

              brand19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].brand : undefined,
              title19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].title : undefined,
              quantity19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].checkoutquantity : undefined,

              brand20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].brand : undefined,
              title20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].title : undefined,
              quantity20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].checkoutquantity : undefined,

              brand21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].brand : undefined,
              title21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].title : undefined,
              quantity21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].checkoutquantity : undefined,

              brand22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].brand : undefined,
              title22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].title : undefined,
              quantity22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].checkoutquantity : undefined,

              brand23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].brand : undefined,
              title23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].title : undefined,
              quantity23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].checkoutquantity : undefined,

              brand24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].brand : undefined,
              title24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].title : undefined,
              quantity24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].checkoutquantity : undefined,

              brand25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].brand : undefined,
              title25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].title : undefined,
              quantity25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].checkoutquantity : undefined,

              brand26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].brand : undefined,
              title26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].title : undefined,
              quantity26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].checkoutquantity : undefined,

              brand27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].brand : undefined,
              title27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].title : undefined,
              quantity27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].checkoutquantity : undefined,

              brand28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].brand : undefined,
              title28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].title : undefined,
              quantity28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].checkoutquantity : undefined,

              brand29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].brand : undefined,
              title29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].title : undefined,
              quantity29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].checkoutquantity : undefined,

              brand30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].brand : undefined,
              title30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].title : undefined,
              quantity30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].checkoutquantity : undefined,

            }
          }
        )
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
      }

      toggleShippingForm = () => {
        if(this.state.checked == 'checked') {
        this.setState({checked: '', addressSame: ''})
      } else {
        this.setState({checked: 'checked', addressSame: 'none' })
      }
      }



      render() {
        return (
          <div>
            <div style={{background: "beige"}} className="checkout-form">
              <p style={{display: this.state.paymentForm}}>Amount: ${this.props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>

              <form onSubmit={(e) => this.submit(e)}>

                <Row className="flex-column" style={{display: this.state.shippingForm}}>

                    <h4 className='text-center pb-2'>{this.state.checked == 'checked' ? <span>Shipping details</span> : <span>Billing address</span>}</h4>
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

                    <Row className="flex-column" style={{display: this.state.addressSame}}>

                      <hr/>
                        <h4 className='text-center pb-2'>Shipping address</h4>
                        <input onChange={(e) => this.handleChange(e, 'firstName')} placeholder="First name" />
                      <br/>

                        <input onChange={(e) => this.handleChange(e, 'lastName')} placeholder="Last name" />
                      <br/>

                        <input onChange={(e) => this.handleChange(e, 'city2')} placeholder="City" />
                      <br/>

                        <input onChange={(e) => this.handleChange(e, 'state2')} placeholder="State"/>
                      <br/>

                        <input onChange={(e) => this.handleChange(e, 'zip2')} placeholder="Zip" />
                      <br/>

                        <input onChange={(e) => this.handleChange(e, 'address2')} placeholder="Address" />
                      <br/>

                    </Row>


                    <textarea onChange={(e) => this.handleChange(e, 'discription')} placeholder="Comments or feedback? Write them here!"></textarea>

                  <br/>
                  <Row className='align-items-baseline justify-content-center'>
                    <p className='pr-1'>Shipping address same as billing?</p>
                    <input onClick={() => this.toggleShippingForm()} style={{width: '2rem', height: '1rem'}} type='checkbox' checked={this.state.checked} />
                  </Row>
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
                  <p onClick={() => this.testPost()}>test</p>
                  <Button className="btn btn-block"><b>Pay now</b></Button>
                </Row>
              </form>
            </div>
          </div>
        )
      }
    }

    export default connect ((state) => state)(injectStripe(PaymentForm));
