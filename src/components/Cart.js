import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity, correctTotalOnEmpty, quantityAdjust } from './../actions/cartActions.js'
import Recipe from './Recipe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeBlah: ''
    }
  }

  componentDidMount = () => {
    if(this.props.form.addedItems.length <= 0) {
      console.log('cart checkout:');
      this.props.correctTotalOnEmpty();
    } else {
      console.log('nada');
    }

  }

  handleRemove = (id, items) => {
    this.props.removeItem(id, items);
  }

  handleAddQuantity = (id, checkoutquantity) => {
    this.props.addQuantity(id);
    console.log(id);
    console.log("cart checkoutquantity:", checkoutquantity)


  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  handleQuantity = (e, id) => {
    e.preventDefault()
    this.props.correctTotalOnEmpty();
    console.log(this.userInput.value);
    console.log(id);
    this.props.quantityAdjust(this.userInput.value, id)
  }


  render() {
    let input

    let addedItems = this.props.form.addedItems.length ?
    (
      this.props.form.addedItems.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <Link to={'/item/' + item.title}>
                <img src={ require(`./../images/${item.image1}.jpg`)} alt={item.image}/>
              </Link>
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.description}</p>
              <p><b>Price: ${item.price}</b></p>
              <p>
                <b>Quantity: {item.checkoutquantity}</b>
              </p>
              <div className="add-remove">
                <form onSubmit={(e) => {this.handleQuantity(e, item.id)}}>
                  <input type="text" ref={(input) => this.userInput = input} />
                  <button>Test</button>
                </form>
                <span className="material-icons pr-3" onClick={()=>{this.handleAddQuantity(item.id, item.checkoutquantity)}}><FontAwesomeIcon icon={faArrowUp} />
              </span>
              <span className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id, item.price)}}><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id, this.props.form.addedItems)}}>Remove</button>
          </div>
        </li>
      )
    })
  )
  :
  (
    <div>
      <p>Nothing.</p>
    </div>
  )

  return (
    <div className="container">
      <div className="cart">
        <h5 onClick={() => this.testerTest(addedItems)}> Cart:</h5>
        <ul className="collection">
          {addedItems}
        </ul>
      </div>
      <Recipe />
    </div>
  )
}
}


const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id, items) => {dispatch(removeItem(id, items))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
    correctTotalOnEmpty: () => {dispatch(correctTotalOnEmpty())},
    quantityAdjust: (input, id) => {dispatch(quantityAdjust(input, id))}
  }
}

export default connect((state)=>state, mapDispatchToProps)(Cart)
