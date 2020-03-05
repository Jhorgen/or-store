import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import NavbarCategories from './NavbarCategories'
import NavbarBrands from './NavbarBrands'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText
} from 'reactstrap';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


class OrbNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lengthCheck: false,
      dropdownOpen: false,
      searchBarDispay: 'none',
      searchInput: '',
      searchButton: 'none'
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

  searchBarToggle = () => {
    this.setState({searchBarDispay: ''})
    console.log('test');
  }

  handleSearchInput = (e, name) => {
    this.setState({[name]: e.target.value})
    this.state.searchInput.length > 1 ? this.setState({searchButton: ''}) : this.setState({searchButton: 'none'})
  }



  render() {
    return(
      <div>
        <Sticky>
          {({ style }) => <div style={{ ...style, zIndex: '2', borderBottomStyle: 'ridge' }}>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/"><Link to='/'><img className="mb-n5" style={{height: '12rem', marginTop: '-3.5rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"}/></Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.dropdownOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavbarCategories />
                </NavItem>
                <NavItem>
                  <NavbarBrands />
                </NavItem>
                <NavItem className='mr-2 mb-2'>
                  <Col>
                    <Link to="/cart"><span className="text-light mr-2 navbar-font"><FontAwesomeIcon style={{fontSize: '1.6rem'}} icon={faShoppingCart} onClick={this.toggleAddDisplay} />
                    </span><b className='text-info' style={{fontSize: '1rem'}}>{this.props.form.addedItems.length > 0 ? this.props.form.addedItems[0].checkoutquantity  : ''}</b></Link>
                  </Col>
                </NavItem>
                <NavItem>
                  <Col className='d-flex'>
                    <span onClick={() => this.searchBarToggle()} className='text-light navbar-font pr-2'><FontAwesomeIcon style={{fontSize: '1.6rem'}} icon={faSearch} onClick={this.toggleAddDisplay} />
                    </span>
                    <input className='form-control mr-2' style={{display: this.state.searchBarDispay}} onChange={(e) => this.handleSearchInput(e, 'searchInput')}/>
                    <Link to={{ pathname: '/search', state: { searchInput: this.state.searchInput} }}><button className='btn btn-info' style={{display: this.state.searchButton}}>Go</button></Link>
                  </Col>
                </NavItem>
              </Nav>
            </Collapse>
              <div className='icon-toggle'>
                <a href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
                  <img className="pr-3" style={{height: '2rem'}} src={ require(`./../images/fb-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
                </a>
                <a href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
                  <img style={{height: '2rem'}} src={ require(`./../images/insta-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
                </a>
              </div>
          </Navbar>
        </div>}
      </Sticky>
    </div>
  )
}
}



export default connect((state) => state)(OrbNavbar);
