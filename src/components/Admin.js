import React, { Component } from 'react'
import { Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
      notification: ''
    };
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

  addNewItem() {
    var key = ('option1')
    var titletest = 'title'
    let value =

    axios.post(
      'http://localhost:3000/api/v1/products/',
      { product:
        {
          category: "Grips",
          brand: "Colony",
          [titletest]: "BMX Grip 41231",
          description: "They have great grip",
          [key]: 'Medium red',
          option2: "Large blue",
          option3: "test",
          option4: "",
          option5: "test",
          option6: "",
          option7: "",
          option8: "",
          option9: "",
          option10: "",
          selectedOptionIndex: "",
          option1quantity: 5,
          option2quantity: 2,
          option3quantity: 10,
          option4quantity: undefined,
          option5quantity: undefined,
          option6quantity: undefined,
          option7quantity: undefined,
          option8quantity: undefined,
          option9quantity: undefined,
          option10quantity: undefined,
          price: 27.00,
          saleprice: undefined,
          image1: 'bars',
          image2: "",
          image3: "",
          image4: "",
          image5: "",
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
            <Button onClick={() =>this.addNewItem()} color="info" size="lg">Add item</Button>
            <Button onClick={() =>this.loadItems()} color="info" size="lg">View intentory</Button>
          </Row>
        </div>
      )
      return (
        <div>
          {admin}
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
