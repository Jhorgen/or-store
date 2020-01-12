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
    console.log("shop loaded items:", this.props.form.addedItems);
      let saveCartFromShop = this.props.form.addedItems
      let saveTotalFromShop = this.props.form.total
      console.log("shop:", 'no length');
      this.props.saveSelectedItemData(this.props.name, saveCartFromShop, saveTotalFromShop)
  }



  handleAddClick = (id) => {
    this.props.addToCart(id);
    console.log(this.props.test);
    console.log(id);
  }

  findCat = () => {
    console.log(this.props.form.name);
  }

  render() {
    let items = this.props.form.items.length ?
    (
    this.props.form.items.map(item=>{
    return (
      <div className="card m-3 test-hover" key={item.id}>
        <div className="card-image text-center item-view-hover">
          <Link to={'/item/' + item.title.split(' ').join('')} onClick={() => {this.checkLink(item)}}>
          <img style={{height: '13rem'}} src={ require(`./../images/${item.image1}.jpg`)} alt={item.title}/>
          <div><span className="card-title">{item.title}</span></div>
          <span onClick={() => this.handleAddClick(item.id)}>View</span>
        </Link>
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
