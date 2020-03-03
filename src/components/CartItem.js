import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, correctTotalOnEmpty, subtractQuantity, addQuantity } from './../actions/cartActions.js'
import { Row, Col } from 'reactstrap'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


class CartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputQuantity: '',
      updateDisplay: 'none',
      value: '',
      zeroQuantityCheck: '',
      removeButtonDisplay: '',
      quantityAlert: '',
      inputRefresh: <input onClick={() => this.handleStyles(this.props.item.id)} className="mr-3 form-control" style={{width: '3rem'}} name="inputQuantity" placeholder={`${this.props.item.checkoutquantity}`} onChange={(e) => this.handleChange(e)} autoComplete='off' />
    }
  }

  addSingleQuantity = (id) => {
    let selectedIndex = this.props.item.selectedOptionIndex
    if(this.props.item.checkoutquantity - this.props.item[`option${selectedIndex}quantity`] === 0) {
      this.setState({quantityAlert: <span><FontAwesomeIcon style={{fontSize: '1.5rem', paddingLeft: '.3rem'}} icon={faExclamationTriangle} /> <b>{this.props.item[`option${selectedIndex}quantity`]}</b> in stock.</span>, removeButtonDisplay: 'none'})
      setTimeout( () => {
        this.setState({quantityAlert: '', removeButtonDisplay: ''})
      }, 750);
      console.log(this.props.item[`option${selectedIndex}quantity`] - 1);
    } else {
    this.props.addQuantity(id, selectedIndex);
    this.setState({inputRefresh: ''})
    setTimeout( () => {
      this.setState({inputRefresh: <input onClick={() => this.handleStyles(this.props.item.id)} className="mr-3 form-control" style={{width: '3rem'}} name="inputQuantity" placeholder={`${this.props.item.checkoutquantity}`} onChange={(e) => this.handleChange(e)} autoComplete='off' />})
    }, 50);
  }
  }

  subtractSingleQuantity = (id) => {
    if(this.props.item.checkoutquantity === 1) {
      this.setState({zeroQuantityCheck: <FontAwesomeIcon style={{fontSize: '1.5rem', paddingLeft: '.3rem'}} icon={faExclamationTriangle} />, removeButtonDisplay: 'none'})
      setTimeout( () => {
        this.setState({zeroQuantityCheck: '', removeButtonDisplay: ''})
      }, 450);
    } else {
      let selectedIndex = this.props.item.selectedOptionIndex
      this.props.subtractQuantity(id, selectedIndex)
      this.setState({inputRefresh: ''})
      setTimeout( () => {
        this.setState({inputRefresh: <input onClick={() => this.handleStyles(this.props.item.id)} className="mr-3 form-control" style={{width: '3rem'}} name="inputQuantity" placeholder={`${this.props.item.checkoutquantity}`} onChange={(e) => this.handleChange(e)} autoComplete='off' />})
      }, 50);
    }
  }

  handleAddQuantity = (id, inputQuantity, e) => {
    e.preventDefault()
    let selectedIndex = this.props.item.selectedOptionIndex

    if(this.props.item[`option${selectedIndex}quantity`] < inputQuantity) {
      this.setState({quantityAlert: <span><FontAwesomeIcon style={{fontSize: '1.5rem', paddingLeft: '.3rem'}} icon={faExclamationTriangle} /> <b>{this.props.item[`option${selectedIndex}quantity`]}</b> in stock.</span>, removeButtonDisplay: 'none'})
      setTimeout( () => {
        this.setState({quantityAlert: '', removeButtonDisplay: ''})
      }, 750);

    } else {
      this.setState({updateDisplay: 'none'})
      let x = inputQuantity

      for(var i = 1; i < x; i++) {
        this.props.addQuantity(id, selectedIndex);
      }
      this.setState({inputRefresh: ''})
      setTimeout( () => {
        this.setState({inputRefresh: <input onClick={() => this.handleStyles(this.props.item.id)} className="mr-3 form-control" style={{width: '3rem'}} name="inputQuantity" placeholder={`${this.props.item.checkoutquantity}`} onChange={(e) => this.handleChange(e)} autoComplete='off' />})
      }, 50);
    }
  }

  handleSubtractQuantity = (id, checkoutQuantity) => {
    let x = this.props.form.addedItems[this.props.itemid].checkoutquantity
    let selectedIndex = this.props.item.selectedOptionIndex
    // add check here. also, how does it consistently run this function before the onSubmit runs
    for(var i = 1; i < x; i++) {
      this.props.subtractQuantity(id, selectedIndex);
    }
  }

  handleRemove = (id, items) => {
    let selectedIndex = this.props.item.selectedOptionIndex;
    this.props.removeItem(id, items, selectedIndex);
  }

  handleStyles = () => {
    this.setState({updateDisplay: ''})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
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
            <form className="d-flex" onSubmit={(e) => this.handleAddQuantity(this.props.item.id, this.state.inputQuantity, e)}>
              <div className='d-flex align-items-center'>
                <span style={{fontWeight: 'bold'}} className='mr-2 text-info'>Quantity<b className='text-dark'>:</b></span>
                <div>
                  <span onClick={() => this.addSingleQuantity(this.props.item.id)} className='mr-3 cursor-toggle' style={{fontSize: '1.3rem'}}><FontAwesomeIcon icon={faAngleUp} /></span>
                  {this.state.inputRefresh}
                  <span onClick={() => this.subtractSingleQuantity(this.props.item.id)} className='mr-3 cursor-toggle' style={{fontSize: '1.3rem'}}><FontAwesomeIcon icon={faAngleDown} /></span>
                </div>
                <button onClick={() => {this.handleSubtractQuantity(this.props.item.id, this.props.item.checkoutquantity)}} style={{display: this.state.updateDisplay, fontSize: '.8rem'}} type='submit' className="btn btn-secondary mr-3">Update</button>
                <button className="btn btn-secondary" style={{fontSize: ".8rem", display: this.state.removeButtonDisplay}} onClick={()=>{this.handleRemove(this.props.item.id, this.props.form.addedItems, this.props.item.selectedOptionIndex)}}>Remove</button>
                {this.state.zeroQuantityCheck}
                {this.state.quantityAlert}
              </div>
            </form>
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
    addQuantity: (id, selectedIndex) => {dispatch(addQuantity(id, selectedIndex))},
    subtractQuantity: (id, selectedIndex) => {dispatch(subtractQuantity(id, selectedIndex))},
  }
}

export default connect((state) =>state, mapDispatchToProps)(CartItem);
