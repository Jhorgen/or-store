import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <Row style={{background: "black", margin: '0'}} className="text-center align-items-center">
      <Col className='mt-4'>
        <Link className='text-light' to='/'><p>About us</p></Link>
        <Link className='text-light' to='/'><p>Contact us</p></Link>
        <Link className='text-light' to='/'><p>Return policy</p></Link>
      </Col>

      <Col className='mt-n5'>
        <img className="mb-n5" style={{height: '13rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
        <p className="text-white">(503) 278-3235</p>
        <p className="text-white">10625 NE Halsey. Portland, OR 97220</p>
      </Col>

      <Col className='text-light mt-4 mb-2'>
        <div className='pb-2'>
          <img className='pr-2' src={ require(`./../images/garage-icon.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
          <img src={ require(`./../images/cycle-dog-icon.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
        </div>
        <div className='pb-2'>
          <img className='pr-2' src={ require(`./../images/acima-icon.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
          <img src={ require(`./../images/shimano-icon.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
        </div>
      </Col>
    </Row>
  )
}

export default Footer;
