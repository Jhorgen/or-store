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
            <DropdownMenu className='nav-toggle-padding'>
              <div className='nav-dropdown-toggle-flex'>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/bars'>Bars</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/brakes'>Brakes</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/hubs'>Hubs</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/rims'>Rims</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/pedals'>Pedals</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/sprockets'>Sprockets</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/chains'>Chains</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/seats'>Seats</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/forks'>Forks</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/headsets'>Heatsets</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/gloves'>Gloves</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/pegs'>Pegs</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/grips'>Grips</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/titanium'>Titanium Hardware</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/cranks'>Cranks</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/stems'>Stems</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}>Tires</span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}><Link className='text-dark' to='/wheels'>Wheels</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '17px', padding: '4px'}} className='text-center' onClick={() => this.toggle}>Frames</span><hr className='nav-dropdown-hr bg-info'/>
              </div>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </span>
    )
  }
}

export default NavbarCategories;
