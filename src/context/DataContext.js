import React, { createContext, useState, useEffect } from 'react'
import { BASE_URL } from '../constants'

export const DataContext = createContext()

const Provider = ({ children }) => {
  const [stores, setStores] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getStores()    
  },[])
  
  const getStores = async () =>{
    await fetch(BASE_URL,{
      method: "GET"
    })
    .then((result)=>result.json())
    .then((data)=>{
      setStores(data?.response?.stores)
      setUsers(data?.response?.users)
    })
  }

  const compareUser = (email, password) => {
    const validateEmail = users.filter((user) => email === user.email)
    
    if(validateEmail.length === 0){
      return false
    }

    const validatePassword = users.filter((user) => password === user.password)

    if(validatePassword.length === 0){
      return false
    }

    return true
  }

  const loadData = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
  }

  const value = {
    stores,
    users,
    compareUser,
    loading,
    loadData
  }

  return (<DataContext.Provider value={value}>{children}</DataContext.Provider>)
}

const Context = {
  Provider,
  Consumer: DataContext.Consumer
}

export default Context
