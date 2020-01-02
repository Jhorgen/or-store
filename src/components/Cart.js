import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity, loadItemData, sendStorageData } from './../actions/cartActions.js'
import Recipe from './Recipe'
import Item1 from './../images/item1.jpg'


class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeBlah: ''
    }
  }

  componentWillMount = () => {
    localStorage.setItem('storeObj', JSON.stringify(this.props.addedItems));
    const rememberMe = localStorage.getItem('storeObj')
    let userCart = JSON.parse(rememberMe)
    this.props.sendStorageData(userCart);
    console.log(userCart);

    //pass loaded data to global state
  }

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  testerTest = (addedItems) => {
    console.log(addedItems);
  }


  render() {
    const rememberMe = localStorage.getItem('storeObj')
    let tester = JSON.parse(rememberMe)
    let addedItems = tester ?
    (
      tester.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={ require(`./../images/${item.image1}.jpg`)} alt={item.image}/>
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.description}</p>
              <p><b>Price: ${item.price}</b></p>
              <p>
                <b>Quantity: {item.checkoutquantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id, item.price)}}>arrow_drop_down</i></Link>
              </div>
              <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
            </div>
          </li>
        )
      })
    )
    :
    (
      <div>
        <p>Nothing.</p>
      </div>
    )

    return (
      <div className="container">
        <div className="cart">
          <h5 onClick={() => this.testerTest(addedItems)}> Cart:</h5>
          <ul className="collection">
            {addedItems}
          </ul>
        </div>
        <Recipe />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id) => {dispatch(removeItem(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
    sendStorageData: (userCart) => {dispatch(sendStorageData(userCart))}
  }
}

export default connect((state)=>state, mapDispatchToProps)(Cart)
