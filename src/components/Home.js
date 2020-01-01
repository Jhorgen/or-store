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

  componentDidMount = () => {
    this.props.loadSelectedItemData(this.props.category);
    setTimeout( () => {
  this.setState({array: this.props.items.map(item=>{
   return (
     <div className="card" key={item.id}>
       <div className="card-image">
         <img style={{height: '13rem'}} src={item.image1} alt={item.title}/>
         <span className="card-title">{item.title}</span>
         <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i onClick={() => this.handleAddClick(item.id)} className="material-icons">add</i></span>
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

  render() {

    return(
      <div className="container">
        <h3 className="text-center">Our items</h3>
        <div>
        <Row className="justify-content-center">
          { this.state.tester
          ? null
          : <div>{this.state.array}</div>
          }
        </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {(dispatch(addToCart(id)))},
    loadSelectedItemData: (category) => {(dispatch(loadSelectedItemData(category)))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
