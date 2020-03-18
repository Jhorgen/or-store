import React, { Component } from 'react'
import { Row } from 'reactstrap'
import Footer from './Footer'

const About = () => {
    return (
      <div className='footer-control'>
        <div className='container'>
        <Row className='justify-content-center mt-2'>
        <img style={{width: '100%', height: 'fit-content'}} src={require(`./../images/orb-about.jpeg`)} alt="Outer Rim Storefront" title="Outer Rim Storefront"/>
        </Row>
        <div>
          <hr style={{width: '90%'}}/>
          <h5 className='text-center add-font'>Who We Are</h5>
          <hr style={{width: '75%'}}/>
          <p className='add-font'><b>The Outer Rim</b> is Portland’s family owned and operated bike shop. Our goal is to meet your individual bike needs and offer superior customer service. We stock everything from BMX and Mountain to Commuter and E-bikes. Our BMX inventory is now available online through our web store. Check out our popular products by Snafu, Colony, and other hard to come by parts!</p>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }

export default About;
