import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Navbar = () => {
  return(
    <div>
      <Row className="justify-content-center">
        <Link to="/">
      <img style={{height: '13rem'}} src={ require(`./../images/orb-logo.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
      </Link>
      </Row>
      <Row className="justify-content-around m-5">
      <Link to="/">Categories</Link>
         <Link to="/cart">My cart</Link>
         <Link to="/cart"><i>Search</i></Link>
         <div>
         <img className="pr-3" src={ require(`./../images/fb-logo.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
         <img src={ require(`./../images/insta-logo.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
         </div>
    </Row>
    </div>
  )
}

export default Navbar;
