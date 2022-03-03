import React from 'react'
import logo from '../assets/BestPizza.png'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'


export default function Footer() {
  return (
    <footer>
      <div className='social-networks'>
        <FaFacebookSquare />
        <FaInstagram />
      </div>
      <figure>
        <img src={logo} alt='Best Pizza logo'/>
      </figure>      
    </footer>
  )
}
