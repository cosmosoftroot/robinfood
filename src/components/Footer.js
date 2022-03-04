import React from 'react'
import logo from '../assets/BestPizza.png'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='social-networks'>
        <a href='https://www.facebook.com/robinfood.Col' target={"_blank"} rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href='https://www.instagram.com/robinfoodcol' target={"_blank"} rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <figure>
        <Link to="/tiendas">
          <img src={logo} alt='Best Pizza logo'/>
        </Link>
      </figure>      
    </footer>
  )
}
