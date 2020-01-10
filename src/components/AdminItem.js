import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Adminitem extends Component {

  handleClick = () => {
    this.props.onClick(this.props.item.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.item.id)
  }

  render() {
    return (
      <div>
        <div>
          <div className="card m-4">
            <div className="card-image text-center m-3">
              <Link to={'/item/' + this.props.item.title.split(' ').join('')} onClick={() => {this.checkLink(this.props.item)}}>
                <img style={{height: '13rem'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.title}/>
              </Link>
              <div><span className="card-title">{this.props.item.title}</span></div>
              <hr/>
            </div>
            <div className="card-content">
              <span onClick={this.handleClick}><b>Category</b>: {this.props.item.category}</span><br/>
              <span onClick={this.handleClick}><b>Brand</b>: {this.props.item.brand}</span><br/>
              <span onClick={this.handleClick}>Title: {this.props.item.title}</span><br/>
              <span onClick={this.handleClick}>Description: {this.props.item.description}</span><br/>
              <span onClick={this.handleClick}>Color1: {this.props.item.color1}</span><br/>
              <span onClick={this.handleClick}>Color2: {this.props.item.color2}</span><br/>
              <span onClick={this.handleClick}>Color3: {this.props.item.color3}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.color4}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.color5}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.size1}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.size2}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.size3}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.size4}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.size5}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.quantity}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.price}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.saleprice}</span>
              <span onClick={this.handleClick}>{this.props.item.image1}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.image2}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.image3}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.image4}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.image5}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.title}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.body}</span>
            </div>
            <button onClick={this.handleDelete} className="deleteButton">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Adminitem;
