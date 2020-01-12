import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lengthCheck: false
    }
  }

  tester = () => {
    console.log(this.props.cartItems);
  }

  render() {
    return(
      <div>
        <Row className="justify-content-center">
          <Link to="/">
            <img style={{height: '13rem'}} src={ require(`./../images/orb-logo.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
          </Link>
        </Row>
        <Row className="justify-content-around m-5 test">
          <Link to="/">Categories</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/cart"><span className="pr-2">Cart</span><b>[{this.props.form.addedItems.length}]</b></Link>
          <Link to="/cart"><i>Search</i></Link>
          <div>
            <a href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
              <img className="pr-3" src={ require(`./../images/fb-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
            </a>
            <a href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
              <img src={ require(`./../images/insta-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
            </a>
          </div>
        </Row>
      </div>
    )
  }
}

export default connect((state) => state)(Navbar);
