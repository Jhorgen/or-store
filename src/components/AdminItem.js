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
              <span onClick={this.handleClick}><span className='text-primary'>Category</span>: <span className='text-danger'>{this.props.item.category}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Brand</span>: <span className='text-danger'>{this.props.item.brand}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Title</span>: <span className='text-danger'>{this.props.item.title}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Description</span>: <span className='text-danger'>{this.props.item.description}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 1</span>: <span className='text-danger'>{this.props.item.option1}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option1quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 2</span>: <span className='text-danger'>{this.props.item.option2}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option2quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 3</span>: <span className='text-danger'>{this.props.item.option3}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option3quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 4</span>: <span className='text-danger'>{this.props.item.option4}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option4quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 5</span>: <span className='text-danger'>{this.props.item.option5}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option5quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 6</span>: <span className='text-danger'>{this.props.item.option6}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option6quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 7</span>: <span className='text-danger'>{this.props.item.option7}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option7quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 8</span>: <span className='text-danger'>{this.props.item.option8}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option8quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 9</span>: <span className='text-danger'>{this.props.item.option9}</span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option9quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 10</span>: <span className='text-danger'>{this.props.item.option10}</span></span> <span style={{fontSize: '.8rem'}}><b>Qty</b></span>: <span className='text-danger'>{this.props.item.option10quantity}</span><br/>
              <span onClick={this.handleClick}>{this.props.item.option1quantity}</span><br/>
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
