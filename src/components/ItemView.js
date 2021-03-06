import React, { Component } from 'react'
import { Row, Col, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import Lightbox from 'react-lightbox-component';
import { connect } from 'react-redux'
import { addToCart, viewItem, saveCartItemTotal } from './../actions/cartActions.js'
import "react-lightbox-component/build/css/index.css";
import Footer from './Footer'


class ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemView: [],
      images: [],
      addedNotification: 'none',
      selectedOption: '',
      selectedOptionIndex: '',
      outOfStock: '',
      inStock: '',
      selectedPrice: '',
      selectedImage: '',
      addButton: '',
      defaultOption: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
      option6: '',
      option7: '',
      option8: '',
      option9: '',
      option10: '',
      spec1: '',
      spec2: '',
      spec3: '',
      spec4: '',
      spec5: '',
      spec6: '',
      spec7: '',
      spec8: '',
      spec9: '',
      spec10: '',
      price1: '',
      fireModal: 'none !important'
    }
  }

  componentDidMount = () => {
    let images = []
    let title = this.props.match.params.title
    let brand = this.props.match.params.brand

    fetch(`https://nameless-hollows-85718.herokuapp.com/api/v1/products/?brand=${brand}&title=${title}`)
    .then(res => res.json())
    .then(
      data => { this.props.viewItem(data)
        this.setState({itemView: data})
        for(var i = 1; i < 11; i++) {
          this.state.itemView[0][`image${i}`] != '' ? images.push({
            src: require(`./../images/${this.state.itemView[0][`image${i}`]}.jpg`),
            title: this.state.itemView[0].brand + ' ' + this.state.itemView[0].title,
            description: this.state.itemView[0][`option${i}`]
          }) : console.log('test');
          if(i == 10) {
            this.setState({images: images, selectedImage: this.state.itemView[0].image1})
            if(images.length < 2) {
              this.setState({images: []})
            }
          }
        }

        this.setState({defaultOption: <option style={{display: 'none'}} value={'default'}>Select an option</option>})

        this.state.itemView[0].option1 === '' ? this.setState({option1: ''}) : this.state.itemView[0].option1quantity === 0 ? this.setState({option1: <option value={'1'}>{this.state.itemView[0].option1} (Out of stock)</option>}) : this.setState({option1: <option value={'1'}>{this.state.itemView[0].option1}  (${this.state.itemView[0].option1price})</option>})

        this.state.itemView[0].option2 === '' ? this.setState({option2: ''}) : this.state.itemView[0].option2quantity === 0 ? this.setState({option2: <option value={'2'}>{this.state.itemView[0].option2} (Out of stock)</option>}) : this.setState({option2: <option value={'2'}>{this.state.itemView[0].option2} (${this.state.itemView[0].option2price})</option> })

        this.state.itemView[0].option3 === '' ? this.setState({option3: ''}) : this.state.itemView[0].option3quantity === 0 ? this.setState({option3: <option value={'3'}>{this.state.itemView[0].option3}</option>}) : this.setState({option3: <option value={'3'}>{this.state.itemView[0].option3} (${this.state.itemView[0].option3price})</option> })

        this.state.itemView[0].option4 === '' ? this.setState({option4: ''}) : this.state.itemView[0].option4quantity === 0 ? this.setState({option4: <option value={'4'}>{this.state.itemView[0].option4} (Out of stock)</option>}) : this.setState({option4: <option value={'4'}>{this.state.itemView[0].option4} (${this.state.itemView[0].option4price})</option> })

        this.state.itemView[0].option5 === '' ? this.setState({option5: ''}) : this.state.itemView[0].option5quantity === 0 ? this.setState({option5: <option value={'5'}>{this.state.itemView[0].option5} (Out of stock)</option>}) : this.setState({option5: <option value={'5'}>{this.state.itemView[0].option5} (${this.state.itemView[0].option5price})</option> })

        this.state.itemView[0].option6 === '' ? this.setState({option6: ''}) : this.state.itemView[0].option6quantity === 0 ? this.setState({option6: <option value={'6'}>{this.state.itemView[0].option6} (Out of stock)</option>}) : this.setState({option6: <option value={'6'}>{this.state.itemView[0].option6} (${this.state.itemView[0].option6price})</option> })

        this.state.itemView[0].option7 === '' ? this.setState({option7: ''}) : this.state.itemView[0].option7quantity === 0 ? this.setState({option7: <option value={'7'}>{this.state.itemView[0].option7} (Out of stock)</option>}) : this.setState({option7: <option value={'7'}>{this.state.itemView[0].option7} (${this.state.itemView[0].option7price})</option> })

        this.state.itemView[0].option8 === '' ? this.setState({option8: ''}) : this.state.itemView[0].option8quantity === 0 ? this.setState({option8: <option value={'8'}>{this.state.itemView[0].option8} (Out of stock)</option>}) : this.setState({option8: <option value={'8'}>{this.state.itemView[0].option8} (${this.state.itemView[0].option8price})</option> })

        this.state.itemView[0].option9 === '' ? this.setState({option9: ''}) : this.state.itemView[0].option9quantity === 0 ? this.setState({option9: <option value={'9'}>{this.state.itemView[0].option9} (Out of stock)</option>}) : this.setState({option9: <option value={'9'}>{this.state.itemView[0].option9} (${this.state.itemView[0].option9price})</option> })

        this.state.itemView[0].option10 === '' ? this.setState({option10: ''}) : this.state.itemView[0].option10quantity === 0 ? this.setState({option10: <option value={'10'}>{this.state.itemView[0].option10} (Out of stock)</option>}) : this.setState({option10: <option value={'10'}>{this.state.itemView[0].option10} (${this.state.itemView[0].option10price})</option> })

        for(var z = 1; z < 11; z++) {
          if(this.state.itemView[0][`spec${z}`] !== '') {
            this.setState({[`spec${z}`]: <li>{this.state.itemView[0][`spec${z}`]}</li>})
            if(z == 9 && this.state.itemView[0].spec9 !== '') {
              this.setState({spec9: <li className='mt-3' style={{listStyle: 'none'}}><b className='d-flex'>Weight</b> {this.state.itemView[0].spec9}</li>})
            }
            if(z == 10 && this.state.itemView[0].spec10 !== '') {
              this.setState({spec10: <li className='mt-3' style={{listStyle: 'none'}}><b className='d-flex'>Available in</b> {this.state.itemView[0].spec10}</li>})
            }
          }
        }
        this.setState({selectedImage: this.state.itemView[0].image1})
      }
    )
  }

  handleAddToCart = (id) => {
    let selected = this.state.selectedOption;
    let selectedIndex = this.state.selectedOptionIndex;
    let price = this.state.itemView[0][`option${selectedIndex}price`]
    let checkCart

    for(var i = 0; i < this.props.form.addedItems.length; i++) {
      if(selectedIndex === this.props.form.addedItems[i].selectedOptionIndex && id === this.props.form.addedItems[i].id)

      if(this.props.form.addedItems[i][`option${selectedIndex}quantity`] - this.props.form.addedItems[i].checkoutquantity <= 0) {
        checkCart = 'false'
      }
    }

    if(this.state.itemView[0][`option${selectedIndex}quantity`] === 0 || this.props.form.addedItems.length >= 29 || checkCart === 'false') {

      if(this.state.itemView[0][`option${selectedIndex}quantity`] === 0) {
        window.location.reload();
      }

      if(this.props.form.addedItems.length >= 29) {
        this.setState({addButton:<b className='mb-2'>Cart is limited to 30 individual items.</b>, selectedPrice: '' })
        setTimeout( () => {
          this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-4' onClick={() => this.handleAddToCart(this.state.itemView[0].id)}>Add to cart</button>})

          this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.state.itemView[0][`option${this.state.selectedOptionIndex}price`]}</b>})
        }, 750);
      } else {
        this.setState({addButton:<b className='mb-2'>Only {this.state.itemView[0][`option${selectedIndex}quantity`]} in stock.</b>, selectedPrice: '' })
        setTimeout( () => {
          this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-4' onClick={() => this.handleAddToCart(this.state.itemView[0].id)}>Add to cart</button>})

          this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.state.itemView[0][`option${this.state.selectedOptionIndex}price`]}</b>})
        }, 750);
      }

    } else {
      this.props.addToCart(id, selected, selectedIndex, price);
      this.props.saveCartItemTotal();
      this.setState({addButton:<b className='mb-2'>Added to cart</b>, selectedPrice: '' })
      setTimeout( () => {
        this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-4' onClick={() => this.handleAddToCart(this.state.itemView[0].id)}>Add to cart</button>})

        this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.state.itemView[0][`option${this.state.selectedOptionIndex}price`]}</b>})
      }, 450);
    }
  }

  onChange = (e, et) => {
    console.log('selectedoption:', et.selectedOptions[0].text, 'selectedOptionIndex:', e);
    this.setState({selectedOption: et.selectedOptions[0].text, selectedOptionIndex : e})
    this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.state.itemView[0][`option${e}price`]}</b>})

    for(var i = 1; i < 11; i++)
    if(this.state.itemView[0][`image${i}`].toLowerCase().includes(et.selectedOptions[0].text.split(' ').join('').toLowerCase())) {
      this.setState({selectedImage: this.state.itemView[0][`image${i}`]})
    }
    else {
      // console.log('fail');
      // console.log(i);
      // console.log('seaching', this.state.itemView[0].image2, 'for', et.selectedOptions[0].text.split(' ').join('').toLowerCase());
    }

    if(et.selectedOptions[0].text.includes('(Out of stock)')) {
      this.setState({outOfStock: <p className='mt-3'>This option is out of stock. Please select another option.</p>, addButton: ''})
    } else {
      this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-4' onClick={() => this.handleAddToCart(this.state.itemView[0].id)}>Add to cart</button>})
      this.setState({outOfStock: ''})
    }
  }

  render() {
    let none = 'none'
    let item = this.state.itemView.length && this.state.selectedImage !== '' ?
    (
      this.state.itemView.map(item => {
        return (
          <div key={item.id} className='footer-control'>
            <Row className="justify-content-center item-view-links-toggle">

              <Col className='text-center'>
                <div className='text-center flex-column align-items-center'>
                  <div className='item-view-links-font text-center'>
                    <Link className='mt-2 pr-2 text-dark item-view-links' style={{textDecoration: 'none'}} to={'/' + item.category.toLowerCase()}>View all <span>{item.category}</span></Link>
                    <b className='pr-2'>/</b>
                    <Link className='mt-2 text-dark item-view-links' style={{textDecoration: 'none'}} to={'/' + item.brand}>View all {item.brand} products</Link>
                  </div>
                  <hr style={{width: '100%'}}/>
                  <span style={{background: '#f8f9fa', fontWeight: 'bold', borderRadius: '11px', padding: '5px', boxShadow: '1px 0px 22px coral'}} className="title mt-1"><span>{item.brand}</span> {item.title}</span>
                </div>
              </Col>
            </Row>

            <Row className="item-desc justify-content-around mt-4">
              <Col xs='3' className='item-view-title text-center flex-column align-items-center'>
                <span style={{background: '#f8f9fa', fontWeight: 'bold', borderRadius: '11px', padding: '5px', boxShadow: '1px 0px 22px coral'}} className="title mt-1"><span>{item.brand}</span> {item.title}</span>
                <hr style={{width: '100%'}}/>
                <div className='item-view-links-font'>
                  <Link className='mt-2 pr-2 text-dark item-view-links' style={{textDecoration: 'none'}} to={'/' + item.category.toLowerCase()}>View all <span>{item.category}</span></Link>
                  <b className='pr-2'>/</b>
                  <Link className='mt-2 text-dark item-view-links' style={{textDecoration: 'none'}} to={'/' + item.brand.toLowerCase().split(' ').join('') + '-all'}>View all {item.brand} products</Link>
                </div>
              </Col>

              <Col xs='4' className='d-flex justify-content-center align-items-center flex-column toggle-margin' style={{height: '100%'}}>
                <Lightbox thumbnailWidth='25rem' thumbnailHeight='20rem' images={
                    [
                      {
                        src: require(`./../images/${this.state.selectedImage}.jpg`),
                        title: item.brand + ' ' + item.title,
                        description: item.option1
                      }
                    ]
                  }/>
                  <div className='lightbox-flex'>
                    <Lightbox style={{textAlign: 'left', display: 'flex'}} images={
                        this.state.images
                      }/>
                    </div>
                  </Col>

                  <Col xs='4' className='text-center item-view-info'>
                    <form className='mt-3 mb-4'>
                      <select className='form-control' ref="selectMark"
                        onChange={(e) => this.onChange(e.target.value, e.target)}>
                        {this.state.defaultOption}
                        {this.state.option1}
                        {this.state.option2}
                        {this.state.option3}
                        {this.state.option4}
                        {this.state.option5}
                        {this.state.option6}
                        {this.state.option7}
                        {this.state.option8}
                        {this.state.option9}
                        {this.state.option10}
                      </select>
                    </form>

                    <Row className='align-items-baseline justify-content-center'>{this.state.selectedPrice}{this.state.addButton}</Row>

                    <ul className='text-left'>
                      <li>{this.state.itemView[0].description}</li>
                      {this.state.spec1}
                      {this.state.spec2}
                      {this.state.spec3}
                      {this.state.spec4}
                      {this.state.spec5}
                      {this.state.spec6}
                      {this.state.spec7}
                      {this.state.spec8}
                      {this.state.spec9}
                      {this.state.spec10}
                    </ul>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col className='text-center item-view-info-2'>
                    <form className='mt-3 mb-4'>
                      <select className='form-control' ref="selectMark"
                        onChange={(e) => this.onChange(e.target.value, e.target)}>
                        {this.state.defaultOption}
                        {this.state.option1}
                        {this.state.option2}
                        {this.state.option3}
                        {this.state.option4}
                        {this.state.option5}
                        {this.state.option6}
                        {this.state.option7}
                        {this.state.option8}
                        {this.state.option9}
                        {this.state.option10}
                      </select>
                    </form>

                    <Row className='align-items-baseline justify-content-center'>{this.state.selectedPrice}{this.state.addButton}</Row>
                    <ul className='text-left'>
                      <li>{this.state.itemView[0].description}</li>
                      {this.state.spec1}
                      {this.state.spec2}
                      {this.state.spec3}
                      {this.state.spec4}
                      {this.state.spec5}
                      {this.state.spec6}
                      {this.state.spec7}
                      {this.state.spec8}
                      {this.state.spec9}
                      {this.state.spec10}
                    </ul>
                  </Col>
                </Row>
                <Footer/>
              </div>
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
          <div>
            {item}
          </div>
        )
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
        addToCart: (id, selected, selectedIndex, price) => {(dispatch(addToCart(id, selected, selectedIndex, price)))},
        viewItem: (item) => {(dispatch(viewItem(item)))},
        saveCartItemTotal: () => {(dispatch(saveCartItemTotal()))},
      }
    }

    export default connect(state => state, mapDispatchToProps)(ItemView);
