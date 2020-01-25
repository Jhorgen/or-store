import React, { Component } from 'react'
import { Row, Button, Col } from 'reactstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import AdminForm from './AdminForm'
import AdminItem from './AdminItem.js'
import update from 'immutability-helper';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      correct: true,
      incorrect: '',
      display: false,
      items: [],
      editingitemId: null,
      notification: '',
      itemForm: '',
      category: '',
      brand: '',
      title: '',
      description: '',
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
      option1quantity: '',
      option2quantity: '',
      option3quantity: '',
      option4quantity: '',
      option5quantity: '',
      option6quantity: '',
      option7quantity: '',
      option8quantity: '',
      option9quantity: '',
      option10quantity: '',
      price: '',
      saleprice: '',
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: ''
    }
  }

  ComponentDidMount = () => {
    console.log('Mount');
    axios.get(`http://localhost:3000/api/v1/products/`)
    .then(response => {
      this.setState({items: response.data})
    })
    .catch(error => console.log(error))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
    axios.get(`http://localhost:3000/api/v1/products/`)
    .then(response => {
      this.setState({items: response.data})
    })
    .catch(error => console.log(error))
    console.log('A user was submitted: ' + this.state.user);
    console.log('A password was submitted: ' + this.state.password);
    event.preventDefault();
    if(this.state.user === "test" && this.state.password === "test") {
      this.setState({correct: false})
    } else {
      console.log('false');
      this.setState({incorrect: <h4>Incorrect login information.</h4>})
      setTimeout( () => {
        this.setState({incorrect: ''})
      }, 500);
    }
  }

  loadItems = () => {
    axios.get(`http://localhost:3000/api/v1/products/`)
    .then(response => {
      this.setState({items: response.data})
    })
    .catch(error => console.log(error))
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})

    this.setState({updated: <span onClick={() => this.postUpdate()} className='btn btn-info btn-block mb-3 ml-4 mt-2'>Update</span>})
  }

  addItemForm = () => {
    this.setState({items: []})
    this.setState({itemForm: <form onSubmit={this.addNewItem}>
    <div className='d-flex align-items-baseline'>
      <Col>
      <Row className='m-1'>
        <span className='text-primary m-1'>Category:</span>
        <input className='input' name="category" placeholder='Enter Category' value={this.state.value} onChange={this.handleInput} ref={this.props.titleRef} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Brand:</span>
        <input className='input' name="brand" placeholder='Enter Brand' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Title:</span> <input className='input'
          name="title" placeholder='Enter Title' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Description:</span> <input className='input'
          name="description" placeholder='Enter Description' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Price:</span>
        <input className='input' name="price" placeholder='Enter Price' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Sale price:</span>
        <input className='input' name="saleprice" placeholder='Sale price' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <span className='text-primary m-1'>Option 1:</span>
        <input className='input' name="option1" placeholder='Enter Option 1' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 2:</span>
        <input className='input' name="option2" placeholder='Enter Option 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 3:</span>
        <input className='input' name="option3" placeholder='Enter Option 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 4:</span>
        <input className='input' name="option4" placeholder='Enter Option 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 5:</span>
        <input className='input' name="option5" placeholder='Enter Option 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 6:</span>
        <input className='input' name="option6" placeholder='Enter Option 6' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 7:</span>
        <input className='input' name="option7" placeholder='Enter Option 7' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 8:</span>
        <input className='input' name="option8" placeholder='Enter Option 8' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 9:</span>
        <input className='input' name="option9" placeholder='Enter Option 9' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 10:</span>
        <input className='input' name="option10" placeholder='Enter Option 10' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <span className='text-primary m-1'>Option 1 Qty:</span>
        <input className='input' name="option1quantity" placeholder='Enter Quantity (Option 1)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 2 Qty:</span>
        <input className='input' name="option2quantity" placeholder='Enter Quantity (Option 2)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 3 Qty:</span>
        <input className='input' name="option3quantity" placeholder='Enter Quantity (Option 3)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 4 Qty:</span>
        <input className='input' name="option4quantity" placeholder='Enter Quantity (Option 4)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 5 Qty:</span>
        <input className='input' name="option5quantity" placeholder='Enter Quantity (Option 5)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 6 Qty:</span>
        <input className='input' name="option6quantity" placeholder='Enter Quantity (Option 6)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 7 Qty:</span>
        <input className='input' name="option7quantity" placeholder='Enter Quantity (Option 7)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 8 Qty:</span>
        <input className='input' name="option8quantity" placeholder='Enter Quantity (Option 8)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 9 Qty:</span>
        <input className='input' name="option9quantity" placeholder='Enter Quantity (Option 9)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Option 10 Qty:</span>
        <input className='input' name="option10quantity" placeholder='Enter Quantity (Option 10)' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <span className='text-primary m-1'>Image 1:</span>
        <input className='input' name="image1" placeholder='Enter Image 1' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Image 2:</span>
        <input className='input' name="image2" placeholder='Enter Image 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Image 3:</span>
        <input className='input' name="image3" placeholder='Enter Image 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Image 4:</span>
        <input className='input' name="image4" placeholder='Enter Image 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <span className='text-primary m-1'>Image 5:</span>
        <input className='input' name="image5" placeholder='Enter Image 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

    </Col>


  </div>
  <Row>
      <input className='btn btn-success' type='submit'/>
      </Row>


  </form>})
  }

  addNewItem() {

    axios.post(
      'http://localhost:3000/api/v1/products/',
      { product:
        {
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
          selectedOptionIndex: "",
          option1quantity: this.state.option1quantity,
          option2quantity: this.state.option2quantity,
          option3quantity: this.state.option3quantity,
          option4quantity: this.state.option4quantity,
          option5quantity: this.state.option5quantity,
          option6quantity: this.state.option6quantity,
          option7quantity: this.state.option7quantity,
          option8quantity: this.state.option8quantity,
          option9quantity: this.state.option9quantity,
          option10quantity: this.state.option10quantity,
          price: this.state.price,
          saleprice: this.state.saleprice,
          image1: this.state.image1,
          image2: this.state.image2,
          image3: this.state.image3,
          image4: this.state.image4,
          image5: this.state.image5,
          rating: undefined,
          checkoutquantity: 1
        }
      }
    )
    .then(response => {
      console.log(response, response.option1)

    })
    .catch(error => console.log(error))
  }

  updateItem = (item) => {
    const itemIndex = this.state.items.findIndex(x => x.id === item.id)
    const items = update(this.state.items, {
      [itemIndex]: { $set: item }
    })
    this.setState({items: items, notification: 'All changes saved'})
  }

  deleteItem = (id) => {
    axios.delete(`http://localhost:3000/api/v1/products/${id}`)
    .then(response => {
      const itemIndex = this.state.items.findIndex(x => x.id === id)
      const items = update(this.state.items, { $splice: [[itemIndex, 1]]})
      this.setState({items: items})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  enableEditing = (id) => {
    console.log("editingItemId:", this.state.editingitemId);
    this.setState({editingitemId: id},
      () => { this.title.focus() })
    }

    render() {
      let admin = this.state.correct ?
      (
        <div>
          <form onSubmit={this.handleSubmit}>
            <Row className="justify-content-center align-items-center">
              <label>
                <span className="pr-2"><b>Username:</b></span>
                <input className="mr-2" type="text" value={this.state.value} name={"user"} onChange={this.handleChange} />
              </label>
              <label>
                <span className="pr-2"><b>Password:</b></span>
                <input className="mr-2" type="text" value={this.state.value} name={"password"} onChange={this.handleChange} />
              </label>
              <Button color="info" size="lg" type="submit" value="Submit">Login</Button>
            </Row>
            <Row className="justify-content-center">
              <span className="mt-3">{this.state.incorrect}</span>
            </Row>
          </form>
        </div>
      )
      :
      (
        <div>
          <Row className="justify-content-around">
            <Button onClick={() =>this.loadItems()} color="info" size="lg">Edit/Delete inventory</Button>
            <Button onClick={() =>this.addItemForm()} color="info" size="lg">Add item</Button>
            <Button onClick={() =>this.loadItems()} color="info" size="lg">View intentory</Button>
          </Row>
        </div>
      )
      return (
        <div>
          {admin}

          <Row className="justify-content-center m-3 mt-5">
            {this.state.itemForm}
          </Row>
          <Row className="justify-content-center m-3 mt-5">
            { this.state.items.map(item => {
              if(this.state.editingitemId === item.id) {
                return(<AdminForm item={item} key={item.id} updateItem={this.updateItem} titleRef={input => this.title = input} resetNotification={this.resetNotification} />)
              } else {
                return (<AdminItem item={item} key={item.id} onClick={this.enableEditing} onDelete={this.deleteItem} />)
              }
            }
          )


      }
      <span>
        {this.state.notification}
      </span>
    </Row>
  </div>
);
}
}

export default connect((state) => state)(Admin);
