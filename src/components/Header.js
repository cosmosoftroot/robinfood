import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../assets/ic_pass.png'

export default function Header() {
  return (
    <header>
        <nav>
          <Link to="#" className='link'>
            <img src={logout} alt="logout" />
            <span>Salir</span>
          </Link>
        </nav>
        <section className='title'>
          <span className='breadcrumb'>Pizzerías</span>
        </section>
    </header>
  )
}
