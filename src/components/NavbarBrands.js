import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Sticky } from 'react-sticky';


class NavbarBrands extends Component {
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
    return (
      <div>
        <Col className='mb-2'>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
              style={{color: 'white'}}
              >
              <span className='navbar-font'>Brands</span>
            </DropdownToggle>
            <DropdownMenu>

              <div className='text-center'>
                <Link style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center' to='/colony-all'>Colony</Link>
                <Link style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center' to='/snafu-all'>Snafu</Link>
              </div>

              <div className='text-center'>
              <Link to='/fit-all' style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'>Fit</Link>
              <Link to='/tlc-all' style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'>TLC</Link>
              </div>

              <div className='text-center'>
                <Link to='/primo-all' style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'>Primo</Link>
              <Link to='/pyc-all' style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'>PYC</Link>
            </div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/volume-all'>Volume</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/blackops-all'>Black Ops</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/tallorder-all'>Tall Order</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/kmc-all'>KMC</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/odyssey-all'>Odyssey</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/shadowconspiracy-all'>Shadow Conspiracy</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/kool-all'>Kool</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/sandm-all'>S&M</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/total-all'>Total</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/division-all'>Division</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/demolition-all'>Demolition</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/fist-all'>Fist</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/sunday-all'>Sunday</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/odi-all'>Odi</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/bsd-all'>BSD</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/fsa-all'>FSA</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/gsport-all'>GSport</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/kore-all'>Kore</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/federal-all'>Federal</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/stranger-all'>Stranger</Link></div>

              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/academy-all'>Academy</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '3px'}} className='text-center'><Link to='/maxxis-all'>Maxxis</Link></div>

            </DropdownMenu>
          </Dropdown>
        </Col>
      </div>
    )
  }
}

export default NavbarBrands;
