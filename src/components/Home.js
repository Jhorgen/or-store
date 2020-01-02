import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import {addToCart, loadItemData, loadSelectedItemData} from './../actions/cartActions.js';
import Item1 from './../images/item1.jpg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changed: null,
      array: ''
    }
  }

  componentDidMount = (props) => {
    this.props.loadSelectedItemData(this.props.name);
    setTimeout( () => {
  this.setState({array: this.props.items.map(item=>{
   return (
     <div className="card" key={item.id}>
       <div className="card-image text-center">
         <img style={{height: '13rem'}} src={ require(`./../images/${item.image1}.jpg`)} alt={item.title}/>
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
 })})
  this.setState({changed: false})
  console.log(this.state.changed);
}, 200);
    console.log('items:', this.props.items);
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

    return(
      <div className="container">
        <h3 className="text-center" onClick={() => this.findCat()}>{this.props.name}</h3>
        <div>
        <div>
          { this.state.tester
          ? null
          : <Row className="justify-content-center">{this.state.array}</Row>
          }
        </div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {(dispatch(addToCart(id)))},
    loadSelectedItemData: (category) => {(dispatch(loadSelectedItemData(category)))}
  }
}

export default connect((state)=>state, mapDispatchToProps)(Home);
