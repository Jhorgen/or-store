import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <div style={{background: "black"}}className="text-center">
        <img className="mb-n4" style={{height: '13rem'}} src={ require(`./../images/orb-logo-footer.webp`)} alt={"The Oter Rim Bicycle Shop"}/>
        <p className="text-white">(503) 278-3235</p>
        <p className="text-white">10625 NE Halsey. Portland, OR 97220</p>

        <br/>
        <br/>
      </div>
    </div>
  )
}

export default Footer;
