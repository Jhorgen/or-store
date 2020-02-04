import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from './../actions/cartActions.js'


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
      inStock: '',
      showSelect: ''

    }
  }

  componentDidMount = () => {
    console.log(this.props.item.option1quantity)


    this.setState({defaultOption: <option value={'default'}>Options</option>})
  this.setState({option1: <option value={'1'}>{this.props.item.option1}</option> })
    this.props.item.option2quantity === 0 ? this.setState({option2: ''}) : this.setState({option2: <option value={'2'}>{this.props.item.option2}</option> })
    this.props.item.option3quantity === 0 ? this.setState({option3: ''}) : this.setState({option3: <option value={'3'}>{this.props.item.option3}</option> })
    this.props.item.option4quantity === 0 ? this.setState({option4: ''}) : this.setState({option4: <option value={'4'}>{this.props.item.option4}</option> })
    this.props.item.option5quantity === 0 ? this.setState({option5: ''}) : this.setState({option5: <option value={'5'}>{this.props.item.option5}</option> })
    this.props.item.option6quantity === 0 ? this.setState({option6: ''}) : this.setState({option6: <option value={'6'}>{this.props.item.option6}</option> })
    this.props.item.option7quantity === 0 ? this.setState({option7: ''}) : this.setState({option7: <option value={'7'}>{this.props.item.option7}</option> })
    this.props.item.option8quantity === 0 ? this.setState({option8: ''}) : this.setState({option8: <option value={'8'}>{this.props.item.option8}</option> })
    this.props.item.option9quantity === 0 ? this.setState({option9: ''}) : this.setState({option9: <option value={'9'}>{this.props.item.option9}</option> })
    this.props.item.option10quantity === 0 ? this.setState({option10: ''}) : this.setState({option10: <option value={'10'}>{this.props.item.option10}</option> })

    this.props.item.option1quantity === 0 && this.props.item.option2quantity === 0 && this.props.item.option3quantity === 0 && this.props.item.option4quantity === 0 && this.props.item.option5quantity === 0 && this.props.item.option6quantity === 0 && this.props.item.option7quantity === 0 && this.props.item.option8quantity === 0 && this.props.item.option9quantity === 0 && this.props.item.option10quantity === 0 ? this.setState({showSelect: 'none', inStock: <span className='btn btn-danger mt-2'>Out of stock</span>}) : this.setState({inStock: <button style={{display: ''}} className='btn btn-secondary mt-3' onClick={() => this.handleAddClick(this.props.item.id)}>Add to cart</button>})

  }

  handleAddClick = (id) => {

  if(this.state.selectedOptionIndex === '') {
    console.log('test');
    let selectedIndex = '1'
    let selected = this.props.item.option1
    let price = this.props.item.option1price
    this.props.addToCart(id, selected, selectedIndex, price);
  } else {
    let selected = this.state.selectedOption;
    let selectedIndex = this.state.selectedOptionIndex;
    let price = this.props.item[`option${selectedIndex}price`]
    console.log(price);
    this.props.addToCart(id, selected, selectedIndex, price);
  }
    this.setState({addedNotification: ''})
    setTimeout( () => {
      this.setState({addedNotification: 'none'})
    }, 450);
  }

  showAdd = () => {
    this.setState({add: ''})
  }

  hideAdd = () => {
    this.setState({add: 'none'})
  }

  onChange = (e, et) => {
    console.log('selectedoption:', et.selectedOptions[0].text, 'selectedOptionIndex:', e);
    this.setState({selectedOption: et.selectedOptions[0].text, selectedOptionIndex : e})

  }

  render () {
    return (
      <div className="card m-3 test-hover" key={this.props.item.id} >
        <div className="card-image text-center item-view-hover">
          <Link to={'/item/' + this.props.item.title.split(' ').join('')}>
            <img style={{height: '13rem', width: '100%'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.brand + this.props.item.title} title={this.props.item.brand + ' ' + this.props.item.title} />
            <div className='mt-3'><span className="card-title">{this.props.item.brand} {this.props.item.title}</span></div>
          </Link>
          <form className='mt-3' style={{display: this.state.showSelect}}>
            <select ref="selectMark"
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
        <div>


            {this.state.inStock}<br/>


            <span style={{display: this.state.addedNotification}}><b>Added to cart</b></span>
          </div>
          <hr/>
        </div>
        <div className="card-content m-2 mt-n2">
          <p>{this.props.item.description}</p>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, selected, selectedIndex, price) => {(dispatch(addToCart(id, selected, selectedIndex, price)))}
  }
}

export default connect((state) => state, mapDispatchToProps)(ShopItem);
