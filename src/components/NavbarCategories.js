import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Sticky } from 'react-sticky';


class NavbarCategories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lengthCheck: false,
      dropdownOpen: true
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
      <span className='mb-2'>
        <Col>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter}  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
            style={{color: 'white'}}>
              <span className='navbar-font'>Categories</span>
            </DropdownToggle>
            <DropdownMenu style={{padding: '2rem'}}>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/bars'>Bars</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/brakes'>Brakes</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/hubs'>Hubs</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/rims'>Rims</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/pedals'>Pedals</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/sprockets'>Sprockets</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/chains'>Chains</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/seats'>Seats</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/forks'>Forks</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/headsets'>Heatsets</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/gloves'>Gloves</Link></span>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/pegs'>Pegs</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/grips'>Grips</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/titanium'>Titanium Hardware</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/cranks'>Cranks</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/stems'>Stems</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/tires'>Tires</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/wheels'>Wheels</Link></span>|
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/frames'>Frames</Link></span>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </span>
    )
  }
}

export default NavbarCategories;
