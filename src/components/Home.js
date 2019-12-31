import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import {addToCart, loadItemData} from './../actions/cartActions.js';

class Home extends Component {

  handleAddClick = (id, item) => {
    this.props.addToCart(id);

  localStorage.setItem('storeObj', JSON.parse(item));

  console.log(localStorage);
  }


  render() {

    let itemList = this.props.items.map(item=>{
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img style={{height: '13rem'}} src={item.img} alt={item.title}/>
            <span className="card-title">{item.title}</span>
            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i onClick={() => this.handleAddClick(item.id, item)} className="material-icons">add</i></span>
          </div>
          <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: ${item.price}</b></p>
          </div>
        </div>
      )
    })

    return(
      <div className="container">
        <h3 className="text-center">Our items</h3>
        <div>
        <Row className="justify-content-center">
        {itemList}
        </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {(dispatch(addToCart(id)))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
