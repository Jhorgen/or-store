import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { addToCart, loadSelectedItemData, saveSelectedItemData } from './../actions/cartActions.js'


class Shop extends Component {

  checkLink = (item) => {
    console.log(item);
  }

  componentDidMount = () => {
    if(this.props.addedItems.length > 0) {
      console.log("shop:", 'length');
      let saveCartFromShop = this.props.addedItems
      let saveTotalFromShop = Math.floor(this.props.total)
      console.log(saveTotalFromShop);
      this.props.saveSelectedItemData(this.props.name, saveCartFromShop, saveTotalFromShop)
    } else {
      console.log("shop:", 'no length');
      this.props.loadSelectedItemData(this.props.name)
    }
  }



  handleAddClick = (id) => {
    this.props.addToCart(id);
    console.log(this.props.test);
    console.log(id);
  }

  findCat = () => {
    console.log(this.props.name);
  }

  render() {
    let items = this.props.items.length ?
    (
    this.props.items.map(item=>{
    return (
      <div className="card" key={item.id}>
        <div className="card-image text-center">
          <Link to={'/item/' + item.title} onClick={() => {this.checkLink(item)}}>
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
)
:
(
    <div>
      <p>Nothing.</p>
    </div>
  )

    return (
      <div className="container">
        <h3 className="text-center" onClick={() => this.findCat()}>{this.props.name}</h3>
        <div>
          <div>
        <Row className="justify-content-center mt-4">{items}</Row>
        </div>
      </div>
    </div>
  );
}
}


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {(dispatch(addToCart(id)))},
    saveSelectedItemData: (category, saveCartFromShop, saveTotalFromShop) => {(dispatch(saveSelectedItemData(category, saveCartFromShop, saveTotalFromShop)))},
    loadSelectedItemData: (category) => {(dispatch(loadSelectedItemData(category)))}

  }
}

export default connect((state) => state, mapDispatchToProps)(Shop);
