import React, { Component } from 'react'
import { Row } from 'reactstrap'
import Footer from './Footer'

const Contact = () => {
    return (
      <div className='footer-control'>
        <div className='container'>
        <Row className='justify-content-center mt-2'>
        <img style={{width: '100%', height: 'fit-content'}} src={require(`./../images/orb-about.jpeg`)} alt="Outer Rim Storefront" title="Outer Rim Storefront"/>
        </Row>
        <div>
          <hr style={{width: '90%'}}/>
          <h5 className='text-center add-font'>Contact Us</h5>
          <hr style={{width: '75%'}}/>
            <p className='add-font'>For questions or product information, contact us at <b>TheOuterRimShop.inquiry@gmail.com</b>.</p>
        </div>

        <div className='mt-5 text-left'>
          <hr style={{width: '90%'}}/>
          <h5 className='text-center add-font'>Returns</h5>
          <hr style={{width: '75%'}}/>
            <p className='add-font'>Returns are accepted within 30 days if the product is unopened & unused. Please contact us and include the following information:</p>
            <ul>
              <li>First & last name.</li>
              <li>Date of purchase.</li>
              <li>Products to be returned.</li>
            </ul>
        </div>
      </div>
      <Footer/>
      </div>
    )
  }

export default Contact;
