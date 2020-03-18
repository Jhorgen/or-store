import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <Row style={{background: "black", margin: '0', borderTop: '3px solid #343a40'}} className="text-center align-items-center">
      <Col className='mt-4'>
        <Link className='text-secondary add-font' to='/about'><p style={{fontSize: '14px'}}>About us</p></Link>
        <Link className='text-secondary add-font' to='/contact'><p style={{fontSize: '14px'}}>Contact us</p></Link>
        <Link className='text-secondary add-font' to='/contact'><p style={{fontSize: '14px'}}>Return policy</p></Link>
      </Col>

      <Col className='mt-n5 footer-logo-toggle'>
        <img className="mb-n5" style={{height: '13rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
        <p className="text-secondary add-font" style={{margin: '0', marginBottom: '5px', fontSize: '14px'}}>(503) 278-3235</p>
        <p className="text-secondary add-font" style={{fontSize: '14px'}}>10625 NE Halsey. Portland, OR 97220</p>
      </Col>

      <Col className='text-light mt-4 mb-2'>
        <div>
          <a className='mr-3' href="https://www.facebook.com/outerrimbicycles/" target="about_blank" title="Our Facebook page">
            <FontAwesomeIcon className='text-secondary' style={{fontSize: '1.7rem'}} icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/outerrimbicycles/" target="about_blank" title="Our Instagram page">
            <FontAwesomeIcon className='text-secondary' style={{fontSize: '1.65rem'}} icon={faInstagram} />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default Footer;
