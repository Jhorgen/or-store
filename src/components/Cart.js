import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './../actions/cartActions.js'
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

    if(this.props.addedItems.length > 0) {
      console.log('cart checkout:', this.props.addedItems[0].checkoutquantity);
    } else {
      console.log('nada');
    }

  }

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id, checkoutquantity) => {
    this.props.addQuantity(id);
    console.log(id);
    console.log("cart checkoutquantity:", checkoutquantity)


  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  testerTest = (addedItems) => {
    console.log(addedItems);
  }


  render() {

    let addedItems = this.props.addedItems.length ?
    (
      this.props.addedItems.map(item => {
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
                <span className="material-icons pr-3" onClick={()=>{this.handleAddQuantity(item.id, item.checkoutquantity)}}><FontAwesomeIcon icon={faArrowUp} />
                </span>
                <span className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id, item.price)}}><FontAwesomeIcon icon={faArrowDown} /></span>
              </div>
              <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
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
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
  }
}

export default connect((state)=>state, mapDispatchToProps)(Cart)
