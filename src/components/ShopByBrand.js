import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { addToCart, loadSelectedBrandData, saveSelectedBrandData } from './../actions/cartActions.js'


class ShopByBrand extends Component {

  checkLink = (item) => {
    console.log(item);
  }

  componentDidMount = () => {
    if(this.props.form.addedItems.length > 0) {
      console.log("shop:", 'length');
      let saveCartFromBrand = this.props.form.addedItems
      let saveTotalFromBrand = this.props.form.total
      console.log(saveTotalFromBrand);
      this.props.saveSelectedItemData(this.props.brand, saveCartFromBrand, saveTotalFromBrand)
    } else {
      console.log("shop:", 'no length', this.props.brand);
      this.props.loadSelectedBrandData(this.props.brand)
    }
  }

  handleAddClick = (id) => {
    this.props.addToCart(id);
    console.log(this.props.test);
    console.log(id);
  }

  findCat = () => {
    console.log(this.props.brand);
  }

  render() {
    let items = this.props.form.items.length ?
    (
      this.props.form.items.map(item=>{
        return (
          <div className="card m-3" key={item.id}>
            <div className="card-image text-center">
              <Link to="/item" onClick={() => {this.checkLink(item)}}>
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
        <h3 className="text-center" onClick={() => this.findCat()}>{this.props.brand}</h3>
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
    saveSelectedBrandData: (brand, saveCartFromBrand, saveTotalFromBrand) => {(dispatch(saveSelectedBrandData(brand, saveCartFromBrand, saveTotalFromBrand)))},
    loadSelectedBrandData: (brand) => {(dispatch(loadSelectedBrandData(brand)))}
  }
}

export default connect((state) => state, mapDispatchToProps)(ShopByBrand);
