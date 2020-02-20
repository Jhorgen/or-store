import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import NavbarCategories from './NavbarCategories'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lengthCheck: false,
      dropdownOpen: false
    }
  }

  tester = () => {
    console.log(this.props.cartItems);
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter = () => {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave = () => {
    this.setState({dropdownOpen: false});
  }

  render() {
    return(
      <div>
        <Sticky>
          {({ style }) => <div className='align-items-center d-flex' style={{ ...style, backgroundColor: 'black', zIndex: '2', height: '4.5rem', borderBottomStyle: 'ridge' }}><Col><Link to='/'><img className="mb-n4" style={{height: '10rem', marginTop: '-2rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"}/></Link></Col>
        <Col>
          <NavbarCategories/>
        </Col>
        <Col>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
              style={{color: 'white'}}
              >
              Brands
            </DropdownToggle>
            <DropdownMenu>
              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Snafu</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Fit</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>TLC</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Primo</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>PYC</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Volume</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'></Link></div>

              <div onClick={() => this.toggle}><Link to='=/colony-all'>Black Ops</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

              <div onClick={() => this.toggle}><Link to='/colony-all'>Colony</Link></div>

            </DropdownMenu>
          </Dropdown>
        </Col>

        <Col>
          <Link to="/cart"><span className="pr-2 text-light">Cart</span><b className='text-info pb-2' style={{fontSize: '1rem'}}>{this.props.form.addedItems.length > 0 ? this.props.form.addedItems.length : ''}</b></Link>
        </Col>
        <Col>
          <Link to="/cart"><span className='text-light'>Search</span></Link>
        </Col>
        <Col>
          <div>
            <a href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
              <img className="pr-3" src={ require(`./../images/fb-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
            </a>
            <a href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
              <img src={ require(`./../images/insta-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
            </a>
          </div>
        </Col>
      </div>}
    </Sticky>
  </div>
)
}
}



export default connect((state) => state)(Navbar);
