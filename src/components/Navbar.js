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

              <div onClick={() => this.toggle}><Link to='/snafu-all'>Snafu</Link></div>

              <div onClick={() => this.toggle}><Link to='/fit-all'>Fit</Link></div>

              <div onClick={() => this.toggle}><Link to='/tlc-all'>TLC</Link></div>

              <div onClick={() => this.toggle}><Link to='/primo-all'>Primo</Link></div>

              <div onClick={() => this.toggle}><Link to='/pyc-all'>PYC</Link></div>

              <div onClick={() => this.toggle}><Link to='/volume-all'>Volume</Link></div>

              <div onClick={() => this.toggle}><Link to='/blackops-all'>Black Ops</Link></div>

              <div onClick={() => this.toggle}><Link to='/tallorder-all'>Tall Order</Link></div>

              <div onClick={() => this.toggle}><Link to='/kmc-all'>KMC</Link></div>

              <div onClick={() => this.toggle}><Link to='/odyssey-all'>Odyssey</Link></div>

              <div onClick={() => this.toggle}><Link to='/shadowconspiracy-all'>Shadow Conspiracy</Link></div>

              <div onClick={() => this.toggle}><Link to='/kool-all'>Kool</Link></div>

              <div onClick={() => this.toggle}><Link to='/sandm-all'>S&M</Link></div>

              <div onClick={() => this.toggle}><Link to='/total-all'>Total</Link></div>

              <div onClick={() => this.toggle}><Link to='/division-all'>Division</Link></div>

              <div onClick={() => this.toggle}><Link to='/demolition-all'>Demolition</Link></div>

              <div onClick={() => this.toggle}><Link to='/fist-all'>Fist</Link></div>

              <div onClick={() => this.toggle}><Link to='/sunday-all'>Sunday</Link></div>

              <div onClick={() => this.toggle}><Link to='/odi-all'>Odi</Link></div>

              <div onClick={() => this.toggle}><Link to='/bsd-all'>BSD</Link></div>

              <div onClick={() => this.toggle}><Link to='/fsa-all'>FSA</Link></div>

              <div onClick={() => this.toggle}><Link to='/gsport-all'>GSport</Link></div>

              <div onClick={() => this.toggle}><Link to='/kore-all'>Kore</Link></div>

              <div onClick={() => this.toggle}><Link to='/federal-all'>Federal</Link></div>

              <div onClick={() => this.toggle}><Link to='/stranger-all'>Stranger</Link></div>

              <div onClick={() => this.toggle}><Link to='/academy-all'>Academy</Link></div>

              <div onClick={() => this.toggle}><Link to='/maxxis-all'>Maxxis</Link></div>

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
