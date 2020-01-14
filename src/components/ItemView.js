import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class ItemView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemView: []
    }
  }

  componentDidMount = () => {;

    let title = this.props.match.params.title
    console.log(title);
    fetch(`http://localhost:3000/api/v1/products/?title=${title}`)
    .then(res => res.json())
    .then(
      data => this.setState({itemView: data}),
      console.log(this.state.itemView)
    )
  }


  render() {
    let item = this.state.itemView.length ?
    (
      this.state.itemView.map(item => {
        return (
          <div key={item.id}>
            <Link to={'/' + item.category}>View all <span>{item.category}</span></Link> <br/>
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
            <div className="item-img text-center mt-4 mb-4">
              <img style={{height: "15rem"}} src={ require(`./../images/${item.image1}.jpg`)} alt={item.image}/>
            </div>
          <Row className="item-desc justify-content-center align-items-center">
            <p className="pr-4"><b>Price: ${item.price}</b></p>
            <p className="btn btn-info">Add to cart</p>
          </Row>
          <Row className="justify-content-center">
            <p className="item-description-format">{item.description}</p>
            </Row>
        </div>
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
        {item}
      </div>
    )
  }
}

export default ItemView;
