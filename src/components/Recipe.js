import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recipe extends Component{

  componentWillMount = () => {
    console.log('mount:', this.props.total);

    console.log("result:", );

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



  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item"><b>Total: ${this.props.form.total}</b></li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
      </div>
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
