import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectStripe, CardNumberElement,
  CardExpiryElement,
  CardCVCElement } from 'react-stripe-elements'
  import { Button, Row } from 'reactstrap'
  import axios from 'axios'
   import { checkout } from './../actions/cartActions.js'


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
        firstName2: '',
        lastName2: '',
        city2: '',
        state2: '',
        zip2: '',
        address2: '',
        nextButton: '',
        toggleHr: 'none',
        emailValidation: 'none',
        firstNameValidation: 'none',
        lastNameValidation: 'none',
        cityValidation: 'none',
        stateValidation: 'none',
        zipValidation: 'none',
        addressValidation: 'none',
        cardInfoValidation: 'none',
        tester: '',
        shipping: 0.00,
        combinedTotal: 0
      }
    }

    ComponentDidMount = () => {
      console.log(this.props.form.total);
      console.log('test');
      console.log('cart items:', this.props.form.addedItems);
    }

    async submit(e) {
      e.preventDefault()
      if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.city !== '' && this.state.state.toString().length === 2 && new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) && this.state.zip.toString().length === 5 && this.state.address !== '') {
        console.log('test');
        let name = this.state.firstName + ' ' + this.state.lastName
        let address = this.state.address + ' ' + this.state.city + ' ' + this.state.state + ' ' + this.state.zip
        let chargeToken = await this.props.stripe.createToken({name: name, address: address }).then(({token, error}) => {
          if (error) {
            console.log('error:', error);
            this.setState({cardInfoValidation: ''})
          } else {
            this.setState({token: token.id})
            console.log('no error:', token);
          }
        });

        let charge = {
          customer: null,
          address_city: this.state.city,
          country: "usa",
          line1: this.state.address,
          line2: null,
          postal_code: this.state.zip,
          state: this.state.state,
          email: this.state.email,
          name: this.state.firstName + ' ' + this.state.lastName,
          phone: null,
          amount: Math.round(this.state.shipping + this.props.total.toFixed(2)*100),
          currency: "usd",
          token: this.state.token,
          description: 'Name:' + ' ' + this.state.firstName + ' ' + this.state.lastName + ' ' + 'Address:' + ' ' + this.state.address + ' ' + this.state.city + ' ' + this.state.state + ' ' + this.state.zip + ' ' + 'Address2:' + this.state.address2 + ' ' + this.state.city2 + ' ' + this.state.state2 + ' ' + this.state.zip2,
          address: this.state.address + ' ' + this.state.city + ' ' + this.state.state + ' ' + this.state.zip
        }

        let response = await fetch("https://nameless-hollows-85718.herokuapp.com/api/v1/charges", {
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
              `https://nameless-hollows-85718.herokuapp.com/api/v1/products/${this.props.form.addedItems[i].id}`,
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
        } else {
          if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) === false) {
            this.setState({emailValidation: ''})
          }

          if(this.state.firstName === '') {
            this.setState({firstNameValidation: ''})

          }

          if(this.state.lastName === '') {
            this.setState({lastNameValidation: ''})
          }

          if(this.state.city === '') {
            this.setState({cityValidation: ''})

          }

          if(this.state.state === '') {
            this.setState({stateValidation: ''})
          }

          let zipCodeCheck = this.state.zip
          if(zipCodeCheck.toString().length > 5 || zipCodeCheck.toString().length < 5 ) {
            this.setState({zipValidation: ''})
          }

          if(this.state.address === '') {
            this.setState({addressValidation: ''})
          }
        }
      }

      toggleForm = (e) => {
        console.log('ran again');
        e.preventDefault()
        if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.city !== '' && this.state.state.toString().length === 2 && new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) && this.state.zip.toString().length === 5 && this.state.address !== '') {
          this.setState({nextButton: 'none', paymentForm: '', toggleHr: ''})

          let shipping = 5.00
          for(var z = 0; z < this.props.form.addedItems.length; z++) {

            if(this.props.form.addedItems[z].category === 'Bars') {
              shipping = shipping + 15 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Brakes') {
              shipping = shipping + 4 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Hubs') {
              shipping = shipping + 4 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Rims') {
              shipping = shipping + 15 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Pedals') {
              shipping = shipping + 4 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Sprockets') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Chains') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Seats') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Forks') {
              shipping = shipping + 15 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Headsets') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Gloves') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Pegs') {
              shipping = shipping + 3 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Grips') {
              shipping = shipping + 3.00 * this.props.form.addedItems[z].checkoutquantity
              console.log(shipping);
            }

            if(this.props.form.addedItems[z].category === 'Titanium Hardware') {
              shipping = shipping + 2 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Cranks') {
              shipping = shipping + 4 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Stems') {
              shipping = shipping + 4 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Tires') {
              shipping = shipping + 10 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Wheels') {
              shipping = shipping + 15 * this.props.form.addedItems[z].checkoutquantity
            }

            if(this.props.form.addedItems[z].category === 'Frames') {
              shipping = shipping + 20 * this.props.form.addedItems[z].checkoutquantity
            }

            if(z + 1 == this.props.form.addedItems.length) {
              this.setState({shipping: shipping})
              console.log(this.state.shipping);
              this.setState({combinedTotal: this.props.total + shipping})
            } else {
              console.log('z', z);
              console.log('l', this.props.form.addedItems.length);
            }

          }


        } else {
          if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) === false) {
            this.setState({emailValidation: ''})
          }

          if(this.state.firstName === '') {
            this.setState({firstNameValidation: ''})
          }

          if(this.state.lastName === '') {
            this.setState({lastNameValidation: ''})
          }

          if(this.state.city === '') {
            this.setState({cityValidation: ''})
          }

          if(this.state.state === '') {
            this.setState({stateValidation: ''})
          }

          let zipCodeCheck = this.state.zip
          if(zipCodeCheck.toString().length !== 5) {
            this.setState({zipValidation: ''})
          }

          if(this.state.address === '') {
            this.setState({addressValidation: ''})
          }
        }
      }

      handleChange(e, name) {
        this.setState({[name]: e.target.value});
        console.log(this.state.tester);

          if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)) {
            this.setState({emailValidation: 'none'})
          }

          if(this.state.firstName !== '') {
            this.setState({firstNameValidation: 'none'})
          }

          if(this.state.lastName !== '') {
            this.setState({lastNameValidation: 'none'})
          }

          if(this.state.city !== '') {
            this.setState({cityValidation: 'none'})
          }

          if(this.state.state !== 'Select') {
            this.setState({stateValidation: 'none'})
          }

          let zipCodeCheck = this.state.zip
          if(zipCodeCheck.toString().length === 4) {
            this.setState({zipValidation: 'none'})
          }

          if(this.state.address !== '') {
            this.setState({addressValidation: 'none'})
          }
      };

      testPost() {
        console.log('total', this.props.total);
        console.log('total with toFixed', this.props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
        axios.post(
          'https://nameless-hollows-85718.herokuapp.com/api/v1/purchases/',
          { purchase:
            {
              amount: this.props.form.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
              shipping: this.state.shipping,
              email: this.state.email,
              firstname: this.state.firstName,
              lastname: this.state.lastName,
              address: this.state.address + ' ' + this.state.city + ' ' + this.state.state + ' ' + this.state.zip,
              address2: this.state.address2 === '' ? '' : this.state.address2 + ' ' + this.state.city2 + ' ' + this.state.state2 + ' ' + this.state.zip2,

              brand1: this.props.form.addedItems[0].brand,
              title1: this.props.form.addedItems[0].title,
              quantity1: this.props.form.addedItems[0].checkoutquantity,
              selectedoption1: this.props.form.addedItems[0].selectedoption,
              price1: this.props.form.addedItems[0].price,

              brand2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].brand : undefined,
              title2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].title : undefined,
              quantity2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].checkoutquantity : undefined,
              selectedoption2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].selectedoption : undefined,
              price2: this.props.form.addedItems.length > 1 ? this.props.form.addedItems[1].price : undefined,

              brand3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].brand : undefined,
              title3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].title : undefined,
              quantity3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].checkoutquantity : undefined,
              selectedoption3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].selectedoption : undefined,
              price3: this.props.form.addedItems.length > 2 ? this.props.form.addedItems[2].price : undefined,

              brand4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].brand : undefined,
              title4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].title : undefined,
              quantity4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].checkoutquantity : undefined,
              selectedoption4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].selectedoption : undefined,
              price4: this.props.form.addedItems.length > 3 ? this.props.form.addedItems[3].price : undefined,

              brand5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].brand : undefined,
              title5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].title : undefined,
              quantity5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].checkoutquantity : undefined,
              selectedoption5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].selectedoption : undefined,
              price5: this.props.form.addedItems.length > 4 ? this.props.form.addedItems[4].price : undefined,

              brand6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].brand : undefined,
              title6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].title : undefined,
              quantity6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].checkoutquantity : undefined,
              selectedoption6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].selectedoption : undefined,
              price6: this.props.form.addedItems.length > 5 ? this.props.form.addedItems[5].price : undefined,

              brand7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].brand : undefined,
              title7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].title : undefined,
              quantity7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].checkoutquantity : undefined,
              selectedoption7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].selectedoption : undefined,
              price7: this.props.form.addedItems.length > 6 ? this.props.form.addedItems[6].price : undefined,

              brand8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].brand : undefined,
              title8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].title : undefined,
              quantity8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].checkoutquantity : undefined,
              selectedoption8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].selectedoption : undefined,
              price8: this.props.form.addedItems.length > 7 ? this.props.form.addedItems[7].price : undefined,

              brand9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].brand : undefined,
              title9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].title : undefined,
              quantity9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].checkoutquantity : undefined,
              selectedoption9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].selectedoption : undefined,
              price9: this.props.form.addedItems.length > 8 ? this.props.form.addedItems[8].price : undefined,

              brand10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].brand : undefined,
              title10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].title : undefined,
              quantity10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].checkoutquantity : undefined,
              selectedoption10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].selectedoption : undefined,
              price10: this.props.form.addedItems.length > 9 ? this.props.form.addedItems[9].price : undefined,

              brand11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].brand : undefined,
              title11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].title : undefined,
              quantity11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].checkoutquantity : undefined,
              selectedoption11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].selectedoption : undefined,
              price11: this.props.form.addedItems.length > 10 ? this.props.form.addedItems[10].price : undefined,

              brand12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].brand : undefined,
              title12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].title : undefined,
              quantity12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].checkoutquantity : undefined,
              selectedoption12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].selectedoption : undefined,
              price12: this.props.form.addedItems.length > 11 ? this.props.form.addedItems[11].price : undefined,

              brand13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].brand : undefined,
              title13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].title : undefined,
              quantity13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].checkoutquantity : undefined,
              selectedoption13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].selectedoption : undefined,
              price13: this.props.form.addedItems.length > 12 ? this.props.form.addedItems[12].price : undefined,

              brand14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].brand : undefined,
              title14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].title : undefined,
              quantity14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].checkoutquantity : undefined,
              selectedoption14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].selectedoption : undefined,
              price14: this.props.form.addedItems.length > 13 ? this.props.form.addedItems[13].price : undefined,

              brand15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].brand : undefined,
              title15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].title : undefined,
              quantity15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].checkoutquantity : undefined,
              selectedoption15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].selectedoption : undefined,
              price15: this.props.form.addedItems.length > 14 ? this.props.form.addedItems[14].price : undefined,

              brand16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].brand : undefined,
              title16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].title : undefined,
              quantity16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].checkoutquantity : undefined,
              selectedoption16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].selectedoption : undefined,
              price16: this.props.form.addedItems.length > 15 ? this.props.form.addedItems[15].price : undefined,

              brand17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].brand : undefined,
              title17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].title : undefined,
              quantity17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].checkoutquantity : undefined,
              selectedoption17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].selectedoption : undefined,
              price17: this.props.form.addedItems.length > 16 ? this.props.form.addedItems[16].price : undefined,

              brand18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].brand : undefined,
              title18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].title : undefined,
              quantity18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].checkoutquantity : undefined,
              selectedoption18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].selectedoption : undefined,
              price18: this.props.form.addedItems.length > 17 ? this.props.form.addedItems[17].price : undefined,

              brand19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].brand : undefined,
              title19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].title : undefined,
              quantity19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].checkoutquantity : undefined,
              selectedoption19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].selectedoption : undefined,
              price19: this.props.form.addedItems.length > 18 ? this.props.form.addedItems[18].price : undefined,

              brand20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].brand : undefined,
              title20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].title : undefined,
              quantity20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].checkoutquantity : undefined,
              selectedoption20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].selectedoption : undefined,
              price20: this.props.form.addedItems.length > 19 ? this.props.form.addedItems[19].price : undefined,

              brand21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].brand : undefined,
              title21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].title : undefined,
              quantity21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].checkoutquantity : undefined,
              selectedoption21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].selectedoption : undefined,
              price21: this.props.form.addedItems.length > 20 ? this.props.form.addedItems[20].price : undefined,

              brand22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].brand : undefined,
              title22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].title : undefined,
              quantity22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].checkoutquantity : undefined,
              selectedoption22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].selectedoption : undefined,
              price22: this.props.form.addedItems.length > 21 ? this.props.form.addedItems[21].price : undefined,

              brand23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].brand : undefined,
              title23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].title : undefined,
              quantity23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].checkoutquantity : undefined,
              selectedoption23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].selectedoption : undefined,
              price23: this.props.form.addedItems.length > 22 ? this.props.form.addedItems[22].price : undefined,

              brand24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].brand : undefined,
              title24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].title : undefined,
              quantity24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].checkoutquantity : undefined,
              selectedoption24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].selectedoption : undefined,
              price24: this.props.form.addedItems.length > 23 ? this.props.form.addedItems[23].price : undefined,

              brand25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].brand : undefined,
              title25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].title : undefined,
              quantity25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].checkoutquantity : undefined,
              selectedoption25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].selectedoption : undefined,
              price25: this.props.form.addedItems.length > 24 ? this.props.form.addedItems[24].price : undefined,

              brand26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].brand : undefined,
              title26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].title : undefined,
              quantity26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].checkoutquantity : undefined,
              selectedoption26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].selectedoption : undefined,
              price26: this.props.form.addedItems.length > 25 ? this.props.form.addedItems[25].price : undefined,

              brand27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].brand : undefined,
              title27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].title : undefined,
              quantity27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].checkoutquantity : undefined,
              selectedoption27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].selectedoption : undefined,
              price27: this.props.form.addedItems.length > 26 ? this.props.form.addedItems[26].price : undefined,

              brand28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].brand : undefined,
              title28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].title : undefined,
              quantity28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].checkoutquantity : undefined,
              selectedoption28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].selectedoption : undefined,
              price28: this.props.form.addedItems.length > 27 ? this.props.form.addedItems[27].price : undefined,

              brand29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].brand : undefined,
              title29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].title : undefined,
              quantity29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].checkoutquantity : undefined,
              selectedoption29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].selectedoption : undefined,
              price29: this.props.form.addedItems.length > 28 ? this.props.form.addedItems[28].price : undefined,

              brand30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].brand : undefined,
              title30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].title : undefined,
              quantity30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].checkoutquantity : undefined,
              selectedoption30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].selectedoption : undefined,
              price30: this.props.form.addedItems.length > 29 ? this.props.form.addedItems[29].price : undefined,

            }
          }
        )
        .then(response => {
          console.log(response)
          this.props.checkout(this.props.form.items)
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
              <p style={{display: this.state.paymentForm}}></p>
              <form onSubmit={(e) => this.toggleForm(e)}>
                <Row className="flex-column" style={{display: this.state.shippingForm}}>
                  <h4 className='text-center pb-2'>{this.state.checked == 'checked' ? <span>Shipping details</span> : <span>Billing address</span>}</h4>
                  <b>Email</b>
                  <input className='form-control' type='email' onChange={(e) => this.handleChange(e, 'email')} placeholder="Email" />
                  <p style={{display: this.state.emailValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>Email required</p>
                  <br/>
                  <b>First name</b>
                  <input className='form-control' onChange={(e) => this.handleChange(e, 'firstName')} placeholder="First name" />
                  <p style={{display: this.state.firstNameValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>First name required</p>
                  <br/>
                  <b>Last name</b>
                  <input className='form-control' onChange={(e) => this.handleChange(e, 'lastName')} placeholder="Last name" />
                  <p style={{display: this.state.lastNameValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>Last name required</p>
                  <br/>
                  <b>City</b>
                  <input className='form-control' onChange={(e) => this.handleChange(e, 'city')} placeholder="City" />
                  <p style={{display: this.state.cityValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>City required</p>
                  <br/>
                  <b>State</b>
                  <form>
                    <select className='form-control' onChange={(e) => this.handleChange(e, 'state')}>
                      <option value={'default'}>Select</option>
                      <option value={'AL'}>Alabama</option>
                      <option value={'AK'}>Alaska</option>
                      <option value={'AZ'}>Arizona</option>
                      <option value={'AR'}>Arkansas</option>
                      <option value={'CA'}>California</option>
                      <option value={'CO'}>Colorado</option>
                      <option value={'CT'}>Connecticut</option>
                      <option value={'DE'}>Delaware</option>
                      <option value={'FL'}>Florida</option>
                      <option value={'GA'}>Georgia</option>
                      <option value={'HI'}>Hawaii</option>
                      <option value={'ID'}>Idaho</option>
                      <option value={'IL'}>Illinois</option>
                      <option value={'IN'}>Indiana</option>
                      <option value={'IA'}>Iowa</option>
                      <option value={'KS'}>Kansas</option>
                      <option value={'KY'}>Kentucky</option>
                      <option value={'LA'}>Louisiana</option>
                      <option value={'ME'}>Maine</option>
                      <option value={'MD'}>Maryland</option>
                      <option value={'MA'}>Massachusetts</option>
                      <option value={'MI'}>Michigan</option>
                      <option value={'MN'}>Minnesota</option>
                      <option value={'MS'}>Mississippi</option>
                      <option value={'MO'}>Missouri</option>
                      <option value={'MT'}>Montana</option>
                      <option value={'NE'}>Nebraska</option>
                      <option value={'NV'}>Nevada</option>
                      <option value={'NH'}>New Hampshire</option>
                      <option value={'NJ'}>New Jersey</option>
                      <option value={'NM'}>New Mexico</option>
                      <option value={'NY'}>New York</option>
                      <option value={'NC'}>North Carolina</option>
                      <option value={'ND'}>North Dakoda</option>
                      <option value={'OH'}>Ohio</option>
                      <option value={'OK'}>Oklahoma</option>
                      <option value={'OR'}>Oregon</option>
                      <option value={'PA'}>Pennsylvania</option>
                      <option value={'RI'}>Rhode Island</option>
                      <option value={'SC'}>South Carolina</option>
                      <option value={'SD'}>South Dakota</option>
                      <option value={'TN'}>Tennessee</option>
                      <option value={'TX'}>Texas</option>
                      <option value={'UT'}>Utah</option>
                      <option value={'VT'}>Vermont</option>
                      <option value={'VA'}>Virginia</option>
                      <option value={'WA'}>Washington</option>
                      <option value={'WV'}>West Virginia</option>
                      <option value={'WI'}>Wisconsin</option>
                      <option value={'WY'}>Wyoming</option>
                    </select>
                  </form>
                  <p style={{display: this.state.stateValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>State required</p>
                  <br/>
                  <b>Zip Code</b>
                  <input className='form-control' onChange={(e) => this.handleChange(e, 'zip')} placeholder="Zip" />
                  <p style={{display: this.state.zipValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>Zip code required</p>
                  <br/>
                  <b>Street address</b>
                  <input className='form-control' onChange={(e) => this.handleChange(e, 'address')} placeholder="Street address" />
                  <p style={{display: this.state.addressValidation, marginTop: '-.3px', textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>* </span>Street address required</p>
                  <br/>
                  <Row className="flex-column" style={{display: this.state.addressSame}}>
                    <hr/>
                    <h4 className='text-center pb-2'>Shipping address</h4>
                    <b>First name</b>
                    <input className='form-control' onChange={(e) => this.handleChange(e, 'firstName2')} placeholder="First name" />
                    <br/>
                    <b>Last name</b>
                    <input className='form-control' onChange={(e) => this.handleChange(e, 'lastName2')} placeholder="Last name" />
                    <br/>
                    <b>City</b>
                    <input className='form-control' onChange={(e) => this.handleChange(e, 'city2')} placeholder="City" />
                    <br/>
                    <b>State</b>
                    <form>
                      <select className='form-control' ref="selectMark"
                        onChange={(e) => this.handleChange(e.target.value, 'state2')}>
                        <option value={'default'}>Select</option>
                        <option value={'AL'}>Alabama</option>
                        <option value={'AK'}>Alaska</option>
                        <option value={'AZ'}>Arizona</option>
                        <option value={'AR'}>Arkansas</option>
                        <option value={'CA'}>California</option>
                        <option value={'CO'}>Colorado</option>
                        <option value={'CT'}>Connecticut</option>
                        <option value={'DE'}>Delaware</option>
                        <option value={'FL'}>Florida</option>
                        <option value={'GA'}>Georgia</option>
                        <option value={'HI'}>Hawaii</option>
                        <option value={'ID'}>Idaho</option>
                        <option value={'IL'}>Illinois</option>
                        <option value={'IN'}>Indiana</option>
                        <option value={'IA'}>Iowa</option>
                        <option value={'KS'}>Kansas</option>
                        <option value={'KY'}>Kentucky</option>
                        <option value={'LA'}>Louisiana</option>
                        <option value={'ME'}>Maine</option>
                        <option value={'MD'}>Maryland</option>
                        <option value={'MA'}>Massachusetts</option>
                        <option value={'MI'}>Michigan</option>
                        <option value={'MN'}>Minnesota</option>
                        <option value={'MS'}>Mississippi</option>
                        <option value={'MO'}>Missouri</option>
                        <option value={'MT'}>Montana</option>
                        <option value={'NE'}>Nebraska</option>
                        <option value={'NV'}>Nevada</option>
                        <option value={'NH'}>New Hampshire</option>
                        <option value={'NJ'}>New Jersey</option>
                        <option value={'NM'}>New Mexico</option>
                        <option value={'NY'}>New York</option>
                        <option value={'NC'}>North Carolina</option>
                        <option value={'ND'}>North Dakoda</option>
                        <option value={'OH'}>Ohio</option>
                        <option value={'OK'}>Oklahoma</option>
                        <option value={'OR'}>Oregon</option>
                        <option value={'PA'}>Pennsylvania</option>
                        <option value={'RI'}>Rhode Island</option>
                        <option value={'SC'}>South Carolina</option>
                        <option value={'SD'}>South Dakota</option>
                        <option value={'TN'}>Tennessee</option>
                        <option value={'TX'}>Texas</option>
                        <option value={'UT'}>Utah</option>
                        <option value={'VT'}>Vermont</option>
                        <option value={'VA'}>Virginia</option>
                        <option value={'WA'}>Washington</option>
                        <option value={'WV'}>West Virginia</option>
                        <option value={'WI'}>Wisconsin</option>
                        <option value={'WY'}>Wyoming</option>
                      </select>
                    </form>
                    <br/>
                    <b>Zip code</b>
                    <input className='form-control' onChange={(e) => this.handleChange(e, 'zip2')} placeholder="Zip" />
                    <br/>
                    <b>Street address</b>
                    <input className='form-control' onChange={(e) => this.handleChange(e, 'address2')} placeholder="Street address" />
                    <br/>
                  </Row>
                  <textarea className='form-control' onChange={(e) => this.handleChange(e, 'discription')} placeholder="Comments or feedback? Write them here!"></textarea>
                  <br/>
                  <Row className='align-items-baseline justify-content-center'>
                    <p className='pr-1'>Shipping address same as billing?</p>
                    <input className='form-control' onClick={() => this.toggleShippingForm()} style={{width: '2rem', height: '1rem'}} type='checkbox' checked={this.state.checked} />
                  </Row>
                  <span style={{display: this.state.nextButton}} className="btn btn-block btn-info" onClick={(e) => this.toggleForm(e)}>Next</span>
                  <hr className='w-100' style={{display: this.state.toggleHr}}/>
                </Row>
                <Row className="flex-column" style={{display: this.state.paymentForm}}>
                  <b className='text-center'>Cart: ${this.props.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b>
                  <b className='text-center'>Shipping: ${this.state.shipping.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b>
                  <hr style={{width: '50%'}}/>
                  <b className='text-center'>Total: ${this.state.combinedTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</b>
                  <hr style={{width: '35%'}}/>
                  <label className="pr-4 pb-2">
                    <b>Card details</b>
                    <CardNumberElement onChange={(e) => this.handleChange(e, 'tester')} />
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
                  <button className="btn btn-block btn-info"><b onClick={(e) => this.submit(e)} className='p-5'>Checkout (${this.state.combinedTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})</b></button>
                  <p style={{display: this.state.cardInfoValidation, textAlign: 'center', fontWeight: 'bold'}}><span class='text-danger'>*</span>Please enter card info or use a different card.</p>
                </Row>
              </form>
            </div>
          </div>
        )
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return{
        checkout: (items) => {dispatch(checkout(items))}
      }
    }

    export default connect ((state) => state, mapDispatchToProps)(injectStripe(PaymentForm));
