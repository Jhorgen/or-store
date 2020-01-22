import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class AdminForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.item.category,
      brand: this.props.item.brand,
      title: this.props.item.title,
      description: this.props.item.description,
      option1: this.props.item.option1,
      option2: this.props.item.option2,
      option3: this.props.item.option3,
      option4: this.props.item.option4,
      option5: this.props.item.option5,
      option6: this.props.item.option6,
      option7: this.props.item.option7,
      option8: this.props.item.option8,
      option9: this.props.item.option9,
      option10: this.props.item.option10,
      option1option1quantity: this.props.item.option1quantity,
      price: this.props.item.price,
      saleprice: this.props.item.saleprice,
      image1: this.props.item.image1,
      image2: this.props.item.image2,
      image3: this.props.item.image3,
      image4: this.props.item.image4,
      image5: this.props.item.image5,
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    console.log('test');
    const item = {
      category: this.state.category,
      brand: this.state.brand,
      title: this.state.title,
      description: this.state.description,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
      option5: this.state.option5,
      option6: this.state.option6,
      option7: this.state.option7,
      option8: this.state.option8,
      option9: this.state.option9,
      option10: this.state.option10,
      option1quantity: this.state.option1quantity,
      price: this.state.price,
      saleprice: this.state.saleprice,
      image1: this.state.image1,
      image2: "test",
      image3: "test",
      image4: "test",
      image5: "test",
      review: "",
      rating: undefined,
      checkoutoption1quantity: 1
    }
    axios.put (
      `http://localhost:3000/api/v1/products/${this.props.item.id}`,
      {
        product: item
      })
      .then(response => {
        console.log('response:', response);
        this.props.updateItem(response.data)
      })
      .catch(error => {
        console.log('error:', error);
      })
    }


    render() {
      return (
        <div>
          <form onBlur={this.handleBlur}>
          <div className="card m-3">
            <div className="card-image text-center m-3">
              <Link to={'/item/' + this.props.item.title.split(' ').join('')} onClick={() => {this.checkLink(this.props.item)}}>
                <img style={{height: '13rem'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.title}/>
              </Link>
              <div><span className="card-title">{this.props.item.title}</span></div>
              <hr/>
            </div>
            <div className="card-content">
            <input className='input'
            name="category" placeholder='Enter a Category' value={this.state.category} onChange={this.handleInput} ref={this.props.titleRef}  />

            <input className='input'
            name="brand" placeholder='Enter a Brand' value={this.state.brand} onChange={this.handleInput}  />

            <input className='input'
            name="title" placeholder='Enter a Title' value={this.state.title} onChange={this.handleInput}  />

            <input className='input'
            name="description" placeholder='Enter a Description' value={this.state.description} onChange={this.handleInput}  />

            <input className='input'
            name="option1" placeholder='Enter Color #1' value={this.state.option1} onChange={this.handleInput}  />

            <input className='input'
            name="option2" placeholder='Enter Color #2' value={this.state.option2} onChange={this.handleInput}  />

            <input className='input'
            name="option3" placeholder='Enter Color #3' value={this.state.option3} onChange={this.handleInput}  />

            <input className='input'
            name="option4" placeholder='Enter Color #4' value={this.state.option4} onChange={this.handleInput}  />

            <input className='input'
            name="option5" placeholder='Enter Color #5' value={this.state.option5} onChange={this.handleInput}  />

            <input className='input'
            name="option6" placeholder='Enter Size #1' value={this.state.option6} onChange={this.handleInput}  />

            <input className='input'
            name="option7" placeholder='Enter Size #2' value={this.state.option7} onChange={this.handleInput}  />

            <input className='input'
            name="option8" placeholder='Enter Size #3' value={this.state.option8} onChange={this.handleInput}  />

            <input className='input'
            name="option9" placeholder='Enter Size #4' value={this.state.option9} onChange={this.handleInput}  />

            <input className='input'
            name="option10" placeholder='Enter Size #5' value={this.state.option10} onChange={this.handleInput}  />

            <input className='input'
            name="option1quantity" placeholder='Enter Quantity' value={this.state.option1quantity} onChange={this.handleInput}  />

            <input className='input'
            name="price" placeholder='Enter Price' value={this.state.price} onChange={this.handleInput}  />

            <input className='input'
            name="image1" placeholder='Enter Image #1' value={this.state.image1} onChange={this.handleInput}  />

            <input className='input'
            name="image2" placeholder='Enter Image #2' value={this.state.image2} onChange={this.handleInput}  />

            <input className='input'
            name="image3" placeholder='Enter Image #3' value={this.state.image3} onChange={this.handleInput}  />

            <input className='input'
            name="image4" placeholder='Enter Image #4' value={this.state.image4} onChange={this.handleInput}  />

            <input className='input'
            name="image5" placeholder='Enter Image #5' value={this.state.image5} onChange={this.handleInput}  />

            </div>
            <button onClick={() => this.deleteItem(this.props.item.id)}>Delete</button>
          </div>
          </form>
        </div>

      )
    }
  }

  export default AdminForm;
