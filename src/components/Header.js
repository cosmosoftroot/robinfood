import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logout from '../assets/ic_pass.png'
import { AuthContext } from '../context/AuthContext'

export default function Header() {

  const {removeAuth} = useContext(AuthContext)
  const history = useNavigate()
  
  const handleLogout = () => {
    removeAuth()
    history("/")
  }

  return (
    <header>
        <nav>
          <div className='link' onClick={handleLogout}>
            <img src={logout} alt="logout" />
            <span>Salir</span>
          </div>
        </nav>
        <section className='title'>
          <span className='breadcrumb'><Link to="/tiendas" className='link'>Pizzerías</Link></span>
        </section>
    </header>
  )
}
