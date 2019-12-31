import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './../actions/cartActions.js'
import Recipe from './Recipe'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testerrr: []
    }
  }

  componentDidMount = () => {

  let testerr = this.props.items.map(item => {
          <div className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.image} alt={item.image} className=""/>
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.description}</p>
              <p><b>Price: {item.price}$</b></p>
              <p>
                <b>Quantity: {item.checkoutquantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
              </div>
              <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
            </div>
          </div>
      }
    )
  }

  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }
  //to add the quantity
  handleAddQuantity = (id)=>{
    this.props.addQuantity(id);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (id)=>{
    this.props.subtractQuantity(id);
  }



  render(){
    return(
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
        <p>test</p>
            </ul>
          )}
        </div>
        <Recipe />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    items: state.addedItems,
    //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
