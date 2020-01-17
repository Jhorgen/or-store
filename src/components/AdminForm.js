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
      color1: this.props.item.color1,
      color2: this.props.item.color2,
      color3: this.props.item.color3,
      color4: this.props.item.color4,
      color5: this.props.item.color5,
      size1: this.props.item.size1,
      size2: this.props.item.size2,
      size3: this.props.item.size3,
      size4: this.props.item.size4,
      size5: this.props.item.size5,
      quantity: this.props.item.quantity,
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
      color1: this.state.color1,
      color2: this.state.color2,
      color3: this.state.color3,
      color4: this.state.color4,
      color5: this.state.color5,
      size1: this.state.size1,
      size2: this.state.size2,
      size3: this.state.size3,
      size4: this.state.size4,
      size5: this.state.size5,
      quantity: this.state.quantity,
      price: this.state.price,
      saleprice: this.state.saleprice,
      image1: this.state.image1,
      image2: "test",
      image3: "test",
      image4: "test",
      image5: "test",
      review: "",
      rating: undefined,
      checkoutquantity: 1
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
            name="color1" placeholder='Enter Color #1' value={this.state.color1} onChange={this.handleInput}  />

            <input className='input'
            name="color2" placeholder='Enter Color #2' value={this.state.color2} onChange={this.handleInput}  />

            <input className='input'
            name="color3" placeholder='Enter Color #3' value={this.state.color3} onChange={this.handleInput}  />

            <input className='input'
            name="color4" placeholder='Enter Color #4' value={this.state.color4} onChange={this.handleInput}  />

            <input className='input'
            name="color5" placeholder='Enter Color #5' value={this.state.color5} onChange={this.handleInput}  />

            <input className='input'
            name="size1" placeholder='Enter Size #1' value={this.state.size1} onChange={this.handleInput}  />

            <input className='input'
            name="size2" placeholder='Enter Size #2' value={this.state.size2} onChange={this.handleInput}  />

            <input className='input'
            name="size3" placeholder='Enter Size #3' value={this.state.size3} onChange={this.handleInput}  />

            <input className='input'
            name="size4" placeholder='Enter Size #4' value={this.state.size4} onChange={this.handleInput}  />

            <input className='input'
            name="size5" placeholder='Enter Size #5' value={this.state.size5} onChange={this.handleInput}  />

            <input className='input'
            name="quantity" placeholder='Enter Quantity' value={this.state.quantity} onChange={this.handleInput}  />

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
