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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"


class OrbNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lengthCheck: false,
      dropdownOpen: false,
      searchBarDispay: '',
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
    this.setState({searchBarDispay: <input className='form-control mr-2' onChange={(e) => this.handleSearchInput(e, 'searchInput')} />
})
  }

  handleSearchInput = (e, name) => {
    this.setState({[name]: e.target.value})
    this.setState({searchButton: ''})
  }

  searchToggle = () => {
    if(this.state.searchInput.length > -1) {
      this.setState({searchBarDispay: '', searchButton: 'none', dropdownOpen: false})
    }
  }


  render() {
    return(
      <div>
        <Sticky>
          {({ style }) => <div style={{ ...style, zIndex: '2', borderBottomStyle: 'ridge' }}>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/"><Link to='/' onClick={this.searchToggle}><img className="mb-n5" style={{height: '12rem', marginTop: '-3.5rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"} title='Orb Home'/></Link></NavbarBrand>
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
                    <Link to="/cart"><span className="text-light mr-2 navbar-font"><FontAwesomeIcon style={{fontSize: '1.6rem'}} icon={faShoppingCart} onClick={this.toggleAddDisplay} title='Cart' />
                  </span><b className='text-info' style={{fontSize: '1rem'}}>{this.props.form.addedItems.length > 0 ? this.props.form.addedItems[0].checkoutquantity  : ''}</b></Link>
                </Col>
              </NavItem>
              <NavItem>
                <Col>
                  <form className='d-flex align-items-center'>
                    <span onClick={() => this.searchBarToggle()} className='text-light navbar-font pr-3 cursor-toggle'><FontAwesomeIcon style={{fontSize: '1.6rem'}} icon={faSearch} onClick={this.toggleAddDisplay} title='Search' />
                  </span>
                  {this.state.searchBarDispay}
                  <Link to={{ pathname: '/search', state: {searchInput: this.state.searchInput, search: 'search'}}}><button onClick={() => this.searchToggle()} className='btn btn-info' type='submit' style={{display: this.state.searchButton}}>Go</button></Link>
                </form>
              </Col>
            </NavItem>
          </Nav>
        </Collapse>
        <div className='icon-toggle flex-column align-items-center'>
          <a href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
            <FontAwesomeIcon className='text-secondary' style={{fontSize: '1.7rem'}} icon={faFacebookF} />
          </a>
          <a className='mt-3' href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
            <FontAwesomeIcon className='text-secondary' style={{fontSize: '1.65rem'}} icon={faInstagram} />
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
