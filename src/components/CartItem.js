import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, correctTotalOnEmpty, subtractQuantity, addQuantity } from './../actions/cartActions.js'
import { Row, Col } from 'reactstrap'


class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemQuantity: '',
      updateDisplay: 'none',
      value: ''
    }
  }

  handleAddQuantity = (id, checkoutquantity, itemQuantity, e) => {
    e.preventDefault()
    this.setState({updateDisplay: 'none'})
    let x = itemQuantity -1

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
    let selectedIndex = this.props.item.selectedOptionIndex;
    console.log(selectedIndex);
    this.props.removeItem(id, items, selectedIndex);
  }

  handleStyles = () => {
    this.setState({updateDisplay: ''})
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
        <Row className="align-items-center text-center">

          <Col xs='2'>
            <Link to={'/item/' + this.props.item.title}>
              <img style={{height: "6rem"}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.image}/>
            </Link>
          </Col>

          <Col xs='4'>
            <span className="title" style={{fontSize: '1rem'}}><b className='text-dark'>{this.props.item.brand}</b><br/><hr/> {this.props.item.title}<br/><hr/> <span className='text-dark'>{this.props.item.selectedoption}</span></span>
          </Col>

          <Col xs='2'>
            <p className="text-center"><b>Price:<br/> ${this.props.item.price}</b></p>
          </Col>

          <Col xs='2'>
          <form className="d-flex" onSubmit={(e) => this.handleAddQuantity(this.props.item.id, this.props.item.checkoutquantity, this.state.itemQuantity, e)}>
            <div className='d-flex align-items-center'>
              <span className='mr-2'>Quantity:</span> <input onClick={() => this.handleStyles(this.props.item.id)} style={{width: '3rem'}} className="mr-3 form-control" name="itemQuantity" placeholder={`${this.props.item.checkoutquantity}`} onChange={(e) => this.handleChange(e)} />
            </div>

            <button onClick={() => {this.handleSubtractQuantity(this.props.item.id, this.props.item.price)}} style={{display: this.state.updateDisplay, fontSize: '.8rem'}} type='submit' className="pr-3 btn btn-secondary">Update</button>
          </form>
          </Col>

          <Col xs='2'>
            <button className="btn btn-secondary" style={{fontSize: ".8rem"}} onClick={()=>{this.handleRemove(this.props.item.id, this.props.form.addedItems, this.props.item.selectedOptionIndex)}}>Remove</button>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id, items, selectedIndex) => {dispatch(removeItem(id, items, selectedIndex))},
    correctTotalOnEmpty: () => {dispatch(correctTotalOnEmpty())},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
  }
}

export default connect((state) =>state, mapDispatchToProps)(CartItem);
