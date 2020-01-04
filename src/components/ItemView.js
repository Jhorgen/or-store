import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemView: []
    }
  }

  componentDidMount = () => {
    let id = 2;
    axios.get(`http://localhost:3000/api/v1/products/${id}`)
    .then(response => {
      console.log(response.data);
      this.setState({itemView: [response.data]})
    })
    .catch(error => console.log(error))
  }

  test = ()=> {
    console.log(this.state.itemView.length);
    console.log(this.state.itemView);

  }

  render() {
    let item = this.state.itemView.length ?
    (
      this.state.itemView.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={ require(`./../images/${item.image1}.jpg`)} alt={item.image}/>
            </div>
            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.description}</p>
              <p><b>Price: ${item.price}</b></p>
              <p>
                <b>Quantity: {item.checkoutquantity}</b>
              </p>
              <div className="add-remove">
                <span className="material-icons pr-3" onClick={()=>{this.handleAddQuantity(item.id)}}><FontAwesomeIcon icon={faArrowUp} />
              </span>
              <span className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id, item.price)}}><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
          </div>
        </li>
      )
    })
  )
  :
  (
    <div>
      <p onClick={() => this.test()}>Nothing.</p>
    </div>
  )

  return (
    <div>
      <ul>{item}</ul>
    </div>
  )
}
}

export default ItemView;
