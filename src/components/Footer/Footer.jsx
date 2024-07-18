import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer >
      <div className="fa-icons">
        < FaInstagram size={20} style={{ color: '#FF4500' }} />
        < FaFacebook size={20} style={{ color: '#FF4500' }} />
        < FaTwitter size={20} style={{ color: '#FF4500' }} />
        <MdEmail size={20} style={{ color: '#FF4500' }} />
      </div>

      <p className='copy'>©2024 FilmFrontier. All rights Reserved</p>

    </footer>
  )
}

export default Footer