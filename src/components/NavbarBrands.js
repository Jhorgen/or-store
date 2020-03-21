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
      <div className='full-nav'>
        <Col className='mb-2'>
          <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
              style={{color: 'white'}}
              >
              <Link to={'/'} className='navbar-font text-light' style={{textDecoration: 'none'}}>Brands</Link>
            </DropdownToggle>
            <DropdownMenu className='nav-toggle-padding bg-dark'>
              <div className='nav-dropdown-toggle-flex'>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/colony-all'>Colony</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/snafu-all'>Snafu</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/fit-all'>Fit</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/tlc-all'>TLC</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/primo-all'>Primo</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/pyc-all'>PYC</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/volume-all'>Volume</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/blackops-all'>Black Ops</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/tallorder-all'>Tall Order</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/kmc-all'>KMC</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/odyssey-all'>Odyssey</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/shadowconspiracy-all'>Shadow Conspiracy</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/kool-all'>Kool</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/sandm-all'>S&M</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/total-all'>Total</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/spanision-all'>Division</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/demolition-all'>Demolition</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/fist-all'>Fist</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/sunday-all'>Sunday</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/odi-all'>Odi</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/bsd-all'>BSD</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/fsa-all'>FSA</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/gsport-all'>GSport</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/kore-all'>Kore</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/federal-all'>Federal</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/stranger-all'>Stranger</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>

                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/academy-all'>Academy</Link></span><span className='spacer-toggle text-info'>|</span><hr className='nav-dropdown-hr bg-info'/>
                <span style={{fontWeight: 'bold', fontSize: '16px', padding: '3px'}} className='text-center'><Link className='add-font' onClick={() => this.setState({dropdownOpen: false})} style={{color: '#fff'}} to='/maxxis-all'>Maxxis</Link></span>
                </div>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </div>
    )
  }
}

export default NavbarBrands;
