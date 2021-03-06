import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Spinner } from 'reactstrap'
import { addToCart, loadSelectedItemData, saveSelectedItemData } from './../actions/cartActions.js'
import ShopItem from './ShopItem'
import Footer from './Footer'
import {ScrollToTopOnMount} from './ScrollFix'


class Shop extends Component {

  componentDidMount = () => {
    console.log("shop loaded items:", this.props.form.addedItems);
    let saveCartFromShop = this.props.form.addedItems
    let saveTotalFromShop = this.props.form.total
    console.log("shop:", 'no length');
    if(this.props.form.addedItems.length > 0) {
      console.log('length');
      this.props.saveSelectedItemData(this.props.name, saveCartFromShop, saveTotalFromShop)
    } else {
      console.log('no length');
      this.props.loadSelectedItemData(this.props.name)
    }
  }


  render() {
    let items = this.props.form.items.length < 200 && this.props.form.items[0].category === this.props.name ?
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
      <div className='footer-control'>
        <ScrollToTopOnMount/>
        <div className="container">
          <div className='shop-header-container'>
            <h3 className="text-center shop-header">{this.props.name}</h3>
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
    saveSelectedItemData: (category, saveCartFromShop, saveTotalFromShop) => {(dispatch(saveSelectedItemData(category, saveCartFromShop, saveTotalFromShop)))},
    loadSelectedItemData: (category) => {(dispatch(loadSelectedItemData(category)))}

  }
}

export default connect((state) => state, mapDispatchToProps)(Shop);
