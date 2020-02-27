import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Sticky } from 'react-sticky';


class NavbarCategories extends Component {
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
      <div className='mb-2'>
        <Col>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
            style={{color: 'white'}}>
              <span className='navbar-font'>Categories</span>
            </DropdownToggle>
            <DropdownMenu>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/bars'>Bars</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/brakes'>Brakes</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/hubs'>Hubs</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/rims'>Rims</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/pedals'>Pedals</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/sprockets'>Sprockets</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/chains'>Chains</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/seats'>Seats</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/forks'>Forks</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/headsets'>Heatsets</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/gloves'>Gloves</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/pegs'>Pegs</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/grips'>Grips</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/titanium'>Titanium Hardware</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/cranks'>Cranks</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/stems'>Stems</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/tires'>Tires</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/wheels'>Wheels</Link></div>
              <div style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link to='/frames'>Frames</Link></div>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </div>
    )
  }
}

export default NavbarCategories;
