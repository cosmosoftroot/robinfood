import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import pizza from '../assets/Pizza.png'
import logo from '../assets/Login-Best-Pizza.png'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {compareUser} = useContext(DataContext)
  const {activateAuth} = useContext(AuthContext)

  let history = useNavigate();

  const handleLogin = () => {
    validateFields()
  }

  const validateFields = () => {
    
    const validation = {}

    if(email === ""){
      validation.email= "Campo obligatorio*"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      validation.email = "Correo no válido";
    }

    if(password === ""){
      validation.password= "Campo obligatorio*"
    }    
    
    if(Object.keys(validation).length === 0){
      const authentication = compareUser(email, password)
      
      if(authentication){
        activateAuth()
        history("/tiendas");
      }
      else{
        validation.authentication = "Verifique los datos ingresados"
      }
    }
    setErrors(validation)
  }

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
          <input className="input__login" type="email" placeholder='Usuario' value={email} onChange={(ev) => setEmail(ev.target.value)}/>
          {!!errors.email && <span className='error'>{errors.email}</span>}
          <input className="input__password" type="password" placeholder='Contraseña' value={password} onChange={(ev) => setPassword(ev.target.value)}/>
          {!!errors.password && <span className='error'>{errors.password}</span>}
          {!!errors.authentication && <span className='error'>{errors.authentication}</span>}
          <Link className="link" to="#">¿Olvidaste tu contraseña?</Link>  
          <button className="login__button" onClick={handleLogin}>Iniciar sesión</button>        
        </section>
      </div>
    </div>
  )
}
