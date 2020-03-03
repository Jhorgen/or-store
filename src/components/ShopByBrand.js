import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Spinner } from 'reactstrap'
import { addToCart, loadSelectedBrandData, saveSelectedBrandData } from './../actions/cartActions.js'
import ShopItem from './ShopItem'
import Footer from './Footer'
import { ScrollToTopOnMount } from './ScrollFix'


class ShopByBrand extends Component {

  componentDidMount = () => {
    console.log(this.props.form.items[0].brand);
    console.log(this.props.brand);
    if(this.props.form.addedItems.length > 0) {
      console.log("shop:", 'length');
      let saveCartFromBrand = this.props.form.addedItems
      let saveTotalFromBrand = this.props.form.total
      console.log(saveTotalFromBrand);
      this.props.saveSelectedBrandData(this.props.brand, saveCartFromBrand, saveTotalFromBrand)
    } else {
      console.log("shop:", 'no length', this.props.brand);
      this.props.loadSelectedBrandData(this.props.brand)
    }
  }


  render() {
    let items = this.props.form.items.length < 200 && this.props.form.items[0].brand === this.props.brand ?
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

    let footer = this.props.form.items.length < 200 ? <Footer/> : ''

    return (
      <div class='footer-control'>
        <ScrollToTopOnMount />
        <div className="container">
          <div className='shop-header-container'>
            <h3 className="text-center shop-header">{this.props.brand}</h3>
          </div>
          <div>
            <div>
              <Row className="justify-content-center mt-4">{items}</Row>
            </div>
          </div>
        </div>
        {footer}
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
