import { Facebook, GitHub, Instagram, Mail, Map, Phone, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='d-flex containerf'>
      <div className="d-flex left">
        <h1>SHOPPE</h1>
        <span className="desc2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, accusantium? Optio fugit saepe beatae impedit eum sit unde cupiditate iste!</span>
        <div className="socialcont d-flex">
          <div className="socialicons">
          <Facebook/>
          </div>
          <div className="socialicons">
          <Instagram/>
          </div>
          <div className="socialicons">
          <Twitter/>
          </div>
          <div className="socialicons">
          <GitHub/>
          </div>
        </div>
      </div>
      <div className="d-flex center">
        <h4 style={{marginBottom:"20px"}}>Useful Links</h4>
        <ul className='ul'>
          <li className='li'>Home</li>
          <li className='li'>Cart</li>
          <li className='li'>Man Fashion</li>
          <li className='li'>Woman Fashion</li>
          <li className='li'>Accessories</li>
          <li className='li'>My Account</li>
          <li className='li'>Order Tracking</li>
          <li className='li'>Wishlist</li>
        </ul>
      </div>
      <div className="d-flex right">
        <h4 style={{marginBottom:"20px"}}>Contact</h4>
        <div className="contact">
          <Map style={{marginRight:"10px"}}/>
          Sai Nagar Colony,Uppal Depot,Hyd
          </div>
          <div className="contact">
            <Phone style={{marginRight:"10px"}}/>
            +91-7893937071
          </div>
          <div className="contact">
            <Mail style={{marginRight:"10px"}}/>
            harshavardhan9680@gmail.com
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" className="payment" />
      </div>
    </div>
  )
}

export default Footer
