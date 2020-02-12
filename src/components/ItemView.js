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
      defaultOption: 'Format this thing',
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
      selectedOption: '',
      selectedOptionIndex: '',
      inStock: '',
    }
  }

  componentDidMount = () => {
    let images = []
    let title = this.props.match.params.title
    console.log(this.props.match.params.test);
    console.log(title);
    fetch(`http://localhost:3000/api/v1/products/?title=${title}`)
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


          <Row className="item-desc justify-content-center align-items-center">
            <Col>
          <Lightbox  thumbnailWidth='17rem' thumbnailHeight='17rem' images={
            [
              {
                src: require(`./../images/${this.state.itemView[0].image1}.jpg`),
                title: 'image title',
                description: 'image description'
              }
            ]
          }/>
      </Col>

        <Col>
          <p className="pr-4"><b>Price: ${item.price}</b></p>
            <form>
              <select ref="selectMark"
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
          <p className="btn btn-info">Add to cart</p>
        </Col>
      </Row>


            <div className="item-img text-center mt-4 mb-4">
              <Lightbox images={

                  this.state.images

              }/>
            </div>


          <Row className="justify-content-center">
            <p className="item-description-format">{item.description}</p>
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
    addToCart: (id) => {(dispatch(addToCart(id)))}
  }
}

export default connect(state => state, mapDispatchToProps)(ItemView);
