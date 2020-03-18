import React, { Component } from 'react'
import { Row, Button, Col } from 'reactstrap'
import { connect } from 'react-redux'
import axios from 'axios'
import CheckForm from './CheckForm'
import CheckItem from './CheckItem.js'
import update from 'immutability-helper';


class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      correct: true,
      incorrect: '',
      display: 'none',
      items: [],
      editingitemId: null,
      notification: '',
      itemForm: '',
      category: 'default',
      brand: '',
      title: '',
      description: '',
      spec1: '',
      spec2: '',
      spec3: '',
      spec4: '',
      spec5: '',
      spec6: '',
      spec7: '',
      spec8: '',
      spec9: '',
      spec10: '',
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
      option1quantity: 0,
      option2quantity: 0,
      option3quantity: 0,
      option4quantity: 0,
      option5quantity: 0,
      option6quantity: 0,
      option7quantity: 0,
      option8quantity: 0,
      option9quantity: 0,
      option10quantity: 0,
      price: undefined,
      saleprice: undefined,
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image5: '',
      image6: '',
      image7: '',
      image8: '',
      image9: '',
      image10: '',
      option1price: undefined,
      option2price: undefined,
      option3price: undefined,
      option4price: undefined,
      option5price: undefined,
      option6price: undefined,
      option7price: undefined,
      option8price: undefined,
      option9price: undefined,
      option10price: undefined,
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
    console.log('A user was submitted: ' + this.state.user);
    console.log('A password was submitted: ' + this.state.password);
    event.preventDefault();
    if(this.state.user === "test" && this.state.password === "test") {
      this.setState({correct: false, display: ''})
    } else {
      console.log('false');
      this.setState({incorrect: <h4>Incorrect login information.</h4>})
      setTimeout( () => {
        this.setState({incorrect: ''})
      }, 500);
    }
  }

  loadItems = () => {
    axios.get(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/`)
    .then(response => {
      this.setState({items: response.data})
      console.log(this.state.items);
    })
    .catch(error => console.log(error))
  }

  handleInput = (e, name) => {
    this.setState({[e.target.name]: e.target.value})

    this.setState({updated: <span onClick={() => this.postUpdate()} className='btn btn-info btn-block mb-3 ml-4 mt-2'>Update</span>})
  }

  addItemForm = () => {
    this.setState({items: []})
    this.setState({itemForm: <form onSubmit={(e) => this.addNewItem(e)}>

      <Row>
        <Col>
          <form>
            <select className='form-control' name='category' onChange={(e) => this.handleInput(e, "category")}>
              <option value={'default'}>Category</option>
              <option value={'Bars'}>Bars</option>
              <option value={'Brakes'}>Brakes</option>
              <option value={'Hubs'}>Hubs</option>
              <option value={'Rims'}>Rims</option>
              <option value={'Pedals'}>Pedals</option>
              <option value={'Sprockets'}>Sprockets</option>
              <option value={'Chains'}>Chains</option>
              <option value={'Seats'}>Seats</option>
              <option value={'Forks'}>Forks</option>
              <option value={'Headsets'}>Headsets</option>
              <option value={'Gloves'}>Gloves</option>
              <option value={'Pegs'}>Pegs</option>
              <option value={'Grips'}>Grips</option>
              <option value={'Titanium Hardware'}>Titanium Hardware</option>
              <option value={'Cranks'}>Cranks</option>
              <option value={'Stems'}>Stems</option>
              <option value={'Tires'}>Tires</option>
              <option value={'Wheels'}>Wheels</option>
              <option value={'Frames'}>Frames</option>
            </select>
          </form>
        </Col>

        <Col>
          <input className='input' name="brand" placeholder='Enter Brand' value={this.state.value} onChange={this.handleInput} />
        </Col>

        <Col>
          <input className='input'
            name="title" placeholder='Enter Title' value={this.state.value} onChange={this.handleInput} />
        </Col>

        <Col>
          <input className='input'
            name="description" placeholder='Enter Description' value={this.state.value} onChange={this.handleInput} />
        </Col>
      </Row>

      <Row className='mt-4'>

      <Col>
      <Row className='m-1'>
        <input className='input'
          name="spec1" placeholder='Enter Spec 1' value={this.state.value} onChange={this.handleInput} />
        </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec2" placeholder='Enter Spec 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec3" placeholder='Enter Spec 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec4" placeholder='Enter Spec 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
      <input className='input'
          name="spec5" placeholder='Enter Spec 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec6" placeholder='Enter Spec 6' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec7" placeholder='Enter Spec 7' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec8" placeholder='Enter Spec 8' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec9" placeholder='Enter Spec 9' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input'
          name="spec10" placeholder='Enter Spec 10' value={this.state.value} onChange={this.handleInput} />
      </Row>

    </Col>

    <Col>
      <Row className='m-1'>
        <input className='input' name="option1" placeholder='Enter Option 1' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option2" placeholder='Enter Option 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option3" placeholder='Enter Option 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option4" placeholder='Enter Option 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option5" placeholder='Enter Option 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option6" placeholder='Enter Option 6' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option7" placeholder='Enter Option 7' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option8" placeholder='Enter Option 8' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option9" placeholder='Enter Option 9' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option10" placeholder='Enter Option 10' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <input className='input' name="option1price" placeholder='Enter price 1' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option2price" placeholder='Enter price 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option3price" placeholder='Enter price 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option4price" placeholder='Enter price 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option5price" placeholder='Enter price 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option6price" placeholder='Enter price 6' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option7price" placeholder='Enter price 7' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option8price" placeholder='Enter price 8' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option9price" placeholder='Enter price 9' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option10price" placeholder='Enter price 10' onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <input className='input' name="option1quantity" placeholder='Enter Quantity (Option 1)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option2quantity" placeholder='Enter Quantity (Option 2)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option3quantity" placeholder='Enter Quantity (Option 3)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option4quantity" placeholder='Enter Quantity (Option 4)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option5quantity" placeholder='Enter Quantity (Option 5)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option6quantity" placeholder='Enter Quantity (Option 6)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option7quantity" placeholder='Enter Quantity (Option 7)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option8quantity" placeholder='Enter Quantity (Option 8)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option9quantity" placeholder='Enter Quantity (Option 9)' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="option10quantity" placeholder='Enter Quantity (Option 10)' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>

    <Col>
      <Row className='m-1'>
        <input className='input' name="image1" placeholder='Enter Image 1' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image2" placeholder='Enter Image 2' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image3" placeholder='Enter Image 3' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image4" placeholder='Enter Image 4' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image5" placeholder='Enter Image 5' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image6" placeholder='Enter Image 6' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image7" placeholder='Enter Image 7' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image8" placeholder='Enter Image 8' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image9" placeholder='Enter Image 9' value={this.state.value} onChange={this.handleInput} />
      </Row>

      <Row className='m-1'>
        <input className='input' name="image10" placeholder='Enter Image 10' value={this.state.value} onChange={this.handleInput} />
      </Row>
    </Col>


  </Row>
  <Row>
    <input className='btn btn-success btn-block mt-3' type='submit'/>
  </Row>


</form>})
}

addNewItem(e) {
  e.preventDefault()
  if(this.state.image1 !== '' && this.state.category !== 'default') {
  axios.post(
    'https://nameless-hollows-85718.herokuapp.com/api/v1/products/',
    { product:
      {
        category: this.state.category,
        brand: this.state.brand,
        title: this.state.title,
        description: this.state.description,
        spec1: this.state.spec1,
        spec2: this.state.spec2,
        spec3: this.state.spec3,
        spec4: this.state.spec4,
        spec5: this.state.spec5,
        spec6: this.state.spec6,
        spec7: this.state.spec7,
        spec8: this.state.spec8,
        spec9: this.state.spec9,
        spec10: this.state.spec10,
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
        image6: this.state.image6,
        image7: this.state.image7,
        image8: this.state.image8,
        image9: this.state.image9,
        image10: this.state.image10,
        rating: undefined,
        checkoutquantity: 1,
        option1price: this.state.option1price,
        option2price: this.state.option2price,
        option3price: this.state.option3price,
        option4price: this.state.option4price,
        option5price: this.state.option5price,
        option6price: this.state.option6price,
        option7price: this.state.option7price,
        option8price: this.state.option8price,
        option9price: this.state.option9price,
        option10price: this.state.option10price
      }
    }
  )
  .then(response => {
    console.log(response, response.option1)
    this.setState({itemForm: '', category: '', brand: '', title: '', description: '', spec1: '', spec2: '', spec3: '', spec4: '',
      spec5: '', spec6: '', spec7: '', spec8: '', spec9: '', spec10: '', option1: '', option2: '', option3: '', option4: '', option5: '', option6: '', option7: '', option8: '', option9: '', option10: '', option1quantity: 0, option2quantity: 0, option3quantity: 0,
      option4quantity: 0, option5quantity: 0, option6quantity: 0, option7quantity: 0, option8quantity: 0, option9quantity: 0,
      option10quantity: 0, price: undefined, saleprice: undefined, image1: '', image2: '', image3: '', image4: '', image5: '',
      image6: '', image7: '', image8: '', image9: '', image10: '', option1price: undefined, option2price: undefined, option3price: undefined, option4price: undefined, option5price: undefined, option6price: undefined, option7price: undefined, option8price: undefined, option9price: undefined, option10price: '', editingItemId: null})
      this.loadItems()
    })
    .catch(error => console.log(error))
  } else {
    console.log(this.state.category);
  }
  }

  updateItem = (item) => {
    console.log('item updated', item);
    const itemIndex = this.state.items.findIndex(x => x.id === item.id)
    const items = update(this.state.items, {
      [itemIndex]: { $set: item }
    })
    this.setState({items: items, notification: 'All changes saved'})
  }

  deleteItem = (id) => {
    axios.delete(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/${id}`)
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
    this.setState({editingitemId: id},
      () => { this.title.focus() })
      console.log("editingItemId:", this.state.editingitemId);
    }

    render() {
      let Check = this.state.correct ?
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
            <Button onClick={() =>this.addItemForm()} color="info" size="lg">Add item</Button>
            <Button onClick={() =>this.loadItems()} color="info" size="lg">View/Edit intentory</Button>
          </Row>
        </div>
      )
      return (
        <div>
          {Check}

          <Row className="justify-content-center m-3 mt-5">
            {this.state.itemForm}
          </Row>
          <Row style={{display: this.state.display}} className="justify-content-center m-3 mt-5">
            { this.state.items.map(item => {
              if(this.state.editingitemId === item.id) {
                return(<CheckForm item={item} key={item.id} updateItem={this.updateItem} titleRef={input => this.title = input} resetNotification={this.resetNotification} />)
              } else {
                return (<CheckItem item={item} key={item.id} onClick={this.enableEditing} onDelete={this.deleteItem} />)
              }
            }
          )
        }
      </Row>
    </div>
  );
}
}

export default connect((state) => state)(Check);
