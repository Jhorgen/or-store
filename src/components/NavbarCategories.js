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
      <span className='mb-2'>
        <Col>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen}>
            <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
            style={{color: 'white'}}>
              <Link to={'/'} className='navbar-font text-light' style={{textDecoration: 'none'}}>Categories</Link>
            </DropdownToggle>
            <DropdownMenu className='nav-toggle-padding bg-dark'>
              <div className='nav-dropdown-toggle-flex'>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/bars'>Bars</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/brakes'>Brakes</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/hubs'>Hubs</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/rims'>Rims</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/pedals'>Pedals</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/sprockets'>Sprockets</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/chains'>Chains</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/seats'>Seats</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/forks'>Forks</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/headsets'>Heatsets</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/gloves'>Gloves</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/pegs'>Pegs</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/grips'>Grips</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/titanium'>Titanium Hardware</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/cranks'>Cranks</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/stems'>Stems</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center text-light' onClick={() => this.props.onClick()}>Tires</span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center text-light' onClick={() => this.props.onClick()}><Link className='add-font' style={{color: '#fff'}} to='/wheels'>Wheels</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
              <span style={{fontWeight: 'bold', fontSize: '15.5px', padding: '4px'}} className='text-center text-light' onClick={() => this.props.onClick()}>Frames</span><hr className='nav-dropdown-hr bg-info'/>
              </div>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </span>
    )
  }
}

export default NavbarCategories;
