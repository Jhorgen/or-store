import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//delete Quantity in condition


class Adminitem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qtyDisplay: <b>Qty</b>,
      noQty: ''
    }
  }

ComponentDidMount = () => {
  console.log(this.prop.item);
}

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
                <img style={{height: '13rem', width: '100%'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.title}/>
              </Link>
              <div><span className="card-title">{this.props.item.brand} {this.props.item.title}</span></div>
              <hr/>
            </div>
            <div className="card-content m-2">
              <span onClick={this.handleClick} className='btn btn-success btn-block mb-2'>Edit</span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Category</span>: <span className='text-danger'>{this.props.item.category}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Brand</span>: <span className='text-danger'>{this.props.item.brand}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Title</span>: <span className='text-danger'>{this.props.item.title}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Description</span>: <span className='text-danger'>{this.props.item.description}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 1</span>: <span className='text-danger'>{this.props.item.option1}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option1quantity <= 0 && this.props.item.option1 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option1 === '' ? '' : this.props.item.option1quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 2</span>: <span className='text-danger'>{this.props.item.option2}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option2quantity <= 0 && this.props.item.option2 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option2quantity <= 0 && this.props.item.option2 === '' ? '' : this.props.item.option2quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 3</span>: <span className='text-danger'>{this.props.item.option3}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option3 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option3 === '' ? '' : this.props.item.option3quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 4</span>: <span className='text-danger'>{this.props.item.option4}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option4 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option4 === '' ? '' : this.props.item.option4quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 5</span>: <span className='text-danger'>{this.props.item.option5}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option5 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option5 === '' ? '' : this.props.item.option8quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 6</span>: <span className='text-danger'>{this.props.item.option6}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option6 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option6 === '' ? '' : this.props.item.option6quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 7</span>: <span className='text-danger'>{this.props.item.option7}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option7 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option7 === '' ? '' : this.props.item.option7quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 8</span>: <span className='text-danger'>{this.props.item.option8}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option8 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option8 === '' ? '' : this.props.item.option8quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 9</span>: <span className='text-danger'>{this.props.item.option9}</span> <span style={{fontSize: '.8rem'}}>{this.props.item.option9 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option9 === '' ? '' : this.props.item.option9quantity}</b></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Option 10</span>: <span className='text-danger'>{this.props.item.option10}</span></span> <span style={{fontSize: '.8rem'}}>{this.props.item.option10 === '' ? this.state.noQty : this.state.qtyDisplay }</span>: <b style={{fontSize: '.8rem'}}>{this.props.item.option10 === '' ? '' : this.props.item.option10quantity}</b><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Price</span>: <span className='text-danger'>{this.props.item.price}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Sale price</span>: <span className='text-danger'>{this.props.item.saleprice}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Image 1</span>: <span className='text-danger'>{this.props.item.image1}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Image 2</span>: <span className='text-danger'>{this.props.item.image2}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Image 3</span>: <span className='text-danger'>{this.props.item.image3}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Image 4</span>: <span className='text-danger'>{this.props.item.image4}</span></span><br/>
              <span onClick={this.handleClick}><span className='text-primary'>Image 5</span>: <span className='text-danger'>{this.props.item.image5}</span></span><br/>
            </div>
            <button onClick={this.handleDelete} className="deleteButton btn btn-danger mt-1">Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Adminitem;
