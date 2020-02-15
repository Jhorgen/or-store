import React, { Component } from 'react'
import { Row, Col, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import Lightbox from 'react-lightbox-component';
import { connect } from 'react-redux'
import { addToCart } from './../actions/cartActions.js'
import "react-lightbox-component/build/css/index.css";

class ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemView: [],
      images: [],
      selectedOption: '',
      selectedOptionIndex: '',
      inStock: '',
      selectedPrice: '',
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
    }
  }

  componentDidMount = () => {
    let images = []
    let title = this.props.match.params.title
    let brand = this.props.match.params.brand
    console.log('brand', brand);

    console.log(this.props.match.params);
    console.log(title);
    fetch(`http://localhost:3000/api/v1/products/?brand=${brand}&title=${title}`)
    .then(res => res.json())
    .then(
      data => {this.setState({itemView: data})
      for(var i = 1; i < 11; i++) {
        this.state.itemView[0][`image${i}`] != '' ? images.push({
          src: require(`./../images/${this.state.itemView[0][`image${i}`]}.jpg`),
          title: 'image title',
          description: 'image description'
        }) : console.log('nope')
        if(i == 10) {
          this.setState({images: images})
          console.log(this.state.images);
        }
      }

      this.setState({defaultOption: <option style={{display: 'none'}} value={'default'}>Select an option</option>})

      this.state.itemView[0].option1 === '' ? this.setState({option1: ''}) : this.state.itemView[0].option1quantity === 0 ? this.setState({option1: <option value={'1'}>{this.state.itemView[0].option1} (Out of stock)</option>}) : this.setState({option1: <option value={'1'}>{this.state.itemView[0].option1}</option> })

      this.state.itemView[0].option2 === '' ? this.setState({option2: ''}) : this.state.itemView[0].option2quantity === 0 ? this.setState({option2: <option value={'2'}>{this.state.itemView[0].option2}</option>}) : this.setState({option2: <option value={'2'}>{this.state.itemView[0].option2}</option> })

      this.state.itemView[0].option3 === '' ? this.setState({option3: ''}) : this.state.itemView[0].option3quantity === 0 ? this.setState({option3: <option value={'3'}>{this.state.itemView[0].option3}</option>}) : this.setState({option3: <option value={'3'}>{this.state.itemView[0].option3}</option> })

      this.state.itemView[0].option4 === '' ? this.setState({option4: ''}) : this.state.itemView[0].option4quantity === 0 ? this.setState({option4: <option value={'4'}>{this.state.itemView[0].option4}</option>}) : this.setState({option4: <option value={'4'}>{this.state.itemView[0].option4}</option> })

      this.state.itemView[0].option5 === '' ? this.setState({option5: ''}) : this.state.itemView[0].option5quantity === 0 ? this.setState({option5: <option value={'5'}>{this.state.itemView[0].option5}</option>}) : this.setState({option5: <option value={'5'}>{this.state.itemView[0].option5}</option> })

      this.state.itemView[0].option6 === '' ? this.setState({option6: ''}) : this.state.itemView[0].option6quantity === 0 ? this.setState({option6: <option value={'6'}>{this.state.itemView[0].option6}</option>}) : this.setState({option6: <option value={'6'}>{this.state.itemView[0].option6}</option> })

      this.state.itemView[0].option7 === '' ? this.setState({option7: ''}) : this.state.itemView[0].option7quantity === 0 ? this.setState({option7: <option value={'7'}>{this.state.itemView[0].option7}</option>}) : this.setState({option7: <option value={'7'}>{this.state.itemView[0].option7}</option> })

      this.state.itemView[0].option8 === '' ? this.setState({option8: ''}) : this.state.itemView[0].option8quantity === 0 ? this.setState({option8: <option value={'8'}>{this.state.itemView[0].option8}</option>}) : this.setState({option8: <option value={'8'}>{this.state.itemView[0].option8}</option> })

      this.state.itemView[0].option9 === '' ? this.setState({option9: ''}) : this.state.itemView[0].option9quantity === 0 ? this.setState({option9: <option value={'9'}>{this.state.itemView[0].option9}</option>}) : this.setState({option9: <option value={'9'}>{this.state.itemView[0].option9}</option> })

      this.state.itemView[0].option10 === '' ? this.setState({option10: ''}) : this.state.itemView[0].option10quantity === 0 ? this.setState({option10: <option value={'10'}>{this.state.itemView[0].option10}</option>}) : this.setState({option10: <option value={'10'}>{this.state.itemView[0].option10}</option> })

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
      }


  )
}

handleAddToCart = (id) => {
  if(this.state.selectedOptionIndex === '') {
    console.log('test');
    let selectedIndex = '1'
    let selected = this.state.itemView[0].option1
    let price = this.state.itemView[0].option1price
    this.props.addToCart(id, selected, selectedIndex, price);
  } else {
    let selected = this.state.selectedOption;
    let selectedIndex = this.state.selectedOptionIndex;
    let price = this.state.itemView[0][`option${selectedIndex}price`]
    console.log(price);
    this.props.addToCart(id, selected, selectedIndex, price);
  }
}

onChange = (e, et) => {
  console.log('selectedoption:', et.selectedOptions[0].text, 'selectedOptionIndex:', e);
  this.setState({selectedOption: et.selectedOptions[0].text, selectedOptionIndex : e})
  this.setState({selectedPrice: <b style={{background: 'coral', color: '#f8f9fa', boxShadow: '3px 0px 13px lightcoral', borderRadius: '15px', padding: '5px', fontSize: '19px'}} className='mr-3'>${this.state.itemView[0][`option${e}price`]}</b>})

  if(et.selectedOptions[0].text.includes('(Out of stock)')) {
    this.setState({outOfStock: <p className='mt-3'>This option is out of stock. Please select another option.</p>, addButton: ''})
  } else {
    this.setState({addButton: <button style={{width: '70%'}} className='btn btn-block btn-secondary mt-2 form-control mb-4' onClick={() => this.handleAddToCart(this.state.itemView[0].id)}>Add to cart</button>})
    this.setState({outOfStock: ''})
  }
}

render() {
  let item = this.state.itemView.length ?
  (
    this.state.itemView.map(item => {
      return (
        <div key={item.id}>
          <Link to={'/' + item.category.toLowerCase()}>View all <span>{item.category}</span></Link> <br/>
          <Link to={'/' + item.brand}>View {item.category} by <span>{item.brand}</span></Link>

          <Row className="collection-item avatar text-center">
            <Col>
              <span className="title">{item.title}</span>
            </Col>
            <Col>
              <span className="title">{item.title}</span>
            </Col>
            <Col>
              <span className="title">{item.title}</span>
            </Col>
          </Row>

          <Row className="item-desc justify-content-center text-right">
            <Col xs='7'>
              <Lightbox thumbnailWidth='25rem' thumbnailHeight='20rem' images={
                  [
                    {
                      src: require(`./../images/${this.state.itemView[0].image1}.jpg`),
                      title: 'image title',
                      description: 'image description'
                    }
                  ]
                }/>
              </Col>

              <Col className='text-center item-view-info' xs='4'>
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


            <div className="item-img text-center mt-4 mb-4">
              <Lightbox images={
                  this.state.images
                }/>
              </div>

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
      addToCart: (id, selected, selectedIndex, price) => {(dispatch(addToCart(id, selected, selectedIndex, price)))}
    }
  }

  export default connect(state => state, mapDispatchToProps)(ItemView);
