import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, correctTotalOnEmpty, subtractQuantity, addQuantity } from './../actions/cartActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'


class CartItem extends Component {

  handleAddQuantity = (id, checkoutquantity) => {
    let x = 4

    for(var i = 0; i < x; i++) {
      this.props.addQuantity(id, checkoutquantity);
    }
    console.log(id);
    console.log("cart checkoutquantity:", checkoutquantity)
  }


  handleSubtractQuantity = (id) => {
    console.log(this.props.itemid);
    let x = this.props.form.addedItems[this.props.itemid].checkoutquantity - 1

    for(var i = 0; i < x; i++) {
      this.props.subtractQuantity(id);
    }
  }


  handleRemove = (id, items) => {
    this.props.removeItem(id, items);
  }

  render() {

    return (
      <div>
        <Row className="align-items-center">

          <Col>
            <Link to={'/item/' + this.props.item.title}>
              <img style={{height: "5rem"}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.image}/>
            </Link>
          </Col>

          <Col>
          <span className="title">{this.props.item.title}</span>
          </Col>

          <Col>
          <p><b>Price: ${this.props.item.price}</b></p>
          </Col>

          <Col>
          <p><b>Quantity: {this.props.item.checkoutquantity}</b></p>
          </Col>

          <Col>
          <span className="material-icons pr-3" onClick={()=>{this.handleAddQuantity(this.props.item.id, this.props.item.checkoutquantity)}}><FontAwesomeIcon icon={faArrowUp} />
        </span>
        <span className="material-icons" onClick={()=>{this.handleSubtractQuantity(this.props.item.id, this.props.item.price)}}><FontAwesomeIcon icon={faArrowDown} /></span>
        </Col>

        <Col>
        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(this.props.item.id, this.props.form.addedItems)}}>Remove</button>
        </Col>
      </Row>
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
