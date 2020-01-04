import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

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
         <Link to="/cart"><span>Cart</span></Link>
         <Link to="/cart"><i>Search</i></Link>
         <div>
        <a href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
         <img className="pr-3" src={ require(`./../images/fb-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
        </a>
        <a href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
          <img src={ require(`./../images/insta-logo.webp`)} alt={"The Outer Rim Bicycle Shop"}/>
        </a>
         </div>
    </Row>
    </div>
  )
}

export default Navbar;
