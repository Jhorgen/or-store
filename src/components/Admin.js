import React, { Component } from 'react'
import { Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadItemData, loadItemDataCheck } from './../actions/cartActions.js'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      correct: true,
      incorrect: '',
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (event) => {
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

  loadProducts = () => {
    this.props.loadItemData();
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
      <Button onClick={() =>this.loadProducts()} color="info" size="lg">Edit/Delete products</Button>
      <Button onClick={() =>this.loadProducts()} color="info" size="lg">Add product</Button>
      <Button onClick={() =>this.loadProducts()} color="info" size="lg">View intentory</Button>

      </Row>
      </div>
    )
    return (
      <div>
      {admin}

      <Row className="justify-content-center m-3 mt-5">
      { this.props.items.length ? this.props.items.map(item=>{
        return (
          <div className="card" key={item.id}>
          <div className="card-image text-center">
          <Link to={'/item/' + item.title.split(' ').join('')} onClick={() => {this.checkLink(item)}}>
          <img style={{height: '13rem'}} src={ require(`./../images/${item.image1}.jpg`)} alt={item.title}/>
          </Link>
          <div><span className="card-title">{item.title}</span></div>
          <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i onClick={() => this.handleAddClick(item.id)} className="text-info">Add to cart</i></span>
          <hr/>
          </div>
          <div className="card-content">
          <p>{item.description}</p>
          <p><b>Price: ${item.price}</b></p>
          </div>
          </div>
        )
      })
      :
      <p>{this.props.loading}</p>
    }
    </Row>



    </div>
  );
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadItemData: () => {(dispatch(loadItemData()))},
    loadItemDataCheck: (check, saveTotal) => {(dispatch(loadItemDataCheck(check, saveTotal)))}
  }
}

export default connect((state) => state, mapDispatchToProps)(Admin);
