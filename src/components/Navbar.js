import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Navbar = () => {
  return(
    <div>
      <Row className="justify-content-around m-5">
      <Link to="/">Shopping</Link>
         <Link to="/">Shop</Link>
         <Link to="/cart">My cart</Link>
         <Link to="/cart"><i>shopping_cart</i></Link>
    </Row>
    </div>
  )
}

export default Navbar;
