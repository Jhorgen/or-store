import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, correctTotalOnEmpty, subtractQuantity, addQuantity } from './../actions/cartActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


class CartItem extends Component {

  handleAddQuantity = (id, checkoutquantity) => {
    this.props.addQuantity(id, checkoutquantity);
    console.log(id);
    console.log("cart checkoutquantity:", checkoutquantity)
  }


  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }


  handleRemove = (id, items) => {
    this.props.removeItem(id, items);
  }


  render() {

    return (
      <div>
        <div className="item-img">
          <Link to={'/item/' + this.props.item.title}>
            <img src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.image}/>
          </Link>
        </div>
        <div className="item-desc">
          <span className="title">{this.props.item.title}</span>
          <p>{this.props.item.description}</p>
          <p><b>Price: ${this.props.item.price}</b></p>
          <p>
            <b>Quantity: {this.props.item.checkoutquantity}</b>
          </p>
          <div className="add-remove">
            <div className="add-remove">
              <span className="material-icons pr-3" onClick={()=>{this.handleAddQuantity(this.props.item.id, this.props.item.checkoutquantity)}}><FontAwesomeIcon icon={faArrowUp} />
            </span>
            <span className="material-icons" onClick={()=>{this.handleSubtractQuantity(this.props.item.id, this.props.item.price)}}><FontAwesomeIcon icon={faArrowDown} /></span>
          </div>
        </div>
      </div>
      <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(this.props.item.id, this.props.form.addedItems)}}>Remove</button>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id, items) => {dispatch(removeItem(id, items))},
    correctTotalOnEmpty: () => {dispatch(correctTotalOnEmpty())},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
  }
}

export default connect((state) =>state, mapDispatchToProps)(CartItem);
