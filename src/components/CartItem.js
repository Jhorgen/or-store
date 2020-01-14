import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, correctTotalOnEmpty, subtractQuantity, addQuantity } from './../actions/cartActions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'


class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemQuantity: '',
      updateDisplay: 'none',
      readOnly: 'readOnly'
    }
  }

  handleAddQuantity = (id, checkoutquantity, itemQuantity, e) => {
    e.preventDefault()
    this.setState({updateDisplay: 'none', readOnly: 'readOnly'})
    let x = itemQuantity -1

    for(var i = 0; i < x; i++) {
      this.props.addQuantity(id, checkoutquantity);
    }
    console.log(id);
    console.log("cart checkoutquantity:", checkoutquantity)
  }


  handleSubtractQuantity = (id) => {
    this.setState({updateDisplay: '', readOnly: ''})
    console.log(this.props.itemid);
    let x = this.props.form.addedItems[this.props.itemid].checkoutquantity - 1

    for(var i = 0; i < x; i++) {
      this.props.subtractQuantity(id);
    }
  }


  handleRemove = (id, items) => {
    this.props.removeItem(id, items);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.itemQuantity);
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
            <p className="text-center"><b>Price:<br/> ${this.props.item.price}</b></p>
          </Col>

          <Col>
            <p className="text-center"><b>Qty:<br/>{this.props.item.checkoutquantity}</b></p>
          </Col>

          <form className="d-flex" onSubmit={(e) => this.handleAddQuantity(this.props.item.id, this.props.item.checkoutquantity, this.state.itemQuantity, e)}>

          <input style={{width: '3rem'}} className="mr-3 form-control" name="itemQuantity" placeholder={`${this.props.item.checkoutquantity}`} onClick={() => {this.handleSubtractQuantity(this.props.item.id, this.props.item.price)}} onChange={(e) => this.handleChange(e)} readOnly={this.state.readOnly} />


            <button style={{display: this.state.updateDisplay, fontSize: '.8rem'}} type='submit' className="pr-3 btn btn-secondary">Update</button>

          </form>

            <Col>
              <button className="btn btn-secondary" style={{fontSize: ".8rem"}} onClick={()=>{this.handleRemove(this.props.item.id, this.props.form.addedItems)}}>Remove</button>
            </Col>
          </Row>
          <hr/>
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
