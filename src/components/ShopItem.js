import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, saveCartItemTotal } from './../actions/cartActions.js'
import { Row } from 'reactstrap';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class ShopItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addedNotification: 'none',
      add: 'none',
      defaultOption: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
      option6: '',
      option7: '',
      option8: '',
      option9: '',
      option10: '',
      selectedOption: '',
      selectedOptionIndex: '',
      addButton: '',
      outOfStock: '',
      itemPriceMin: '',
      itemPriceMax: '',
      minToMaxSymbol: '',
      selectedPrice: '',
      addDisplay: 'none'
    }
  }

  componentDidMount = () => {
    let priceCheck = []

    for(var i = 1; i < 11; i++) {
      if(this.props.item[`option${i}price`] > 0 && !null) {
        priceCheck.push(this.props.item[`option${i}price`])
        }
        if(i === 10) {
          if(Math.min(...priceCheck) === Math.max(...priceCheck)) {
            this.setState({itemPriceMin: '$' + Math.min(...priceCheck), minToMaxSymbol: ''})
          } else {
            this.setState({itemPriceMin: '$' + Math.min(...priceCheck), itemPriceMax: '$' + Math.max(...priceCheck), minToMaxSymbol: <span>~</span>})
          }
      }
    }

    this.setState({defaultOption: <option style={{display: 'none'}} value={'default'}>Select an option</option>})

    this.props.item.option1 === '' ? this.setState({option1: ''}) : this.props.item.option1quantity === 0 ? this.setState({option1: <option value={'1'}>{this.props.item.option1} (Out of stock)</option>}) : this.setState({option1: <option value={'1'}>{this.props.item.option1}</option> })

    this.props.item.option2 === '' ? this.setState({option2: ''}) : this.props.item.option2quantity === 0 ? this.setState({option2: <option value={'2'}>{this.props.item.option2}</option>}) : this.setState({option2: <option value={'2'}>{this.props.item.option2}</option> })

    this.props.item.option3 === '' ? this.setState({option3: ''}) : this.props.item.option3quantity === 0 ? this.setState({option3: <option value={'3'}>{this.props.item.option3}</option>}) : this.setState({option3: <option value={'3'}>{this.props.item.option3}</option> })

    this.props.item.option4 === '' ? this.setState({option4: ''}) : this.props.item.option4quantity === 0 ? this.setState({option4: <option value={'4'}>{this.props.item.option4}</option>}) : this.setState({option4: <option value={'4'}>{this.props.item.option4}</option> })

    this.props.item.option5 === '' ? this.setState({option5: ''}) : this.props.item.option5quantity === 0 ? this.setState({option5: <option value={'5'}>{this.props.item.option5}</option>}) : this.setState({option5: <option value={'5'}>{this.props.item.option5}</option> })

    this.props.item.option6 === '' ? this.setState({option6: ''}) : this.props.item.option6quantity === 0 ? this.setState({option6: <option value={'6'}>{this.props.item.option6}</option>}) : this.setState({option6: <option value={'6'}>{this.props.item.option6}</option> })

    this.props.item.option7 === '' ? this.setState({option7: ''}) : this.props.item.option7quantity === 0 ? this.setState({option7: <option value={'7'}>{this.props.item.option7}</option>}) : this.setState({option7: <option value={'7'}>{this.props.item.option7}</option> })

    this.props.item.option8 === '' ? this.setState({option8: ''}) : this.props.item.option8quantity === 0 ? this.setState({option8: <option value={'8'}>{this.props.item.option8}</option>}) : this.setState({option8: <option value={'8'}>{this.props.item.option8}</option> })

    this.props.item.option9 === '' ? this.setState({option9: ''}) : this.props.item.option9quantity === 0 ? this.setState({option9: <option value={'9'}>{this.props.item.option9}</option>}) : this.setState({option9: <option value={'9'}>{this.props.item.option9}</option> })

    this.props.item.option10 === '' ? this.setState({option10: ''}) : this.props.item.option10quantity === 0 ? this.setState({option10: <option value={'10'}>{this.props.item.option10}</option>}) : this.setState({option10: <option value={'10'}>{this.props.item.option10}</option> })
  }

  handleAddClick = (id) => {
    let selected = this.state.selectedOption;
    let selectedIndex = this.state.selectedOptionIndex;
    let price = this.props.item[`option${selectedIndex}price`]
    let checkCart

    for(var i = 0; i < this.props.form.addedItems.length; i++) {
      if(selectedIndex === this.props.form.addedItems[i].selectedOptionIndex && id === this.props.form.addedItems[i].id)

      if(this.props.form.addedItems[i][`option${selectedIndex}quantity`] - this.props.form.addedItems[i].checkoutquantity <= 0) {
        checkCart = 'false'
      }
    }

    if(this.props.item[`option${selectedIndex}quantity`] === 0 || this.props.form.addedItems.length >= 29 || checkCart === 'false') {

      if(this.props.item[`option${selectedIndex}quantity`] === 0) {
        window.location.reload();
      }

      if(this.props.form.addedItems.length >= 29) {
        this.setState({addButton:<b className='mb-2'>Cart is limited to 30 individual items.</b>, selectedPrice: '' })
        setTimeout( () => {
          this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-3' onClick={() => this.handleAddClick(this.props.item.id)}>Add to cart</button>})

          this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.props.item[`option${this.state.selectedOptionIndex}price`]}</b>})
        }, 750);
      } else {
        this.setState({addButton:<b className='mb-2'>Only {this.props.item[`option${selectedIndex}quantity`]} in stock.</b>, selectedPrice: '' })
        setTimeout( () => {
          this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-3' onClick={() => this.handleAddClick(this.props.item.id)}>Add to cart</button>})

          this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.props.item[`option${this.state.selectedOptionIndex}price`]}</b>})
        }, 750);
      }

    } else {
      this.props.addToCart(id, selected, selectedIndex, price);
      this.props.saveCartItemTotal();
      this.setState({addButton:<b className='mb-2'>Added to cart</b>, selectedPrice: '' })
      setTimeout( () => {
        this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-3' onClick={() => this.handleAddClick(this.props.item.id)}>Add to cart</button>})

        this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.props.item[`option${this.state.selectedOptionIndex}price`]}</b>})
      }, 450);
    }
  }

  onChange = (e, et) => {
    console.log('selectedoption:', et.selectedOptions[0].text, 'selectedOptionIndex:', e);
    this.setState({selectedOption: et.selectedOptions[0].text, selectedOptionIndex : e})

    if(et.selectedOptions[0].text.includes('(Out of stock)')) {
      this.setState({outOfStock: <p className='mt-3'>This option is out of stock. Please select another option.</p>, addButton: ''})
    } else {
      this.setState({selectedPrice: this.props.item[`option${e}price`]})
      setTimeout( () => {
      this.setState({addButton: <button style={{width: '65%'}} className='btn btn-secondary mt-3 mb-2 form-control' onClick={() => this.handleAddClick(this.props.item.id)}>Add to cart <span style={{fontWeight: 'bold'}}>({this.state.selectedPrice})</span></button>})
    },  1);
    }
  }

  toggleAddDisplay = () => {
    this.setState({addDisplay: ''})
  }

  render () {
    return (
      <div className="card m-3 test-hover" key={this.props.item.id} >
        <div style={{margin: '10px'}} className="card-image text-center item-view-hover">
          <Link to={this.props.item.brand + '/' + this.props.item.title.split(' ').join('')}>
            <img style={{height: '13rem', width: '100%'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.brand + this.props.item.title} title={this.props.item.brand + ' ' + this.props.item.title} />
            <div className='mt-3 mb-3'><span className="card-title" style={{textShadow: '1px 1px 1px #545b62', fontSize: '16px'}}>{this.props.item.brand} {this.props.item.title}</span></div>
          </Link>
          <hr style={{width: '70%', background: 'lightcoral !important'}}/>
          <Link to={this.props.item.brand + '/' + this.props.item.title.split(' ').join('')} style={{color: 'black'}}>
          <FontAwesomeIcon style={{fontSize: '1.6rem'}} icon={faEye} />
          </Link>
          <FontAwesomeIcon className='cursor-toggle' style={{fontSize: '1.6rem', marginLeft: '2.4rem'}} icon={faCartPlus} onClick={this.toggleAddDisplay} />
          <hr style={{width: '50%', background: 'lightcoral !important'}}/>
          <Row className='justify-content-center mb-1 mt-n3'>
          <form className='mt-3' style={{display: this.state.addDisplay}}>
            <select className='form-control' ref="selectMark"
              onChange={(e) => this.onChange(e.target.value, e.target)}>
              {this.state.defaultOption}
              {this.state.option1}
              {this.state.option2}
              {this.state.option3}
              {this.state.option4}
              {this.state.option5}
              {this.state.option6}
              {this.state.option7}
              {this.state.option8}
              {this.state.option9}
              {this.state.option10}
            </select>
          </form>
          <span style={{width: '70%'}}>{this.state.outOfStock}</span>
          {this.state.addButton}
        </Row>
        <span style={{fontSize: '15.5px', fontWeight: 'bold'}} className='text-center'>{this.state.itemPriceMin} {this.state.minToMaxSymbol} {this.state.itemPriceMax}</span>
        <div className='mb-2'>
        <span style={{display: this.state.addedNotification}}><b>Added to cart</b></span>
          </div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, selected, selectedIndex, price) => {(dispatch(addToCart(id, selected, selectedIndex, price)))},
    saveCartItemTotal: () => {(dispatch(saveCartItemTotal()))},
  }
}

export default connect((state) => state, mapDispatchToProps)(ShopItem);
