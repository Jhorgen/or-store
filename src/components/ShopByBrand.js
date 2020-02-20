import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import { addToCart, loadSelectedBrandData, saveSelectedBrandData } from './../actions/cartActions.js'
import ShopItem from './ShopItem'


class ShopByBrand extends Component {

  componentDidMount = () => {
    console.log(this.props.form.items[0].brand);
    console.log(this.props.brand);
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
    let items = this.props.form.items.length < 200 ?
    (
    this.props.form.items.map(item=>{
    return (
      <ShopItem item={item} />
    )
  })
)
:
(
    <div className='text-center mt-2 mb-5'>
      <Spinner color="info" />
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
