import React from 'react'
import pizza from '../assets/Pizza.png'
import logo from '../assets/Login-Best-Pizza.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <div className='content'>
        <section className='content__image'>
          <img src={pizza} alt="Pizza" />
        </section>
        <section className='content__right'>
          <img src={logo} alt="Logo Best Pizza" />
          <h1>Bienvenido</h1>
          <span className='subtitle'>A las mejores pizzas del país</span>
          <input className="input__login" type="text" placeholder='Usuario' />
          <input className="input__password" type="text" placeholder='Contraseña' />
          <Link className="link" to="/recordar">¿Olvidaste tu contraseña?</Link>  
          <button className="login__button">Iniciar sesión</button>        
        </section>
      </div>
    </div>
  )
}
