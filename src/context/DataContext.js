import React, { createContext, useState, useEffect } from 'react'
import { BASE_URL } from '../constants'

export const DataContext = createContext()

const Provider = ({ children }) => {
  const [stores, setStores] = useState([])

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
    })
  }
  const value = {
    stores
  }
  return (<DataContext.Provider value={value}>{children}</DataContext.Provider>)
}

const Context = {
  Provider,
  Consumer: DataContext.Consumer
}

export default Context
