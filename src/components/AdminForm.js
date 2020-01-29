import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

class AdminForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.item.category,
      brand: this.props.item.brand,
      title: this.props.item.title,
      description: this.props.item.description,
      spec1: this.props.item.spec1,
      spec2: this.props.item.spec2,
      spec3: this.props.item.spec3,
      spec4: this.props.item.spec4,
      spec5: this.props.item.spec5,
      spec6: this.props.item.spec6,
      spec7: this.props.item.spec7,
      spec8: this.props.item.spec8,
      spec9: this.props.item.spec9,
      spec10: this.props.item.spec10,
      option1: this.props.item.option1,
      option2: this.props.item.option2,
      option3: this.props.item.option3,
      option4: this.props.item.option4,
      option5: this.props.item.option5,
      option6: this.props.item.option6,
      option7: this.props.item.option7,
      option8: this.props.item.option8,
      option9: this.props.item.option9,
      option10: this.props.item.option10,
      option1quantity: this.props.item.option1quantity,
      option2quantity: this.props.item.option2quantity,
      option3quantity: this.props.item.option3quantity,
      option4quantity: this.props.item.option4quantity,
      option5quantity: this.props.item.option5quantity,
      option6quantity: this.props.item.option6quantity,
      option7quantity: this.props.item.option7quantity,
      option8quantity: this.props.item.option8quantity,
      option9quantity: this.props.item.option9quantity,
      option10quantity: this.props.item.option10quantity,
      option1price: this.props.item.option1price,
      option2price: this.props.item.option2price,
      option3price: this.props.item.option3price,
      option4price: this.props.item.option4price,
      option5price: this.props.item.option5price,
      option6price: this.props.item.option6price,
      option7price: this.props.item.option7price,
      option8price: this.props.item.option8price,
      option9price: this.props.item.option9price,
      option10price: this.props.item.option10price,
      saleprice: this.props.item.saleprice,
      image1: this.props.item.image1,
      image2: this.props.item.image2,
      image3: this.props.item.image3,
      image4: this.props.item.image4,
      image5: this.props.item.image5,
      image6: this.props.item.image6,
      image7: this.props.item.image7,
      image8: this.props.item.image8,
      image9: this.props.item.image9,
      image10: this.props.item.image10,
      updated: ''
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})

    this.setState({updated: <span onClick={() => this.postUpdate()} className='btn btn-info btn-block mb-3 ml-4 mt-2'>Update</span>})
  }

  postUpdate = () => {
    this.setState({updated: ''})
  }

  handleBlur = () => {
    console.log('test');
    const item = {
      category: this.state.category,
      brand: this.state.brand,
      title: this.state.title,
      description: this.state.description,
      spec1: this.state.spec1,
      spec2: this.state.spec2,
      spec3: this.state.spec3,
      spec4: this.state.spec4,
      spec5: this.state.spec5,
      spec6: this.state.spec6,
      spec7: this.state.spec7,
      spec8: this.state.spec8,
      spec9: this.state.spec9,
      spec10: this.state.spec10,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
      option5: this.state.option5,
      option6: this.state.option6,
      option7: this.state.option7,
      option8: this.state.option8,
      option9: this.state.option9,
      option10: this.state.option10,
      option1quantity: this.state.option1quantity,
      option2quantity: this.state.option2quantity,
      option3quantity: this.state.option3quantity,
      option4quantity: this.state.option4quantity,
      option5quantity: this.state.option5quantity,
      option6quantity: this.state.option6quantity,
      option7quantity: this.state.option7quantity,
      option8quantity: this.state.option8quantity,
      option9quantity: this.state.option9quantity,
      option10quantity: this.state.option10quantity,
      option1price: this.state.option1price,
      option2price: this.state.option2price,
      option3price: this.state.option3price,
      option4price: this.state.option4price,
      option5price: this.state.option5price,
      option6price: this.state.option6price,
      option7price: this.state.option7price,
      option8price: this.state.option8price,
      option9price: this.state.option9price,
      option10price: this.state.option10price,
      saleprice: this.state.saleprice,
      image1: this.state.image1,
      image2: this.state.image2,
      image3: this.state.image3,
      image4: this.state.image4,
      image5: this.state.image5,
      image6: this.props.item.image6,
      image7: this.props.item.image7,
      image8: this.props.item.image8,
      image9: this.props.item.image9,
      image10: this.props.item.image10,
    }
    axios.put (
      `http://localhost:3000/api/v1/products/${this.props.item.id}`,
      {
        product: item
      })
      .then(response => {
        console.log('response:', response);
        this.props.updateItem(response.data)
      })
      .catch(error => {
        console.log('error:', error);
      })
    }


    render() {
      return (
        <div>
          <form onBlur={this.handleBlur}>
            <div style={{width: '20rem'}} className="card m-3">
              <div className="card-image text-center m-3">
                <Link to={'/item/' + this.props.item.title.split(' ').join('')} onClick={() => {this.checkLink(this.props.item)}}>
                  <img style={{height: '13rem', width: '100%'}} src={ require(`./../images/${this.props.item.image1}.jpg`)} alt={this.props.item.title}/>
                </Link>
                <div><span className="card-title">{this.props.item.brand} {this.props.item.title}</span></div>
                <hr/>
              </div>

              <Row className="card-content justify-content-end mr-4">

                {this.state.updated}

                <Row className='m-1'>
                  <span className='text-primary m-1'>Category:</span>
                  <input className='input' name="category" placeholder='Enter Category' value={this.state.category} onChange={this.handleInput} ref={this.props.titleRef} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Brand:</span>
                  <input className='input' name="brand" placeholder='Enter Brand' value={this.state.brand} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Title:</span> <input className='input'
                    name="title" placeholder='Enter Title' value={this.state.title} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 1:</span>
                  <input className='input' name="option1" placeholder='Enter Option 1' value={this.state.option1} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 2:</span>
                  <input className='input' name="option2" placeholder='Enter Option 2' value={this.state.option2} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 3:</span>
                  <input className='input' name="option3" placeholder='Enter Option 3' value={this.state.option3} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 4:</span>
                  <input className='input' name="option4" placeholder='Enter Option 4' value={this.state.option4} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 5:</span>
                  <input className='input' name="option5" placeholder='Enter Option 5' value={this.state.option5} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 6:</span>
                  <input className='input' name="option6" placeholder='Enter Option 6' value={this.state.option6} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 7:</span>
                  <input className='input' name="option7" placeholder='Enter Option 7' value={this.state.option7} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 8:</span>
                  <input className='input' name="option8" placeholder='Enter Option 8' value={this.state.option8} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 9:</span>
                  <input className='input' name="option9" placeholder='Enter Option 9' value={this.state.option9} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 10:</span>
                  <input className='input' name="option10" placeholder='Enter Option 10' value={this.state.option10} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 1 Qty:</span>
                  <input className='input' name="option1quantity" placeholder='Enter Quantity (Option 1)' value={this.state.option1quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 2 Qty:</span>
                  <input className='input' name="option2quantity" placeholder='Enter Quantity (Option 2)' value={this.state.option2quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 3 Qty:</span>
                  <input className='input' name="option3quantity" placeholder='Enter Quantity (Option 3)' value={this.state.option3quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 4 Qty:</span>
                  <input className='input' name="option4quantity" placeholder='Enter Quantity (Option 4)' value={this.state.option4quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 5 Qty:</span>
                  <input className='input' name="option5quantity" placeholder='Enter Quantity (Option 5)' value={this.state.option5quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 6 Qty:</span>
                  <input className='input' name="option6quantity" placeholder='Enter Quantity (Option 6)' value={this.state.option6quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 7 Qty:</span>
                  <input className='input' name="option7quantity" placeholder='Enter Quantity (Option 7)' value={this.state.option7quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 8 Qty:</span>
                  <input className='input' name="option8quantity" placeholder='Enter Quantity (Option 8)' value={this.state.option8quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 9 Qty:</span>
                  <input className='input' name="option9quantity" placeholder='Enter Quantity (Option 9)' value={this.state.option9quantity} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 10 Qty:</span>
                  <input className='input' name="option10quantity" placeholder='Enter Quantity (Option 10)' value={this.state.option10quantity} onChange={this.handleInput} />
                </Row>



                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 1 Price:</span> <input className='input'
                    name="option1price" placeholder='Option 1 Price' value={this.state.option1price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 2 Price:</span> <input className='input'
                    name="option2price" placeholder='Option 2 Price' value={this.state.option2price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 3 Price:</span> <input className='input'
                    name="option3price" placeholder='Option 3 Price' value={this.state.option3price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 4 Price:</span> <input className='input'
                    name="option4price" placeholder='Option 4 Price' value={this.state.option4price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 5 Price:</span> <input className='input'
                    name="option5price" placeholder='Option 5 Price' value={this.state.option5price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 6 Price:</span> <input className='input'
                    name="option6price" placeholder='Option 6 Price' value={this.state.option6price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 7 Price:</span> <input className='input'
                    name="option7price" placeholder='Option 7 Price' value={this.state.option7price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 8 Price:</span> <input className='input'
                    name="option8price" placeholder='Option 8 Price' value={this.state.option8price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 9 Price:</span> <input className='input'
                    name="option9price" placeholder='Option 9 Price' value={this.state.option9price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Option 10 Price:</span> <input className='input'
                    name="option10price" placeholder='Option 10 Price' value={this.state.option10price} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Sale price:</span>
                  <input className='input' name="saleprice" placeholder='Sale price' value={this.state.saleprice} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 1:</span>
                  <input className='input' name="image1" placeholder='Enter Image 1' value={this.state.image1} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 2:</span>
                  <input className='input' name="image2" placeholder='Enter Image 2' value={this.state.image2} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 3:</span>
                  <input className='input' name="image3" placeholder='Enter Image 3' value={this.state.image3} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 4:</span>
                  <input className='input' name="image4" placeholder='Enter Image 4' value={this.state.image4} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 5:</span>
                  <input className='input' name="image5" placeholder='Enter Image 5' value={this.state.image5} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 6:</span>
                  <input className='input' name="image6" placeholder='Enter Image 6' value={this.state.image6} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 7:</span>
                  <input className='input' name="image7" placeholder='Enter Image 7' value={this.state.image7} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 8:</span>
                  <input className='input' name="image8" placeholder='Enter Image 8' value={this.state.image8} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 9:</span>
                  <input className='input' name="image9" placeholder='Enter Image 9' value={this.state.image9} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Image 10:</span>
                  <input className='input' name="image10" placeholder='Enter Image 10' value={this.state.image10} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Description:</span> <input className='input'
                    name="description" placeholder='Enter Description' value={this.state.description} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 1:</span>
                  <input className='input' name="spec1" placeholder='Enter Spec 1' value={this.state.spec1} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 2:</span>
                  <input className='input' name="spec2" placeholder='Enter Spec 2' value={this.state.spec2} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 3:</span>
                  <input className='input' name="spec3" placeholder='Enter Spec 3' value={this.state.spec3} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 4:</span>
                  <input className='input' name="spec4" placeholder='Enter Spec 4' value={this.state.spec4} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 5:</span>
                  <input className='input' name="spec5" placeholder='Enter Spec 5' value={this.state.spec5} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 6:</span>
                  <input className='input' name="spec6" placeholder='Enter Spec 6' value={this.state.spec6} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 7:</span>
                  <input className='input' name="spec7" placeholder='Enter Spec 7' value={this.state.spec7} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 8:</span>
                  <input className='input' name="spec8" placeholder='Enter Spec 8' value={this.state.spec8} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 9:</span>
                  <input className='input' name="spec9" placeholder='Enter Spec 9' value={this.state.spec9} onChange={this.handleInput} />
                </Row>

                <Row className='m-1'>
                  <span className='text-primary m-1'>Spec 10:</span>
                  <input className='input' name="spec10" placeholder='Enter Spec 10' value={this.state.spec10} onChange={this.handleInput} />
                </Row>

              </Row>
              <button onClick={() => this.deleteItem(this.props.item.id)}>Delete</button>
            </div>
          </form>
        </div>

      )
    }
  }

  export default AdminForm;
